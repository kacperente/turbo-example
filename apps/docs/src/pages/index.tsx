import Head from "next/head";
import { Button } from "ui";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Docs - Turborepo Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <div className="mx-auto mt-5 max-w-xl flex-col sm:flex sm:justify-center md:mt-8">
          <h1 className="mx-auto max-w-5xl mb-3 text-center text-6xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-8xl">
            Docs test
          </h1>
          <Button>My button</Button>
        </div>
      </main>
    </div>
  );
}
