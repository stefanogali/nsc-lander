import ImageCard from "../UI/ImageCard/ImageCard";

const bgImages = ["bg-strength1", "bg-strength2", "bg-strength3", "bg-strength4"];

export default function StrengthPoints() {
	return (
		<div className="w-full min-[1500px]:bg-dots min-[1500px]:bg-contain min-[1500px]:bg-no-repeat min-[1500px]:bg-right my-10">
			<div className="template-max-width mx-auto px-2.5">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{bgImages.map((image, index) => {
						console.log(image);
						return <ImageCard key={index} src={image} />;
					})}
				</div>
			</div>
		</div>
	);
}
