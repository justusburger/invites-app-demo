import { useQuery } from "react-query";

function useJobsSearch(status) {
  const url = `/api/jobs/search?status=${status}`;
  const { data, isLoading, refetch } = useQuery(
    url,
    () =>
      fetch(url).then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      }),
    {
      enabled: Boolean(status),
    }
  );
  return [data, isLoading, refetch];
}

export default useJobsSearch;

export const JOB_STATUS_NEW = "new";
export const JOB_STATUS_ACCEPTED = "accepted";
export const JOB_STATUS_DECLINED = "declined";
