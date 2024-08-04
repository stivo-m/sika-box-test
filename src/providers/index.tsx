import { PropsWithChildren } from "react";
import QueryProvider from "./query-client-provider";

function AppProviders({ children }: PropsWithChildren) {
  return <QueryProvider>{children}</QueryProvider>;
}

export default AppProviders;
