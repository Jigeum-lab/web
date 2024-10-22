/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * PhaseOn API
 * 페이즈온 API 문서
 * OpenAPI spec version: v1
 */
import {
  useMutation
} from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult
} from '@tanstack/react-query'
import type {
  ApiResponseBoolean,
  ApiResponseObject,
  ApiResponseSetProjectLink,
  ProjectLinkUpdateRequest,
  UpdateMembersParams
} from '../../types/apis'
import { customInstance } from '../../api/custom-instance';
import type { ErrorType, BodyType } from '../../api/custom-instance';



/**
 *  ## 프로젝트 슬러그 수정 API 입니다.
따라서 슬러그 수정은 **프로젝트 생성자만 가능**합니다.
 * @summary 프로젝트 슬러그 수정(개발중)
 */
export const updateProjectSlug = (
    slug: string,
 ) => {
      
      
      return customInstance<ApiResponseBoolean>(
      {url: `/api/v1/projects/${slug}/slug`, method: 'PATCH'
    },
      );
    }
  


export const getUpdateProjectSlugMutationOptions = <TError = ErrorType<ApiResponseObject>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateProjectSlug>>, TError,{slug: string}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof updateProjectSlug>>, TError,{slug: string}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateProjectSlug>>, {slug: string}> = (props) => {
          const {slug} = props ?? {};

          return  updateProjectSlug(slug,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UpdateProjectSlugMutationResult = NonNullable<Awaited<ReturnType<typeof updateProjectSlug>>>
    
    export type UpdateProjectSlugMutationError = ErrorType<ApiResponseObject>

    /**
 * @summary 프로젝트 슬러그 수정(개발중)
 */
export const useUpdateProjectSlug = <TError = ErrorType<ApiResponseObject>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateProjectSlug>>, TError,{slug: string}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof updateProjectSlug>>,
        TError,
        {slug: string},
        TContext
      > => {

      const mutationOptions = getUpdateProjectSlugMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 *  ## 프로젝트 멤버 수정 API 입니다.
makers에 사용 가능한 RoleType은 다음과 같습니다. 역할은 최대 3개까지 가능합니다. <br>
`PROJECT_MANAGER` `PROJECT_OWNER` `PROJECT_LEADER` `PROJECT_ASSISTANT` `QUALITY_ASSURANCE`
`DEVELOPER` `DEVELOPER_FULLSTACK` `DEVELOPER_BACKEND` `DEVELOPER_WEB_FRONTEND` `DEVELOPER_APP_ANDROID`
`DEVELOPER_APP_IOS` `DEVELOPER_APP_FLUTTER` `DEVELOPER_APP_REACTNATIVE` `DEVELOPER_DEVOPS` `DEVELOPER_AI`
`DESIGNER` `DESIGNER_UXUI` `DESIGNER_BX` `MARKETER`
        
 * @summary 프로젝트 메이커 수정
 */
export const updateMembers = (
    slug: string,
    params: UpdateMembersParams,
 ) => {
      
      
      return customInstance<ApiResponseBoolean>(
      {url: `/api/v1/projects/${slug}/makers`, method: 'PATCH',
        params
    },
      );
    }
  


export const getUpdateMembersMutationOptions = <TError = ErrorType<ApiResponseObject>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateMembers>>, TError,{slug: string;params: UpdateMembersParams}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof updateMembers>>, TError,{slug: string;params: UpdateMembersParams}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateMembers>>, {slug: string;params: UpdateMembersParams}> = (props) => {
          const {slug,params} = props ?? {};

          return  updateMembers(slug,params,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UpdateMembersMutationResult = NonNullable<Awaited<ReturnType<typeof updateMembers>>>
    
    export type UpdateMembersMutationError = ErrorType<ApiResponseObject>

    /**
 * @summary 프로젝트 메이커 수정
 */
export const useUpdateMembers = <TError = ErrorType<ApiResponseObject>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateMembers>>, TError,{slug: string;params: UpdateMembersParams}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof updateMembers>>,
        TError,
        {slug: string;params: UpdateMembersParams},
        TContext
      > => {

      const mutationOptions = getUpdateMembersMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 *  ## 프로젝트 링크 수정 API 입니다.
프로젝트 링크 수정 시 **기존 링크는 모두 삭제**되고, **새로운 링크로** 대체됩니다. <br>
따라서 모든 링크를 입력해야 합니다.<br>
링크 입력 시 지정된 링크는 자동으로 태그가 설정됩니다. <br>
- ex) www.github.com -> GitHub
 * @summary 프로젝트 링크 수정
 */
export const updateProjectLinks = (
    slug: string,
    projectLinkUpdateRequest: BodyType<ProjectLinkUpdateRequest>,
 ) => {
      
      
      return customInstance<ApiResponseSetProjectLink>(
      {url: `/api/v1/projects/${slug}/links`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: projectLinkUpdateRequest
    },
      );
    }
  


export const getUpdateProjectLinksMutationOptions = <TError = ErrorType<ApiResponseObject>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateProjectLinks>>, TError,{slug: string;data: BodyType<ProjectLinkUpdateRequest>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof updateProjectLinks>>, TError,{slug: string;data: BodyType<ProjectLinkUpdateRequest>}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateProjectLinks>>, {slug: string;data: BodyType<ProjectLinkUpdateRequest>}> = (props) => {
          const {slug,data} = props ?? {};

          return  updateProjectLinks(slug,data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UpdateProjectLinksMutationResult = NonNullable<Awaited<ReturnType<typeof updateProjectLinks>>>
    export type UpdateProjectLinksMutationBody = BodyType<ProjectLinkUpdateRequest>
    export type UpdateProjectLinksMutationError = ErrorType<ApiResponseObject>

    /**
 * @summary 프로젝트 링크 수정
 */
export const useUpdateProjectLinks = <TError = ErrorType<ApiResponseObject>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateProjectLinks>>, TError,{slug: string;data: BodyType<ProjectLinkUpdateRequest>}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<typeof updateProjectLinks>>,
        TError,
        {slug: string;data: BodyType<ProjectLinkUpdateRequest>},
        TContext
      > => {

      const mutationOptions = getUpdateProjectLinksMutationOptions(options);

      return useMutation(mutationOptions);
    }
    