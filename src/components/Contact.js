import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact" id="Contact">
      <div className="ContactContent">
        <div id="heading">
          <h1>Contact</h1>
        </div>
        <div className="links">
          <p>Feel free to contact me for anything!</p>
          <p>Click to copy to clipboard.</p>
          <div className="link">
            <i className="fa-solid fa-envelope"></i>
            <button
              onClick={() => {
                navigator.clipboard.writeText("gillhs@mail.uc.edu");
              }}
            >
              gillhs@mail.uc.edu
            </button>
          </div>
          <div className="link">
            <i className="fa-solid fa-phone"></i>
            <button
              onClick={() => {
                navigator.clipboard.writeText("5132279086");
              }}
            >
              513-227-9086
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
