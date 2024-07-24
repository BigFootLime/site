import { WrenchScrewdriverIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

const features = [
    {
        name: 'Opérations efficaces.',
        description:
            'Optimisez vos opérations d\'entrepôt avec nos chariots élévateurs de pointe, conçus pour la performance et la sécurité.',
        icon: WrenchScrewdriverIcon,
    },
    {
        name: 'Sécurité avant tout.',
        description: 'Nos chariots élévateurs sont dotés de fonctionnalités de sécurité avancées et de certifications pour garantir un environnement de travail sécurisé.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Support fiable.',
        description: 'Profitez de la tranquillité d\'esprit avec nos services complets de maintenance et de support, assurant le bon fonctionnement de vos opérations.',
        icon: UserGroupIcon,
    },
]

export default function MainSection() {
    return (
        <section>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Élevez vos opérations</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Solutions supérieures de chariots élévateurs</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Découvrez les meilleurs chariots élévateurs pour améliorer l'efficacité et la sécurité de votre entrepôt. Faites confiance à notre expertise et à nos solutions innovantes.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className="flex items-start justify-end lg:order-first">


                            <Image
                                alt="Product screenshot"
                                src="/Untitled design.svg"
                                width={2432}
                                height={1442}
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
