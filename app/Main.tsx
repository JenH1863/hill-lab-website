import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Hero */}
      <section className="space-y-3 pt-10 pb-10">
        <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
          The Neural Control of Metabolism and Reproductive Function
        </h1>
        <p className="max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-300">
          We define hypothalamic and melanocortin circuits that regulate energy balance, fertility, and motivated behaviors.
        </p>
        <p className="max-w-3xl text-sm leading-6 text-gray-500 dark:text-gray-400">
          {siteMetadata.description}
        </p>
      </section>

      {/* Research Programs */}
      <section className="pt-10 pb-12">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Research Programs
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Melanocortin Circuits and Energy Homeostasis
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
              We test how POMC and melanocortin receptor circuits coordinate feeding, energy expenditure, and glucose homeostasis
              using rodent models and circuit-level manipulations.
            </p>
            <div className="mt-3">
              <Link className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/research">
                Learn more →
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Neuroendocrine Control of Reproductive Function
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
              We define how metabolic state influences reproductive competence through hypothalamic integration of hormonal and
              nutrient signals.
            </p>
            <div className="mt-3">
              <Link className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/research">
                Learn more →
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Metabolic Dysfunction in PCOS and Pregnancy
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
              We investigate mechanisms linking metabolic dysfunction and endocrine signaling to adverse cardiometabolic outcomes
              in PCOS and pregnancy.
            </p>
            <div className="mt-3">
              <Link className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/research">
                Learn more →
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Astrocyte Insulin Signaling and CNS Metabolic Regulation
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
              We study how glial insulin signaling shapes neuroendocrine outputs that control metabolism and reproductive health.
            </p>
            <div className="mt-3">
              <Link className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/research">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="pt-10 pb-12">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Selected Publications
        </h2>

        <div className="mt-6 space-y-4">
          <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Hill JW</span> et al. (2024). [Add title]. [Add journal].
          </p>
          <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Hill JW</span> et al. (2023). [Add title]. [Add journal].
          </p>
          <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Hill JW</span> et al. (2022). [Add title]. [Add journal].
          </p>
        </div>

        <div className="mt-4">
          <Link className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/publications">
            View all publications →
          </Link>
        </div>
      </section>

      {/* The Lab */}
      <section className="pt-10 pb-12">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          The Lab
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 dark:text-gray-300">
          The Hill Lab integrates systems neuroscience, endocrinology, and metabolic physiology to define neural mechanisms that
          coordinate energy balance and reproductive health. We train graduate, postdoctoral, and undergraduate researchers in
          rigorous experimental design and quantitative analysis.
        </p>
        <div className="mt-4">
          <Link className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/people">
            Meet the team →
          </Link>
        </div>
      </section>

      {/* News */}
      <section className="pt-10 pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          News
        </h2>
        <div className="mt-6 space-y-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
          <p>[Month Year] — [News item 1].</p>
          <p>[Month Year] — [News item 2].</p>
          <p>[Month Year] — [News item 3].</p>
        </div>
        <div className="mt-4">
          <Link className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/news">
            All news →
          </Link>
        </div>
      </section>
    </div>
  )
}
