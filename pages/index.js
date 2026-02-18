import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          The Neural Control of Metabolism and Reproductive Function
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
          We define hypothalamic and melanocortin circuits that regulate energy balance, fertility, and motivated
          behaviors.
        </p>
      </section>

      <section className="mb-14">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Research Programs</h2>
          <Link href="/projects">
            <a className="text-sm text-teal-700 hover:underline dark:text-teal-300">View all</a>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold">Melanocortin Circuits and Energy Homeostasis</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              We test how melanocortin pathways coordinate feeding, autonomic output, and metabolic adaptation across
              physiological states.
            </p>
            <p className="mt-3">
              <Link href="/projects">
                <a className="text-sm text-teal-700 hover:underline dark:text-teal-300">Learn more</a>
              </Link>
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold">Neuroendocrine Control of Reproductive Function</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              We define neural mechanisms that gate reproductive axis function and reproductive behaviors in response
              to internal state.
            </p>
            <p className="mt-3">
              <Link href="/projects">
                <a className="text-sm text-teal-700 hover:underline dark:text-teal-300">Learn more</a>
              </Link>
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold">Metabolic Dysfunction in PCOS and Pregnancy</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              We investigate how metabolic and endocrine disturbances reshape hypothalamic control systems and
              influence maternal and offspring outcomes.
            </p>
            <p className="mt-3">
              <Link href="/projects">
