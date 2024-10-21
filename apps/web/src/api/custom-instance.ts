import type { AxiosError, AxiosRequestConfig } from 'axios';
import Axios from 'axios';
import { getSession } from 'next-auth/react';

import { API_QA_URL, API_URL } from '@/config';
import { getUserServerSession } from '@/utils/session/getUserServerSession';

async function getUserClientSession() {
  const session = await getSession();
  return { session };
}

export const AXIOS_INSTANCE = Axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? API_URL : API_QA_URL,
}); // use your own URL here or environment variable

// add a second `options` argument here if you want to pass extra options to each generated query
export const customInstance = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const isServer = typeof window === 'undefined';
  const userSession = isServer
    ? await getUserServerSession()
    : await getUserClientSession();

  const source = Axios.CancelToken.source();

  if (userSession.session) {
    const jwt = `Bearer ${userSession.session.user.email}`;
    const promise = AXIOS_INSTANCE({
      ...config,
      ...options,
      headers: {
        Authorization: jwt,
      },
      cancelToken: source.token,
    }).then(({ data }) => data);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    promise.cancel = () => {
      source.cancel('Query was cancelled');
    };

    return promise;
  } else {
    const promise = AXIOS_INSTANCE({
      ...config,
      ...options,
      cancelToken: source.token,
    }).then(({ data }) => data);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    promise.cancel = () => {
      source.cancel('Query was cancelled');
    };

    return promise;
  }
};

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;
