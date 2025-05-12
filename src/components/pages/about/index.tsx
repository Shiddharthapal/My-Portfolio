export default function About() {
  return (
    <div className=" mx-auto px-4 py-16 bg-primary">
      {/* Professional Summary */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
        <div className="bg-blue-200 rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="">
                <img
                  src="/about_me.jpg"
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
                I’m a passionate fullstack developer with 3 years of web development experience and 1 year
                of hands-on work in Node.js. I’ve built and maintained real-world applications, 
                including a video streaming platform for over 10,000 users and Contest Tracker. I enjoy solving problems, 
                writing clean code, and continuously learning new technologies like Nest.js and Docker.
              </p>
        
             
            </div>
            
          </div>
          <div>
            <p className="text-gray-600 mb-4">
                Also I have Interned from <a  href="https://www.decodeit.org//"
                className="text-blue-700">DecodeIT</a> where I 
                sharpen my axe by building full-stack apps using Node.js, React and MongoDB.
              </p>
            <p className="text-gray-600">
                I’ve been using AI agents in my development work for the past year. It helps me to enhance productivity,
                handle repetitive backend tasks and add smart features to my projects. I’m confident that I can deliver 
                clean and efficient code.
              </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-200 rounded-lg shadow-md p-6">
            
            <ul className="space-y-2 text-gray-600">
              <li>• Node.js</li>
              <li>• RESTful APIs</li>
              <li>• TypeScript</li>
              <li>• JavaScript</li>
              <li>• React.js </li>
              <li>• Git</li>
              <li>• ClickUp</li>
            </ul>
          </div>
          <div className="bg-blue-200 rounded-lg shadow-md p-6">
    
            <ul className="space-y-2 text-gray-600">
              <li>• AI Agent</li>
              <li>• Astro</li>
              <li>• Redux</li>
              <li>• MongoDB / MySQL</li>
              <li>• Tailwind CSS</li>
              <li>• HTML5/CSS3</li>
              <li>• AWS, Bunny CND</li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Education */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
        <div className="bg-blue-200 rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            Bsc in Software Engineering
          </p>
          <p className="text-gray-600 mb-2">
            Daffodil International University
          </p>
          
        </div>
      </div>
    </div>
  );
}
