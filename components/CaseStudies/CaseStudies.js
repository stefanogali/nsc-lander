import { Button } from "../UI/Button/Button";

const styleCaseStudy = "bg-light-grey p-5 rounded-lg bg-gradient-to-r from-[#158a9e] to-[#0f1f53] text-white";

export default function CaseStudies() {
	return (
		<div className="w-full border-b-8 border-light-blue">
			<div className="template-max-width mx-auto py-10 px-2.5">
				<h2 className="text-header-2 font-medium mb-5">Case Studies</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					<div className={styleCaseStudy}>
						<h3 className="text-xl font-medium text-dark-grey">Case Study 1</h3>
						<p className="my-6 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
						<Button className="bg-light-blue mt-auto">Read More</Button>
					</div>
					<div className={styleCaseStudy}>
						<h3 className="text-xl font-medium text-dark-grey">Case Study 2</h3>
						<p className="my-6 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
						<Button className="bg-light-blue mt-auto">Read More</Button>
					</div>
					<div className={styleCaseStudy}>
						<h3 className="text-xl font-medium text-dark-grey">Case Study 3</h3>
						<p className="my-6 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
						<Button className="bg-light-blue mt-auto">Read More</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
