import {
  dehydrate,
  FetchQueryOptions,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

export type WithHydrationProps<T> = {
  children: React.ReactNode;
  queryOptions: FetchQueryOptions<T>;
};

export default async function WithHydration<T>({
  children,
  queryOptions,
}: Readonly<WithHydrationProps<T>>) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(queryOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
