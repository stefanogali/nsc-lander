import clsx from "clsx";

export function Button(props) {
	return (
		<button {...props} className={clsx("rounded-full bg-dark-turquoise px-5 py-2.5 leading-none text-white", props.className)}>
			{props.children}
		</button>
	);
}
