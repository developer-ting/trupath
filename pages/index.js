// MODULES //

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
			<MetaTags Title={"Trupath"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<HomeHero />
				<Sugarcoating />
				<TrupathCircle />
				<Nature />
				<SweetTaste />
				<FieldsSec />
				<GreatValueSec />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
