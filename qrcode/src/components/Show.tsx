import { JSX, PropsWithChildren } from "react";

interface ShowProps<A> extends PropsWithChildren {
  when: A;
  fallback?: JSX.Element;
}

export function Show<A>({
  when,
  children,
  fallback,
}: ShowProps<A>): JSX.Element {
  return <>{when ? children : fallback}</>;
}
