"use client";
import { useGetQueryClient } from "@/hooks/useGetQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type * as React from "react";
import { CounterStoreProvider } from "./counter-store-provider";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  const queryClient = useGetQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <CounterStoreProvider>{children}</CounterStoreProvider>
    </QueryClientProvider>
  );
}
