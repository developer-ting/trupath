// // MODULES //
import { useEffect, useState } from "react";

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
/** OldRoots Section */
export async function getStaticProps() {
	try {
		// Fetch both APIs concurrently
		const [allBlogsData] = await Promise.all([
			fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/allBlogs`),
		]);

		// Parse the JSON responses
		const allBlogs = await allBlogsData.json();

		// console.log("Fetched headerData:", headerData);
		// console.log("Fetched projectListings:", projectListings);

		return {
			props: {
				allBlogs: allBlogs || null,
			},
			revalidate: 30,
		};
	} catch (error) {
		console.error("Error fetching data:", error);
		return {
			props: {
				allBlogs: null,
			},
			revalidate: 30,
		};
	}
}

/** Home Page */
export default function HomePage({ allBlogs }) {
	const [showHeader, setShowHeader] = useState(false);
	const [showIntro, setShowIntro] = useState(false);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const introSeen = sessionStorage.getItem("introSeen");

		// If not seen, show it and set it in localStorage
		if (!introSeen) {
			setShowIntro(true);
			// localStorage.setItem("introSeen", "true");
		} else {
			const headerClassRemove = document.querySelector(".header");
			headerClassRemove.classList.remove("hidden_header");
		}
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Trupath – Natural Sweetness, Healthier Choices"}
				Desc={
					"Embrace a healthier lifestyle with our preservative-free, premium quality products that enhance immunity, aid digestion, and boost energy."
				}
			/>
			{showIntro && <IntroSec gsap={gsap} setShowHeader={setShowHeader} />}
			{/* Header */}
			<Header
				showHeader={showHeader}
				setShowHeader={setShowHeader}
				showIntro={showIntro}
			/>

			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<HomeHero />
				<Sugarcoating gsap={gsap} ScrollTrigger={ScrollTrigger} />
				{/* <TrupathCircle />
				<Nature gsap={gsap} ScrollTrigger={ScrollTrigger} /> */}
				<div className={`${styles.background}`}>
					<SugarcaneField gsap={gsap} ScrollTrigger={ScrollTrigger} />
					<SweetTaste gsap={gsap} ScrollTrigger={ScrollTrigger} />
					<ProductSec />
					<FieldsSec gsap={gsap} ScrollTrigger={ScrollTrigger} />
					<OldRoots blogdata={allBlogs.categories} />
					<GreatValueSec />
				</div>
			</main>
			{/* Page Content ends heree */}

			{/* Footer */}
			<Footer />
		</div>
	);
}

// import React from "react";
// /** Home Page */
// const index = () => {
// 	return <div>index</div>;
// };

// export default index;
