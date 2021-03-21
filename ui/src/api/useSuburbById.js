import { useQuery } from "react-query";

function useSuburbById(id) {
  const { data, isLoading } = useQuery(
    `/api/suburbs/${id}`,
    () =>
      fetch(`/api/suburbs/${id}`).then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      }),
    {
      enabled: Boolean(id),
    }
  );
  return [data, isLoading];
}

export default useSuburbById;
