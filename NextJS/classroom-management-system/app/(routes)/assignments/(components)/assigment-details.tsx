export default function AssignmentDetailsCard({
    assignmentId,
    name,
    description,
    instructions
}: {
    assignmentId: string;
    name: string;
    description: string;
    instructions: string;
}) {

    return (
        <article className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8">
            <div className="flex items-start sm:gap-8">
                <div
                    className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                    aria-hidden="true"
                >
                    <div className="flex items-center gap-1">
                        <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                        <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                        <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                        <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                        <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                    </div>
                </div>

                <div>
                    <strong
                        className="rounded-sm border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                    >
                       ID # {assignmentId}
                    </strong>

                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                        {name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">
                        {description}
                    </p>

                    <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                        {instructions}
                    </div>
                </div>
            </div>
        </article>
    );
}