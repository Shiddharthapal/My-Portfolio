export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm a passionate software developer specializing in creating beautiful
          and functional web applications.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/portfolio"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Frontend Development
          </h3>
          <p className="text-gray-600">
            Expertise in React, TypeScript, and modern CSS frameworks like
            Tailwind CSS.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Backend Development
          </h3>
          <p className="text-gray-600">
            Experience with Node.js, Express, and database management systems.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            UI/UX Design
          </h3>
          <p className="text-gray-600">
            Creating intuitive and responsive user interfaces with modern design
            principles.
          </p>
        </div>
      </div>

      {/* Featured Work */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Project One
              </h3>
              <p className="text-gray-600 mb-4">
                A full-stack web application built with React and Node.js.
              </p>
              <a
                href="/portfolio"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Project Two
              </h3>
              <p className="text-gray-600 mb-4">
                An e-commerce platform with advanced features and integrations.
              </p>
              <a
                href="/portfolio"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
