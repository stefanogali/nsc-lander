import Image from "next/image";
import Navigation from "./Navigation";

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
