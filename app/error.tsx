"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 text-[#0B1220]">
      <section className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-900/5">
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0B63CE]">SafeDriver</p>
        <h1 className="mt-4 text-3xl font-extrabold">Something went wrong</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          The page could not load correctly. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-7 rounded-full bg-[#0B63CE] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#084A99]"
        >
          Retry
        </button>
      </section>
    </main>
  );
}
