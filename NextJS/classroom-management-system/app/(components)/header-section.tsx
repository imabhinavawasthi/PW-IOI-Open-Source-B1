function HeaderSection({title, subtitle}: {title?: string, subtitle?: string}) {
  return (
    <section className="bg-white">
      <div className="mx-auto w-screen max-w-7xl">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            {title}
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            {subtitle}
          </p>

        </div>
      </div>
    </section>
  );
}

export default HeaderSection;