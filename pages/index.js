// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import HomeHero from "../src/sections/HomeHero";
import Sugarcoating from "../src/sections/Sugarcoating";
import TrupathCircle from "../src/sections/TrupathCircle";
import Nature from "../src/sections/Nature";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //

// DATA //

/** Home Page */
export default function HomePage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Make the Gud Choice"} Desc={"Go against the crystal grain - from the bitter side of sugar to the better side of sweetness. And return to the Gud ol' ways - onto the trupath"} OgImg={""} Url={"/"} />

			{/* Header */}
			{/* <Header /> */}

			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<HomeHero/>
				{/* <Sugarcoating /> */}
				{/* <TrupathCircle /> */}
				{/* <Nature/> */}
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			{/* <Footer /> */}
		</div>
	);
}
