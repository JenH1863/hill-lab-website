import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
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
              We test how POMC and melanocortin receptor circuits coordinate feeding, energy expenditure, and glucose
              homeostasis using rodent mode
