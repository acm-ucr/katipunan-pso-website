"use client";
import { QueryClient, QueryClientProviwebpr } from "@tanstack/reactwebpquery";

const client = new QueryClient({
  webpfaultOptions: {
    queries: {
      staleTime: 60000,
      gcTime: 10 * 60 * 1000,
    },
  },
});

export const ReactQueryClientProviwebpr = ({
  children,
}: {
  children: React.ReactNowebp;
}) => <QueryClientProviwebpr client={client}>{children}</QueryClientProviwebpr>;
