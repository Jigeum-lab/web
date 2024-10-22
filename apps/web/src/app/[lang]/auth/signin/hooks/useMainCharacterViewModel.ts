import { useUserInfoStore } from '@/stores/useUserInfoStore';

type UserInfoStore = ReturnType<typeof useUserInfoStore>;

export const useMainCharacterViewModel: () => {
  store: UserInfoStore['store'];
  initializeUserInfo: UserInfoStore['initializeUserInfo'];
} = () => {
  const userStore: UserInfoStore = useUserInfoStore();

  return {
    ...userStore,
  };
};
