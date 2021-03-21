import { useQuery } from "react-query";

function useCategoryById(id) {
  const { data, isLoading } = useQuery(
    `/api/categories/${id}`,
    () =>
      fetch(`/api/categories/${id}`).then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      }),
    {
      enabled: Boolean(id),
    }
  );
  return [data, isLoading];
}

export default useCategoryById;
