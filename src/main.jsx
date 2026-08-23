import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const projects = [
  [
    "01",
    "Ambulance Dispatch System",
    "Real-time emergency response",
    "A full-stack dispatch platform connecting patients, administrators and ambulance drivers with live request updates, assignment workflows and map-based tracking simulation.",
    ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Leaflet"],
    "https://github.com/Shamsondeen/ambulance-dispatch-system",
    "red",
    "DISPATCH"
  ],
  [
    "02",
    "Adeshola Cosmetics",
    "E-commerce platform",
    "A complete cosmetics storefront with authentication, product management, cart and checkout, orders, Flutterwave payment integration, email notifications and Cloudinary image management.",
    ["React", "Node.js", "Express", "MongoDB", "Flutterwave", "Cloudinary"],
    "https://github.com/Shamsondeen/adeshola-cosmetics",
    "rose",
    "COMMERCE"
  ],
  [
    "03",
    "ServiceMan",
    "Artisan hiring platform",
    "A service marketplace connecting customers with skilled professionals through role-based authentication, service requests, request tracking and administrative management.",
    ["React", "Node.js", "Express", "MongoDB", "JWT"],
    "https://github.com/Shamsondeen/serviceman-artisan-hiring-system",
    "blue",
    "SERVICE"
  ]
];
const skills = [
  ["01", "Frontend", "React · JavaScript · CSS · Responsive UI"],
  ["02", "Backend", "Node.js · Express · REST APIs"],
  ["03", "Data", "MongoDB · Mongoose · Data modelling"],
  ["04", "Engineering", "JWT · Socket.IO · Payments · Cloud services"]
];
const Arrow = () => <span>↗</span>;
const WHATSAPP = "2348083167373";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Shamsondeen, I found your portfolio and I'd like to discuss a project."
);
const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${WHATSAPP_MESSAGE}`;
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="site">
      <header>
        <nav className="nav wrap">
          <a className="brand" href="#top">
            <b>OGS</b>
            <span>OGUNDIPE SHAMSONDEEN OLAWALE</span>
          </a>
          <button
            className="menu"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <i />
            <i />
          </button>
          <div className={"links " + (open ? "open" : "")}>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a className="navcta" href="mailto:ogundipesamsondeen@gmail.com">
              Let's talk <Arrow />
            </a>
          </div>
        </nav>
      </header>
      <main id="top">
        <section className="hero wrap">
          <div>
            <p className="eyebrow">
              <span />
              AVAILABLE FOR SELECT PROJECTS
            </p>
            <h1>
              Full-Stack MERN Developer building digital products that{" "}
              <em>work beautifully.</em>
            </h1>
            <p className="lead">
              Full-Stack MERN Developer focused on building modern, responsive
              and practical web applications with React, Node.js, Express and
              MongoDB — from real-time emergency dispatch systems to e-commerce
              platforms and service marketplaces.
            </p>
            <div className="actions">
              <a className="btn dark" href="#work">
                Explore my work <Arrow />
              </a>
              <a
                className="under"
                href="https://github.com/Shamsondeen"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit o1" />
            <div className="orbit o2" />
            <div className="hero-card">
              <small>FULL-STACK</small>
              <strong>MERN</strong>
              <small>PRODUCT ENGINEERING</small>
            </div>
            <div className="float">
              <b>&lt;/&gt;</b>
              <span>
                <strong>BUILD</strong>
                <small>· SHIP · IMPROVE</small>
              </span>
            </div>
          </div>
        </section>
        <div className="ticker">
          <div>
            REACT　✦　NODE.JS　✦　MONGODB　✦　EXPRESS　✦　SOCKET.IO　✦　REST
            APIS　✦　REACT　✦　NODE.JS　✦　MONGODB　✦　EXPRESS　✦
          </div>
        </div>
        <section id="work" className="section wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Built for real use.</h2>
            </div>
            <p>
              A few systems I've designed, built, cleaned up and tested
              end-to-end.
            </p>
          </div>
          <div className="projects">
            {projects.map(([n, t, c, d, stack, href, accent, word]) => (
              <article className="project" key={t}>
                <div className={"visual " + accent}>
                  <span>{n}</span>
                  <div className="grid" />
                  <small>{c}</small>
                  <strong>{word}</strong>
                </div>
                <div className="pinfo">
                  <div className="ptop">
                    <div>
                      <p>{c}</p>
                      <h3>{t}</h3>
                    </div>
                    <a
                      className="circle"
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={t}
                    >
                      ↗
                    </a>
                  </div>
                  <p>{d}</p>
                  <div className="chips">
                    {stack.map((x) => (
                      <span key={x}>{x}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="about">
          <div className="wrap aboutgrid">
            <div>
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>
                Less noise.
                <br />
                <em>More useful software.</em>
              </h2>
            </div>
            <div className="aboutcopy">
              <p>
                I am a Full-Stack MERN Developer who enjoys turning real-world
                problems into clear, usable software. I build modern web
                applications using React, Node.js, Express and MongoDB, with a
                focus on practical products, reliable systems and polished
                frontend experiences.
              </p>
              <p>
                I care about the details that make a system dependable:
                authentication, role separation, data flow, error handling,
                responsive interfaces and workflows that make sense to the
                person using them.
              </p>
              <div className="stats">
                <div>
                  <b>03</b>
                  <span>Featured full-stack projects</span>
                </div>
                <div>
                  <b>MERN</b>
                  <span>Primary stack</span>
                </div>
                <div>
                  <b>∞</b>
                  <span>Curiosity to keep building</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="section wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">CAPABILITIES</p>
              <h2>What I bring.</h2>
            </div>
          </div>
          <div className="skills">
            {skills.map(([n, t, d]) => (
              <div className="skill" key={t}>
                <small>{n}</small>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="wrap center">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>
              Let's build something
              <br />
              <em>worth using.</em>
            </h2>
            <p>
              I'm open to thoughtful collaborations, product builds and
              opportunities where good engineering can make a real difference.
            </p>
            <div className="actions centeractions">
              <a
                className="btn light"
                href="mailto:ogundipesamsondeen@gmail.com"
              >
                Start a conversation <Arrow />
              </a>
              <a
                className="contactlink"
                href="https://github.com/Shamsondeen"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Shamsondeen <Arrow />
              </a>
            </div>
          </div>
        </section>
        <a
          className="whatsapp-float"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Shamsondeen on WhatsApp"
        >
          <span className="wa-icon">◔</span>
          <span className="wa-label">Chat on WhatsApp</span>
        </a>
      </main>
      <footer>
        <div className="wrap foot">
          <span>© {new Date().getFullYear()} Shamsondeen</span>
          <span>Designed & built with React</span>
        </div>
      </footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
