"use client";

import { Button } from "../Button/Button";

export default function Card({ className, id, title, body, setDisplaySinglePost, refElement }) {
	function clickHandler() {
		refElement.current?.scrollIntoView({ behavior: "smooth" });
		setDisplaySinglePost(id);
	}
	return (
		<div className={className}>
			<h4 className="text-header-4 font-medium mb-6">{title}</h4>
			<div className="w-full max-w-20 border-t-4 border-dark-turquoise"></div>
			<p className="my-6">{body}</p>
			<Button className="mt-auto font-medium" onClick={clickHandler}>
				Read More <span className="ml-2.5">&gt;</span>
			</Button>
		</div>
	);
}
