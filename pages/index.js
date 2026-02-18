import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          The Neural Control of Metabolism and Reproductive Function
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
          We define hypothalamic and melanocortin circuits that regulate energy balance, fertility, and
          motivated behaviors.
        </p>
      </section>

      <section className="mb-14">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Research Programs</h2>
          <Link href="/projects" className="text-sm text-teal-700 hover:underline dark:text-teal-300">
            View all
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold">Melanocortin Circuits and Energy Homeostasis</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              We test how melanocortin pathways coordinate feeding, autonomic output, and metabolic adaptation
              across physiological states.
            </p>
            <p className="mt-3">
              <Link href="/projects" className="text-sm text-teal-700 hover:underline dark:text-teal-300">
                Learn more
              </Link>
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold">Neuroendocrine Control of Reproductive Function</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              We define neural mechanisms that gate reproductive axis function and reproductive behaviors in
              response to internal state.
            </p>
            <p className="mt-3">
              <Link href="/projects" className="text-sm text-teal-700 hover:underline dark:text-teal-300">
                Learn more
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
              <Link href="/projects" className="text-sm text-teal-700 hover:underline dark:text-teal-300">
                Learn more
              </Link>
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="text-lg font-semibold">Astrocyte Insulin Signaling and CNS Metabolic Regulation</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              We test how astrocyte insulin action shapes neuroendocrine outputs relevant to metabolism and
              reproductive health.
            </p>
            <p className="mt-3">
              <Link href="/projects" className="text-sm text-teal-700 hover:underline dark:text-teal-300">
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Selected Publications</h2>
          <Link href="/publications" className="text-sm text-teal-700 hover:underline dark:text-teal-300">
            View all
          </Link>
        </div>

        <ol className="space-y-4">
          <li className="rounded-lg border border-gray-200 p-5 dark:border-gray-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Hill JW</span>, Coauthor A, Coauthor B. 2024. Paper title goes here.
              Journal.{' '}
              <a className="text-teal-700 hover:underline dark:text-teal-300" href="#" aria-label="PubMed link">
                PubMed
              </a>
            </p>
          </li>
          <li className="rounded-lg border border-gray-200 p-5 dark:border-gray-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Hill JW</span>, Coauthor A, Coauthor B. 2023. Paper title goes here.
              Journal.{' '}
              <a className="text-teal-700 hover:underline dark:text-teal-300" href="#" aria-label="PubMed link">
                PubMed
              </a>
            </p>
          </li>
          <li className="rounded-lg border border-gray-200 p-5 dark:border-gray-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Hill JW</span>, Coauthor A, Coauthor B. 2022. Paper title goes here.
              Journal.{' '}
              <a className="text-teal-700 hover:underline dark:text-teal-300" href="#" aria-label="PubMed link">
                PubMed
              </a>
            </p>
          </li>
        </ol>
      </section>

      <section className="mb-14">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">The Lab</h2>
          <Link href="/about" className="text-sm text-teal-700 hover:underline dark:text-teal-300">
            Meet the team
          </Link>
        </div>

        <p className="max-w-3xl text-base text-gray-700 dark:text-gray-300">
          We are a team studying neural and hormonal mechanisms that coordinate metabolism and reproduction. Our work
          integrates physiology, neuroendocrinology, and circuit-level approaches in rodent models, with the goal of
          defining actionable mechanisms relevant to metabolic disease and reproductive health.
        </p>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">News</h2>
          <Link href="/blog" className="text-sm text-teal-700 hover:underline dark:text-teal-300">
            View all
          </Link>
        </div>

        <ul className="space-y-4">
          <li className="rounded-lg border border-gray-200 p-5 dark:border-gray-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold">2026-02-01</span>. Placeholder news item. Replace with grant, paper,
              award, or talk.
            </p>
          </li>
          <li className="rounded-lg border border-gray-200 p-5 dark:border-gray-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold">2026-01-15</span>. Placeholder news item.
            </p>
          </li>
          <li className="rounded-lg border border-gray-200 p-5 dark:border-gray-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold">2025-12-10</span>. Placeholder news item.
            </p>
          </li>
        </ul>
      </section>
    </main>
  )
}
