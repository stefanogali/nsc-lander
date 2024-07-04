"use client";

import { useState } from "react";
import Search from "@/public/icons/search";
import { Burger } from "@/public/icons/Burger";

export default function Navigation() {
	const [hidden, setHidden] = useState(true);

	function clickHandler() {
		setHidden((prev) => !prev);
	}

	function MenuLinks({ isSmallDevice }) {
		return (
			<ul className={`gap-5 ${isSmallDevice ? "flex flex-col xl:hidden p-6" : "items-center hidden xl:flex"}`}>
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
		);
	}

	function MenuMobile() {
		return (
			<div className={`fixed h-full w-full max-w-xs bg-white top-0 right-0 z-50 transition-all ${hidden ? "translate-x-[320px]" : "translate-x-0"}`}>
				<div className="absolute top-8 right-3 text-xl cursor-pointer" onClick={clickHandler}>
					X
				</div>
				<MenuLinks isSmallDevice />
			</div>
		);
	}
	return (
		<nav>
			<MenuLinks />
			<div className="xl:hidden cursor-pointer" onClick={clickHandler}>
				<Burger width="28" height="28" />
			</div>
			<MenuMobile />
		</nav>
	);
}
