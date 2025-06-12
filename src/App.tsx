import { useState } from "react";
import css from "./App.module.css";
import classnames from "classnames";

const FIRST_NAME = "SHENAI";
const LAST_NAME = "CHAN";

type Tab = "ABOUT" | "WORK";

function App() {
  const [showMore, setShowMore] = useState(true);
  const [tab, setTab] = useState<Tab>("ABOUT");

  return (
    <div id={css.all}>
      <div id={css.name}>
        {FIRST_NAME.split("").map((char, idx) => (
          <div
            key={idx + 1}
            className={css.firstname}
            style={{ gridColumn: idx + 1, gridRow: 1 }}
          >
            <p>{char}</p>
          </div>
        ))}
        {LAST_NAME.split("").map((char, idx) => (
          <div
            key={idx + 7}
            className={css.lastname}
            style={{ gridColumn: idx + 7, gridRow: 3 }}
          >
            <p>{char}</p>
          </div>
        ))}
      </div>
      <div id={css.contents}>
        <div id={css.tabs}>
          <button
            className={classnames(css.tab, { [css.selected]: tab === "ABOUT" })}
            onClick={() => setTab("ABOUT")}
          >
            <p>ABOUT</p>
          </button>
          <button
            className={classnames(css.tab, { [css.selected]: tab === "WORK" })}
            onClick={() => setTab("WORK")}
          >
            <p>WORK</p>
          </button>
        </div>
        {tab === "ABOUT" ? (
          <div>
            <p id={css.about}>
              <span className={css.strongtext}>
                is a designer & technologist
              </span>{" "}
              interested in how tech transforms our relationships with ourselves
              / others / our culture. They graduated from Carnegie Mellon in May
              2024 with a B.S. in Computer Engineering & minors in
              Human-Computer Interaction and Physical Computing, and have since
              been hacking on web & hardware projects at the{" "}
              <a href="https://recurse.com"> Recurse Center</a>.
            </p>
            {/* aria ignore */}
            <p style={{ textAlign: "right" }}>
              <a href="https://www.are.na/shenai-chan-8xbf6dstbgs/thought-nzylye7xtr4">
                ARE.NA
              </a>{" "}
              // <a href="https://github.com/shenaichan">GITHUB</a> //{" "}
              <a href="https://www.linkedin.com/in/shenaichan/">LINKEDIN</a> //{" "}
              <a href="/shenai_chan_resume.pdf">RESUME</a> //{" "}
              <a href="https://shenaichan.github.io">OLD SITE</a>
            </p>
          </div>
        ) : (
          <div className={css.projects}>
            <div className={css.project}>
              <p>
                <span className={css.strongtext}>Notes From Afar</span> is a
                worldwide commons for lovers. Users can read from and submit to
                a global repository of long-distance love notes between friends,
                partners, and family.
              </p>
              <p>
                <a href="/shenai_chan_resume.pdf">live site</a> //{" "}
                <a href="https://shenaichan.github.io">code & writeup</a>
              </p>
            </div>
            <div className={css.project}>
              <p>
                <span className={css.strongtext}>TVennTropes</span> is a tool
                for storytellers. Using data scraped from tvtropes.org, the site
                enables users to compare tropes shared across pieces of media.
              </p>
              <p>
                <a href="/shenai_chan_resume.pdf">live site</a> //{" "}
                <a href="https://shenaichan.github.io">code & writeup</a>
              </p>
            </div>
            <div className={css.project}>
              <p>
                <span className={css.strongtext}>Hestia</span> is a home-cooked
                home assistant. Using either voice or text, users can query the
                internet, set timers, play music, and connect to peripheral
                microcontrollers.
              </p>
              <p>
                <a href="https://shenaichan.github.io">code & writeup</a>
              </p>
            </div>
            {showMore ? (
              <div id={css.moreprojects}>
                <p className={css.strongtext}>
                  Some other things I've made include:
                </p>
                <ul>
                  <li>
                    A real-time operating system in C on an STM32, which I then
                    used (twice) in a drive-by-wire RC car with distributed
                    processors.
                  </li>
                  <li>
                    A public guide robot for Honda Research Institute.
                    Specifically, I conducted the design research and integrated
                    an LLM-powered voice assistant and IoT network into the
                    navigation web UI.
                  </li>
                  <li>
                    The backend/database/multiplayer interactions for an online
                    user study teaching groups of users an AI agent's RL
                    policies via individualized demonstrations.
                  </li>
                  <li>
                    A prototype for a language learning app focused on the unmet
                    need of novel sound production and discrimination.
                  </li>
                  <li>
                    A set of 12 generative, plotted love letter postcards, a
                    data visualization of the first twelve months of my
                    relationship with my partner.
                  </li>
                  <li>
                    Various assorted Arduino-flavored projects, some connected
                    to Processing & Max/MSP for generative art and sound.
                  </li>
                </ul>
                <p style={{ textAlign: "right" }} className={css.strongtext}>
                  ... so feel free to ask me about any of these!
                </p>
              </div>
            ) : (
              <div>
                <p onClick={() => setShowMore(true)} id={css.showmore}>
                  see more
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
