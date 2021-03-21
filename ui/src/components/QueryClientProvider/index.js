import React from "react";
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function QueryClientProvider({ children }) {
  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>;
}

export default React.memo(QueryClientProvider);
