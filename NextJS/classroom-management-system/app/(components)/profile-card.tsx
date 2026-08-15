export default function ProfileCard({
    name,
    codechef_url,
    github_url,
    website,
    address,
    introduction
}: {
    name: string,
    codechef_url: string,
    github_url: string,
    website: string,
    address: string,
    introduction: string,
}) {
    return (
        <>
            <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
                <div className="flex items-center gap-4">
                    <div>
                        <h3 className="text-lg font-medium text-white">{name}</h3>

                        <div className="flow-root">
                            <ul className="-m-1 flex flex-wrap">
                                <li className="p-1 leading-none">
                                    <a href={codechef_url} className="text-xs font-medium text-gray-300"> Codechef </a>
                                </li>

                                <li className="p-1 leading-none">
                                    <a href={github_url} className="text-xs font-medium text-gray-300"> GitHub </a>
                                </li>

                                <li className="p-1 leading-none">
                                    <a href={website} className="text-xs font-medium text-gray-300">Website</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <ul className="mt-4 space-y-2">
                    <li>
                        <a
                            href="#"
                            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                        >
                            <strong className="font-medium text-white">Address</strong>

                            <p className="mt-1 text-xs font-medium text-gray-300">
                                {address}
                            </p>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                        >
                            <strong className="font-medium text-white">Introduction</strong>

                            <p className="mt-1 text-xs font-medium text-gray-300">
                                {introduction}
                            </p>
                        </a>
                    </li>
                </ul>
            </article>
        </>
    )
}