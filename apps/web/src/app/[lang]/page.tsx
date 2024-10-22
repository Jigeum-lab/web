import MainView from '@/app/[lang]/main/view';
import HydratePage from '@/components/basic/HydratePage';
import { getGetProjectListQueryOptions } from '@/models/project-read-api/project-read-api';
import getQueryClient from '@/utils/query/getQueryClient';

const Web = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    ...getGetProjectListQueryOptions(),
  });

  return (
    <HydratePage queryClient={queryClient}>
      <MainView />
    </HydratePage>
  );
};

export default Web;
