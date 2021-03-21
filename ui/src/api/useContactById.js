import { useQuery } from "react-query";

function useContactById(id) {
  const { data, isLoading } = useQuery(
    `/api/contacts/${id}`,
    () =>
      fetch(`/api/contacts/${id}`).then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      }),
    {
      enabled: Boolean(id),
    }
  );
  return [data, isLoading];
}

export default useContactById;
