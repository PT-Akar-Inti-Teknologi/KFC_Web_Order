"use client";
import type * as React from "react";
import { useGetQueryClient } from "@/hooks/useGetQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useLocale,
} from "next-intl";
import { CounterStoreProvider } from "./counter-store-provider";

export default function Providers({
  children,
  messages,
}: Readonly<{ children: React.ReactNode; messages?: AbstractIntlMessages }>) {
  const queryClient = useGetQueryClient();
  const localeActive = useLocale();

  return (
    <NextIntlClientProvider messages={messages} locale={localeActive}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <CounterStoreProvider>{children}</CounterStoreProvider>
      </QueryClientProvider>
    </NextIntlClientProvider>
  );
}
