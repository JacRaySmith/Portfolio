import "./styles/portfolio.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Jackson Smith</h1>
        <p>Software Developer | Student</p>
        <a href="https://www.linkedin.com/in/jackson-smith-720430270/">
          LinkedIn
        </a>
        <br />
        <a href="https://github.com/JacRaySmith">GitHub</a>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            I'm a computer science student building projects in web development,
            software engineering, and data-driven applications.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <strong>AI-Powered Ballot Analysis Web Application</strong>—
            <em>Full-Stack Development</em>
            <ul>
              <li>
                Built a web application that provides personalized ballot
                information based on user input
              </li>
              <li>
                Implemented ballot lookup and web scraping to gather data from
                multiple sources per item
              </li>
              <li>
                Used Google's AI API to summarize scraped content into
                consistent, readable outputs
              </li>
              <li>
                Developed logic to match user beliefs with summarized ballot
                positions for guidance
              </li>
            </ul>
          </div>
          <div className="project">
            <strong>Portfolio Website</strong>—<em>React, JSX, JavaScrip</em>{" "}
            <br />
            <ul>
              <li>
                Developed a personal website using React and JSX to present
                software projects and skills{" "}
              </li>
              <li>
                Built reusable components, interactive UI elements, and
                responsive layouts
              </li>
              <li>
                Integrated project pages and external GitHub repositories
                dynamically
              </li>
              <li>
                Deployed using Netlify, ensuring continuous deployment from
                GitHub
              </li>
            </ul>
          </div>
          <div className="project">
            <strong>Grocery Search</strong>—<em>Data Structures</em>
            <ul>
              <li>
                Evaluated user-inputted data and stored information in a linked
                list
              </li>
              <li>
                Constructed and traversed a binary search tree to retrieve
                product details efficiently
              </li>
              <li>
                Implemented dynamic insertion and deletion while preserving the
                tree structure
              </li>
              <li>
                Managed memory allocation to prevent leaks and optimize runtime
              </li>
            </ul>
          </div>
          <div className="project">
            <strong>Minesweeper</strong>—<em>Data Structures</em>
            <ul>
              <li>Implemented functions that used input files and user input to affect stored data</li>
              <li>Wrote makefile functions as well as used recursive calls to sift data</li>
              <li>Utilized pointers to store data in the heap when necessary, with no storage leaks</li>
              <li>Effectively used DDD to find bugs and errors within written code</li>
            </ul>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: jacksons041011@gmail.com</p>
        </section>
      </main>
    </div>
  );
}

export default App;
