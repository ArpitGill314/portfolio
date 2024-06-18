import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"

const Page = () => {
	return (
		<div className="Page">
			<Home />
			<About />
			<Projects />
			<Contact />
		</div>
		
	)
}

export default Page