import {
  dehydrate,
  FetchQueryOptions,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

export type WithHydrationBoundaryProps<T> = {
  children: React.ReactNode;
  queryOptions: FetchQueryOptions<T>;
};

export default async function WithHydrationBoundary<T>({
  children,
  queryOptions,
}: Readonly<WithHydrationBoundaryProps<T>>) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(queryOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
