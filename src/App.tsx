import "./styles/portfolio.css"

function App() {
  return (
    <div className="container">
      <header>
        <h1>Jackson Smith</h1>
        <p>Software Developer | Student</p>
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
            <strong>AI-Powered Ballot Analysis Web Application</strong> 
            — 
            <em>Full-Stack Development</em> <br />
            Built a web application that provides personalized ballot information based on user input
            Implemented ballot lookup and web scraping to gather data from multiple sources per item
            Used Google's AI API to summarize scraped content into consistent, readable outputs
            Developed logic to match user beliefs with summarized ballot positions for guidance
          </div>
          <div className="project">
            <strong>Portfolio Website</strong> 
            — 
            <em>React, JSX, JavaScrip</em> <br />
            Developed a personal website using React and JSX to present software projects and skills
            Built reusable components, interactive UI elements, and responsive layouts
            Integrated project pages and external GitHub repositories dynamically
            Deployed using Netlify, ensuring continuous deployment from GitHub
          </div>
          <div className="project">
            <strong>Grocery Search</strong> 
            — 
            <em>Data Structures</em> <br />
            Evaluated user-inputted data and stored information in a linked list
            Constructed and traversed a binary search tree to retrieve product details efficiently
            Implemented dynamic insertion and deletion while preserving the tree structure
            Managed memory allocation to prevent leaks and optimize runtime
          </div>
          <div className="project">
            <strong>Minesweeper</strong> 
            — 
            <em>Data Structures</em> <br />
            Implemented functions that used input files and user input to affect stored data
            Wrote makefile functions as well as used recursive calls to sift data
            Utilized pointers to store data in the heap when necessary, with no storage leaks
            Effectively used DDD to find bugs and errors within written code
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: jacksons041011@gmail.com</p>
        </section>
      </main>
    </div>
  )
}

export default App