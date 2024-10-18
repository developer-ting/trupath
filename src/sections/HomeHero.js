// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/ComingSoon.module.scss";

// IMAGES //
import logo from "../../public/img/banner/trupath-logo.svg";
import mountain from "../../public/img/banner/mountain_b.png";
import cloud1 from "../../public/img/banner/cloud_1.png";
import cloud2 from "../../public/img/banner/cloud_2.png";
import birds1 from "../../public/img/banner/birds_1.png";
import birds2 from "../../public/img/banner/birds_2.png";
import leaves from "../../public/img/banner/leaves.png";

// DATA //

/** HomeHero Section */
export default function HomeHero() {
	return <div className={styles.hero_wrap}>
		<div className={`${styles.banner_section}`}>
			<div className={`${styles.birds_left}`}>
				<img src={birds1.src} className="img-responsive" alt="birds1" />
			</div>
			<div className={`${styles.birds_right}`}>
				<img src={birds2.src} className="img-responsive" alt="birds2" />
			</div>
			<div className={`${styles.cloud_left}`}>
				<img src={cloud1.src} className="img-responsive" alt="cloud1" />
			</div>
			<div className={`${styles.cloud_right}`}>
				<img src={cloud2.src} className="img-responsive" alt="cloud2" />
			</div>
			<div className={`${styles.info}`}>
				<h1 className="text_100">Gudness is underway!</h1>
				<p className="text_20">We&apos;re sprinkling in some final delights on our website. Stay tuned!</p>
			</div>
			<div className={`${styles.mountain}`}>
				<img src={mountain.src} className="img-responsive" alt="mountain" />
			</div>
			<div className={`${styles.logo}`}>
				<img src={logo.src} className="img-responsive" alt="Sugarcane" />
			</div>
		</div>
	</div>;
}
