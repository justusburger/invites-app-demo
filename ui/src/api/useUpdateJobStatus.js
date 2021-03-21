import { useMutation } from "react-query";

function useUpdateJobStatus(id) {
  const url = `/api/jobs/${id}`;
  const { mutateAsync, isLoading, isSuccess } = useMutation(url, ({ status }) =>
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    }).then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
  );
  return [mutateAsync, isLoading, isSuccess];
}

export default useUpdateJobStatus;
