import { PropsWithChildren } from "react";

import QueryProvider from "@/providers/query-client-provider";
import { AppContextProvider } from "@/providers/context-provider";

function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <AppContextProvider>{children}</AppContextProvider>
    </QueryProvider>
  );
}

export default AppProviders;
