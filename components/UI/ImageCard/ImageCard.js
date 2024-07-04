"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../Button/Button";

function ReadMore() {
	return (
		<div className="">
			<Image className="mb-3" src="/images/cisco-partner-o.png" width={150} height={150} alt="Logo Cisco" />
			<Button className="mt-auto font-medium">
				Read More <span className="ml-2.5">&gt;</span>
			</Button>
		</div>
	);
}

export default function ImageCard({ src, alt }) {
	const [hidden, setHidden] = useState(true);

	return (
		<div className="relative" onMouseEnter={() => setHidden(false)} onMouseLeave={() => setHidden(true)}>
			<div className={`${src} min-h-72 bg-cover bg-no-repeat`}></div>
			<div className="bg-light-blue p-3">
				<h3 className="text-header-3 text-white font-medium uppercase mb-6">Some text</h3>
			</div>
			<div className={`w-full flex justify-center flex-col items-center absolute top-6 left-1/2 -translate-x-1/2  transition-all duration-500 ${hidden ? "opacity-0 translate-y-6" : "opacity-1 translate-y-0"}`}>
				<ReadMore />
			</div>
		</div>
	);
}
