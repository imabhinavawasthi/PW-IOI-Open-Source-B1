export default function ProfileCard({
    codechef_url,
    github_url,
    website,
    profileData,
    updateProfileData
}: {
    codechef_url: string,
    github_url: string,
    website: string,
    profileData: object
    updateProfileData: unknown
}) {
    return (
        <>
            <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
                <div className="flex items-center gap-4">
                    <div>
                        <h3 className="text-lg font-medium text-white">{profileData?.name}</h3>

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
                                {profileData?.address}
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
                                {profileData?.introduction}
                            </p>
                        </a>
                    </li>
                </ul>

                <form className="mt-5">
                    <label className="text-white">Update Details</label>
                    <input
                        onChange={(e) => {
                            updateProfileData("name", e.target.value)
                        }}
                        className="w-full text-white p-2 border-2 border-green-800" type="text" placeholder="update name"
                        defaultValue={profileData?.name} />
                    <input
                    onChange={(e) => {
                            updateProfileData("address", e.target.value)
                        }}
                        className="w-full text-white p-2 border-2 border-green-800" type="text" placeholder="update address"
                        defaultValue={profileData?.address} />
                    <input
                    onChange={(e) => {
                            updateProfileData("introduction", e.target.value)
                        }}
                        className="w-full text-white p-2 border-2 border-green-800" type="text" placeholder="update introduction"
                        defaultValue={profileData?.introduction} />
                </form>
            </article>
        </>
    )
}