export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 text-[#0B1220]">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#BFDBFE] border-t-[#0B63CE]" />
        <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Loading SafeDriver</p>
      </div>
    </main>
  );
}
