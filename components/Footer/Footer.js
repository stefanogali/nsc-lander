import { Button } from "../UI/Button/Button";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="w-full">
			<div className="w-full bg-light-grey">
				<div className="template-max-width mx-auto py-6 px-2.5 flex gap-5">
					<Button>Learn More</Button>
					<Button>Request a demo link</Button>
				</div>
			</div>
			<div className="w-full bg-blue">
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 template-max-width mx-auto px-2.5 py-12 text-white leading-4">
					<div>
						<Image src="/images/nsc_logo-white.png" alt="Logo" width={84} height={47} />
						<div className="text-sm">
							<p>Lorem Ipsum has been</p>
							<p>The industry standard dummy</p>
							<p>When an unknown printer</p>
							<p>Remaining essentially unchanged</p>
						</div>
					</div>
					<div className="text-sm mt-3">
						<h3 className="mb-1.5 text-turquoise font-medium">Who we are:</h3>
						<ul>
							<li>Who we are</li>
							<li>Who we are</li>
							<li>Who we are</li>
							<li>Who we are</li>
							<li>Who we are</li>
							<li>Who we are</li>
							<li>Who we are</li>
						</ul>
					</div>
					<div className="text-sm  mt-3">
						<h3 className="mb-1.5 text-turquoise font-medium">What we do:</h3>
						<ul>
							<li>What we do</li>
							<li>What we do</li>
							<li>What we do</li>
							<li>What we do</li>
							<li>What we do</li>
							<li>What we do</li>
							<li>What we do</li>
						</ul>
					</div>
					<div className="text-sm mt-3">
						<h3 className="mb-1.5 text-turquoise font-medium">Our Partners:</h3>
						<ul>
							<li>Our Partners</li>
							<li>Our Partners</li>
							<li>Our Partners</li>
							<li>Our Partners</li>
							<li>Our Partners</li>
							<li>WOur Partners</li>
							<li>Our Partners</li>
						</ul>
					</div>
					<div className="text-sm mt-3">
						<h3 className="mb-1.5 text-turquoise font-medium">Work with us:</h3>
						<ul>
							<li>Work with us</li>
							<li>Work with us</li>
							<li>Work with us</li>
							<li>Work with us</li>
							<li>Work with us</li>
							<li>Work with us</li>
							<li>Work with us</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
