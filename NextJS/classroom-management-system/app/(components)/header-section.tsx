import Button from "./button";

function HeaderSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Welcome to the Classroom Management System
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Track Attendance, Manage Assignments, and Communicate with Students Seamlessly.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <Button href="#" title="View Attendance" />

            <Button href="#" title="Manage Assignments" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;