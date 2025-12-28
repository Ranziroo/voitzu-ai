export default function ForgotPasswordLoading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* TITLE */}
        <div className="mb-8 space-y-2 flex flex-col items-center">
          <div className="h-6 w-56 rounded-full shimmer" />
          <div className="h-4 w-44 rounded-full shimmer" />
        </div>

        {/* CARD */}
        <div className="rounded-3xl bg-[#111] border border-white/5 p-6 space-y-4 shadow-xl">
          <div className="h-11 rounded-xl shimmer" />
          <div className="h-11 rounded-full shimmer" />
          <div className="flex justify-center mt-2">
            <div className="h-3 w-24 rounded-full shimmer" />
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="mt-6 flex justify-center">
          <div className="h-3 w-40 rounded-full shimmer" />
        </div>
      </div>
    </div>
  );
}
