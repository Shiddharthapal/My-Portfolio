import { useNavigate } from "react-router-dom";

export default function Dream() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center px-2 py-5 bg-[hsl(264,45%,96%)] dark:bg-[hsl(260,30%,14%)]">
      <div className="mx-auto max-w-4xl px-4 my-10 ">
        <div className="flex flex-row gap-3">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mb-6 inline-flex items-center text-cyan-600 hover:text-purple-600 dark:text-cyan-400 dark:hover:text-purple-400 transition-colors duration-200"
        >
          ← Back
        </button>
        <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-8 dark:text-[hsl(0,0%,96%)]">
          My{" "}
          <span className="bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Dream
          </span>
        </h2>
        </div>
        <div className="space-y-5 text-lg  text-gray-500 dark:text-[hsl(261,15%,70%)]">
          <p>
            I come from a small rural village where dreams are often bigger
            than the resources around you. My father is a businessman who
            studied only up to class 5, and my mother is a homemaker who
            studied till class 9. From that environment, simple, grounded, and
            full of struggle, I built the foundation of who I am today.
          </p>
          <p>
            Since my school days, one dream stayed constant in my mind: to
            become a software engineer. During that time, I first learned about
            software engineering from my brother-in-law, who is a software
            engineer. He introduced me to what a software engineer
            does, how they build software, solve real-world problems, and play an
            important role in shaping technology. Listening to his opened a new
            world for me. I did not fully understand everything back then, but
            I knew I wanted to build things, solve problems, and create
            something meaningful through technology.
          </p>
          <p>
            When I entered college, that dream became clearer and stronger.
            Becoming a software engineer was no longer just a wish, it became
            my fixed target. From my very first day at university to where I
            stand today, I have worked intentionally toward that goal. I
            focused on academics when it mattered, and I invested deeply in
            problem-solving to sharpen my thinking.
          </p>
          <p>
            Today, my focus is clear: problem solving and software development.
            I am constantly learning, building, and improving myself step by
            step towards becoming the engineer I once dreamed of.
          </p>
          <p>
            My journey started in a village, but my ambition has no boundaries.
            My dream is simple, yet bold: to become a top-level software
            engineer in the world.
          </p>
          <p>And this is just the beginning.</p>
        </div>
      </div>
    </section>
  );
}
