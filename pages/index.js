// MODULES //
import { useState } from "react";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //

// DATA //

/** Home Page */
export default function HomePage() {
	gsap.registerPlugin(ScrollTrigger);
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Trupath"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<HomeHero />
				<Sugarcoating gsap={gsap} ScrollTrigger={ScrollTrigger} />
				{/* <TrupathCircle />
				<Nature gsap={gsap} ScrollTrigger={ScrollTrigger} /> */}
				<div className={`${styles.background}`}>
					<SugarcaneField />
					<SweetTaste />
					<ProductSec />
					<FieldsSec />
					<OldRoots />
					<GreatValueSec />
				</div>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
