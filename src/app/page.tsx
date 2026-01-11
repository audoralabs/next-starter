import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-6">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>
      <main className="max-w-xl text-center">
        <p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase dark:text-neutral-500">
          AudoraLabs
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl dark:text-white">
          next-starter
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg text-neutral-600 dark:text-neutral-400">
          Production-ready Next.js starter with sane defaults.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="https://github.com/AudoraLabs/next-starter"
            className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-950 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/AudoraLabs"
            className="text-sm text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-500 dark:hover:text-white"
          >
            View on GitHub
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-md rounded-md border border-neutral-200 bg-neutral-200 p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <code className="text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            <span className="text-neutral-400 dark:text-neutral-600">$</span>{" "}
            bunx degit audoralabs/next-starter my-app
          </code>
        </div>
      </main>
    </div>
  );
}
