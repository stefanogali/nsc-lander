import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Posts from "@/components/Posts/Posts";
import Slogan from "@/components/Slogan/Slogan";
import Infographic from "@/components/Infographic/Infographic";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import StrengthPoints from "@/components/StrengthPoints/StrengthPoints";
import Footer from "@/components/Footer/Footer";

export default function Home() {
	return (
		<main className="w-full flex min-h-screen flex-col items-center font-montserrat leading-none">
			<Header />
			<Hero />
			<Posts />
			<Slogan />
			<Infographic />
			<CaseStudies />
			<StrengthPoints />
			<Footer />
		</main>
	);
}
