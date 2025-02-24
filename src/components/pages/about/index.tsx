export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Professional Summary */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="w-48 h-48 mx-auto rounded-full bg-gray-200"></div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Professional Summary
              </h2>
              <p className="text-gray-600 mb-4">
                I'm a full-stack developer with a passion for creating elegant
                solutions to complex problems. With over 5 years of experience
                in web development, I specialize in building scalable
                applications using modern technologies.
              </p>
              <p className="text-gray-600">
                My approach combines technical expertise with creative
                problem-solving to deliver high-quality software that meets
                business objectives and user needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Frontend
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• React.js / Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• HTML5 / CSS3</li>
              <li>• Redux / Context API</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Backend
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Node.js / Express</li>
              <li>• RESTful APIs</li>
              <li>• MongoDB / PostgreSQL</li>
              <li>• AWS / Docker</li>
              <li>• GraphQL</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Experience
        </h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Senior Software Engineer
            </h3>
            <p className="text-gray-600 mb-2">Tech Company • 2020 - Present</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Led development of multiple high-impact web applications</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>
                Implemented CI/CD pipelines and improved development workflows
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Software Developer
            </h3>
            <p className="text-gray-600 mb-2">Digital Agency • 2018 - 2020</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Developed responsive web applications for various clients</li>
              <li>
                Collaborated with design team to implement UI/UX improvements
              </li>
              <li>Optimized application performance and user experience</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-gray-600 mb-2">University Name • 2014 - 2018</p>
          <p className="text-gray-600">
            Focused on software engineering and web development. Participated in
            various coding competitions and hackathons.
          </p>
        </div>
      </div>
    </div>
  );
}
