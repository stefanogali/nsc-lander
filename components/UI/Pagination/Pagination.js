export default function Pagination() {
	return (
		<div className="flex justify-between items-center template-max-width mx-auto mt-10 px-2.5">
			<div className="flex gap-1.5">
				{["1", "2", "3", ">", ">>"].map((item, index) => (
					<span key={index} className="flex items-center justify-center rounded-full bg-white p-2 w-[30px] h-[30px] text-sm text-center font-medium cursor-pointer">
						{item}
					</span>
				))}
			</div>
			<div className="font-medium text-white">Page 1 of 18</div>
		</div>
	);
}
