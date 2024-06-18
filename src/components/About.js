import "./About.css";

const About = () => {
  return (
    <div className="About" id="About">
      <div className="AboutContent">
        <div className="AboutLeftContent">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            ad perspiciatis ullam qui nam odio deleniti dolorem excepturi nisi,
            veritatis eum nostrum nesciunt voluptatibus eaque architecto
            exercitationem, soluta unde labore.
          </p>
        </div>
        <div className="AboutMiddleSpacer"></div>
        <div className="AboutRightContent">
					<img src="/ProfilePicture.jpeg" alt="Arpit Gill's beautiful face" id="profilepic"/>
				</div>
      </div>
			<div className="Header">
				<h1>idkk</h1>
			</div>
			<div className="BottomContent">
				<div className="BottomItem" id="about1">
					<img src="/AboutPic1.jpeg" id="aboutpic1" alt="Me and my family" />
					<p>Celebrating my dad's birthday with my family</p>
				</div>
				<div className="BottomItem" id="about2">
					<img src="/AboutPic2.jpeg" id="aboutpic2" alt="Me and my friends" />
					<p>At an event with my friends</p>
				</div>
				<div className="BottomItem" id="about3">
					<img src="/AboutPic3.jpeg" id="aboutpic3" alt="Me and my friend" />
					<p>Getting gains with my friend</p>
				</div>
			</div>
    </div>
  );
};

export default About;
