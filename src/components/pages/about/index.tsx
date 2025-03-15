export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 bg-primary">
      {/* Professional Summary */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-red-100 mb-6">About Me</h1>
        <div className="bg-red-100 rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="">
                <img
                  src="/public/about_me.jpg"
                  alt="Shiddhartha"
                  className="w-52 h-48 mx-auto rounded-full"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Professional Summary
              </h2>
              <p className="text-gray-600 mb-4">
                I'm a full-stack developer with a passion for creating solutions
                to problems. With over 5 months of experience in web
                development, I specialize in using AI agent to applications.
              </p>
              <p className="text-gray-600">
                My approach combines technical expertise with creative
                problem-solving to deliver better-quality software that meets
                business objectives and user needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-red-100 mb-6">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Frontend
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• React.js </li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• HTML5 / CSS3</li>
              <li>• Redux / Context API</li>
            </ul>
          </div>
          <div className="bg-red-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Backend
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Node.js</li>
              <li>• RESTful APIs</li>
              <li>• MongoDB / MySQL</li>
              <li>• AWS, Bunny CND</li>
              <li>• Netlify</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
        <div className="bg-red-100 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Bachelor of Science in Software Engineering
          </h3>
          <p className="text-gray-600 mb-2">
            Daffodil International University • 2022 - 2026
          </p>
          <p className="text-gray-600">
            Focused on software engineering and web development. Participated in
            various coding competitions.
          </p>
        </div>
      </div>
    </div>
  );
}
