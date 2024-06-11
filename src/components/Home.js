import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="content">
        <div className="leftContent">
          <h1>Hello!👋</h1>
          <h1>My name is</h1>
          <h1>Arpit Gill.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            minima porro accusantium praesentium molestias temporibus
            distinctio, quae, veritatis, odit quis saepe laudantium. Accusantium
            facilis illum atque illo, ad veritatis repellat.
          </p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/arpitgill/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/ArpitGill314">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="buttons">
            <a href="/Gill_Arpit_Resume_2024.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            <a href="/Gill_Arpit_Resume_2024.pdf">Get in Touch</a>
          </div>
        </div>
        <div className="middleSpacer"></div>
        <div className="rightContent"></div>
      </div>
    </div>
  );
};

export default Home;
