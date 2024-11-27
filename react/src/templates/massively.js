import React from "react";
import "../assets/css/main.css"; // Importer les styles principaux
import "../assets/css/noscript.css"; // Optionnel : pour les navigateurs sans JavaScript

const Massively = () => {
  return (
    <div id="wrapper" className="fade-in">
      {/* Intro */}
      <div id="intro">
        <h1>
          This is<br />
          Massively
        </h1>
        <p>
          A free, fully responsive HTML5 + CSS3 site template designed by{" "}
          <a href="https://twitter.com/ajlkn">@ajlkn</a> for{" "}
          <a href="https://html5up.net">HTML5 UP</a>
          <br />
          and released for free under the{" "}
          <a href="https://html5up.net/license">Creative Commons license</a>.
        </p>
        <ul className="actions">
          <li>
            <a href="#header" className="button icon solid solo fa-arrow-down scrolly">
              Continue
            </a>
          </li>
        </ul>
      </div>

      {/* Header */}
      <header id="header">
        <a href="index.html" className="logo">
          Massively
        </a>
      </header>

      {/* Navigation */}
      <nav id="nav">
        <ul className="links">
          <li className="active">
            <a href="index.html">This is Massively</a>
          </li>
          <li>
            <a href="generic.html">Generic Page</a>
          </li>
          <li>
            <a href="elements.html">Elements Reference</a>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div id="main">
        {/* Featured Post */}
        <article className="post featured">
          <header className="major">
            <span className="date">April 25, 2017</span>
            <h2>
              <a href="#">And this is a<br />
              massive headline</a>
            </h2>
            <p>
              Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed
              etiam magna interdum congue. Lorem ipsum dolor amet nullam sed etiam veroeros.
            </p>
          </header>
          <a href="#" className="image main">
            <img src="../assets/images/pic01.jpg" alt="" />
          </a>
          <ul className="actions special">
            <li>
              <a href="#" className="button large">
                Full Story
              </a>
            </li>
          </ul>
        </article>

        {/* Posts Section */}
        <section className="posts">
          {[...Array(6)].map((_, index) => (
            <article key={index}>
              <header>
                <span className="date">April {24 - index}, 2017</span>
                <h2>
                  <a href="#">Sample Title {index + 1}</a>
                </h2>
              </header>
              <a href="#" className="image fit">
                <img src={`../assets/images/pic0${index + 2}.jpg`} alt={`Sample ${index + 1}`} />
              </a>
              <p>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#" className="button">
                    Full Story
                  </a>
                </li>
              </ul>
            </article>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer id="footer">
        <section>
          <form method="post" action="#">
            <div className="fields">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="3"></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </section>
        <section className="split contact">
          <section className="alt">
            <h3>Address</h3>
            <p>
              1234 Somewhere Road #87257
              <br />
              Nashville, TN 00000-0000
            </p>
          </section>
          <section>
            <h3>Phone</h3>
            <p>
              <a href="#">(000) 000-0000</a>
            </p>
          </section>
          <section>
            <h3>Email</h3>
            <p>
              <a href="#">info@untitled.tld</a>
            </p>
          </section>
          <section>
            <h3>Social</h3>
            <ul className="icons alt">
              <li>
                <a href="#" className="icon brands alt fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-facebook-f">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </footer>
    </div>
  );
};

export default Massively;
