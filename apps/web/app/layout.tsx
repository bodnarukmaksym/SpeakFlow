import type { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return <div id="layout">{children}</div>;
}
