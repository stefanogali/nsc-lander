import Image from "next/image";
import Search from "@/public/icons/search";

function Navigation() {
	return (
		<nav>
			<ul className="flex items-center gap-5">
				<li>
					<a className="cursor-pointer">Who we are</a>
				</li>
				<li>
					<a className="cursor-pointer">What we do</a>
				</li>
				<li>
					<a className="cursor-pointer">Service Portfolio</a>
				</li>
				<li>
					<a className="cursor-pointer">Case studies</a>
				</li>
				<li>
					<a className="cursor-pointer">Partners</a>
				</li>
				<li>
					<a className="cursor-pointer">Careers</a>
				</li>
				<li>
					<a className="cursor-pointer">Work with us</a>
				</li>
				<li>
					<a className="cursor-pointer">Partners</a>
				</li>
				<li>
					<a className="cursor-pointer">Contact</a>
				</li>
				<li>
					<a className="cursor-pointer">English</a>
				</li>
				<li>
					<a className="cursor-pointer">
						<Search width="24" height="24" />
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default function Header() {
	return (
		<header className="w-full">
			<div className="template-max-width py-5 px-2.5 flex justify-between items-center mx-auto">
				<Image src="/images/nsc_logo.png" alt="Logo" width={84} height={47} />
				<Navigation />
			</div>
			<div className="w-full bg-light-grey">
				<div className="template-max-width mx-auto px-2.5">
					<Image className="max-w-28 py-5" src="/images/cisco-partner-o.png" alt="Logo Cisco" width={150} height={150} />
				</div>
			</div>
		</header>
	);
}
