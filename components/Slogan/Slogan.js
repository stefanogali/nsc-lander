import { Button } from "../UI/Button/Button";
import { Heart } from "@/public/icons/Heart";

export default function Slogan() {
	return (
		<div className="py-10 template-max-width mx-auto px-2.5">
			<h2 className="text-header-2 font-medium mb-5">Contrary to popular belief, Lorem Ipsum is not simply random text.</h2>
			<p className="leading-6">
				There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there anything
				embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary
			</p>
			<Button className="flex items-center bg-light-blue gap-3 border-double border-4 border-white mt-7">
				<Heart width="20" height="20" fill="red" />
				CTA
				<Heart width="20" height="20" fill="red" />
			</Button>
		</div>
	);
}
