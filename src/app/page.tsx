import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-6">
      <main className="max-w-xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          AudoraLabs
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          next-starter
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg text-neutral-400">
          Production-ready Next.js starter with sane defaults.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="https://github.com/AudoraLabs/next-starter"
            className="inline-flex h-11 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/AudoraLabs"
            className="text-sm text-neutral-500 transition-colors hover:text-white"
          >
            View on GitHub
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-md rounded-md border border-neutral-800 bg-neutral-900 p-4">
          <code className="text-sm text-neutral-300">
            <span className="text-neutral-600">$</span> bunx degit audoralabs/next-starter my-app
          </code>
        </div>
      </main>
    </div>
  );
}
