import SpinningText from "src/content/spining-text";

export default function Home() {
  return (
    <div className="  bg-primary">
      <div className=" mx-auto px-4 p-16 ">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-2 mb-16">
          <div className="mx-auto lg:ml-40">
            <div className="text-center mb-16 max-h-96 ">
              <h1 className="text-5xl font-bold text-gray-100 mb-4">
                Hi, I'm Shiddhartha Pal
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                I'm a passionate software developer.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="/portfolio"
                  className="bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  View My Work
                </a>
                <a
                  href="/contact"
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="h-2 w-96">
              <SpinningText />
            </div>
            <img
              src="/public/portfolio.jpg"
              alt="Shiddhartha"
              className="mx-auto lg:ml-72 max-h-96 "
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Frontend Development
            </h3>
            <p className="text-gray-600">
              Expertise in React, TypeScript, and modern CSS frameworks like
              Tailwind CSS, Astro.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Backend Development
            </h3>
            <p className="text-gray-600">
              Experience with Node.js, Astro, and database management systems.
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              UI/UX Design
            </h3>
            <p className="text-gray-600">
              Creating intuitive and responsive user interfaces with modern
              design principles.
            </p>
          </div>
        </div>

        {/* Featured Work */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-200 mb-8">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-200 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Project One
                </h3>
                <p className="text-gray-600 mb-4">
                  A full-stack video stream application built with React and
                  TypeScript.
                </p>
                <a
                  href="/portfolio"
                  className="text-blue-700 hover:text-blue-800 font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
            <div className="bg-blue-200 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Project Two
                </h3>
                <p className="text-gray-600 mb-4">Working</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
