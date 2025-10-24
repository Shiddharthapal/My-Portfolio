import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                I'm a passionate Full Stack Developer with expertise in building
                modern web applications using the MERN stack (MongoDB,
                Express.js, React, and Node.js).
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                With several years of experience in web development, I focus on
                creating efficient, scalable, and user-friendly applications
                that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I'm constantly learning and staying up-to-date with the latest
                technologies and best practices in web development.
              </p>
            </div>
            <div className="relative">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                src="/about_me.jpg"
                alt="About Me"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
