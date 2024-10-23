// MODULES //
import { useEffect } from "react";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IntroSec from "../src/components/IntroSec";
import MetaTags from "@/components/MetaTags";
import HomeHero from "../src/sections/HomeHero";
import Sugarcoating from "../src/sections/Sugarcoating";
import TrupathCircle from "../src/sections/TrupathCircle";
import Nature from "../src/sections/Nature";
import SweetTaste from "../src/sections/SweetTaste";
import FieldsSec from "../src/sections/FieldsSec";
import GreatValueSec from "../src/sections/GreatValueSec";
import ProductSec from "../src/sections/ProductSec";
import SugarcaneField from "../src/sections/SugarcaneField";
import OldRoots from "../src/sections/OldRoots";

// SECTIONS //

// PLUGINS //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollOut from "scroll-out";

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //

// DATA //

/** Home Page */
export default function HomePage() {
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Trupath"} Desc={"Home Desc"} OgImg={""} Url={"/"} />
			<IntroSec gsap={gsap} />
			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage} hidden_main`}>
				<HomeHero />
				<Sugarcoating gsap={gsap} ScrollTrigger={ScrollTrigger} />
				{/* <TrupathCircle />
				<Nature gsap={gsap} ScrollTrigger={ScrollTrigger} /> */}
				<div className={`${styles.background}`}>
					<SugarcaneField gsap={gsap} ScrollTrigger={ScrollTrigger} />
					<SweetTaste gsap={gsap} ScrollTrigger={ScrollTrigger} />
					<ProductSec />
					<FieldsSec gsap={gsap} ScrollTrigger={ScrollTrigger} />
					<OldRoots />
					<GreatValueSec />
				</div>
			</main>
			{/* Page Content ends heree */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
