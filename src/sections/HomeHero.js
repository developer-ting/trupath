// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeHero.module.scss";

// IMAGES //
import sugarcane from "../../public/img/banner/sugarcane.png";
import productImg from "../../public/img/banner/product_img.png";
import mountain from "../../public/img/banner/mountain_b.png";
import cloud1 from "../../public/img/banner/cloud_1.png";
import cloud2 from "../../public/img/banner/cloud_2.png";
import birds1 from "../../public/img/banner/birds_1.png";
import birds2 from "../../public/img/banner/birds_2.png";
import bgLine from "../../public/img/banner/bg_line.png";

// DATA //

/** HomeHero Section */
export default function HomeHero() {
	return (
		<div className={styles.hero_wrap}>
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
					<h1 className="text_100">Make the Gud choice</h1>
					<p className="text_20">
						Go against the crystal grain - from the bitter side of sugar to the better
						side of sweetness. <br /> And return to the Gud ol’ ways - onto the
						trupath.
					</p>
				</div>
				{/* <div className={`${styles.mountain}`}>
					<img src={mountain.src} className="img-responsive" alt="mountain" />
				</div> */}
				<div className={`${styles.product_img}`}>
					<img src={productImg.src} className="img-responsive" alt="product_img" />
				</div>
				<div className={`${styles.sugarcane}`}>
					<img
						src={sugarcane.src}
						className="img-responsive"
						alt="Sugarcane line1"
					/>
					{/* <img src={productImg.src} className="img-responsive" alt="product_img" /> */}
				</div>
				<div className={`${styles.leaves}`}>
					<img src={bgLine.src} className="img-responsive" alt="Sugarcane line" />
				</div>
			</div>
		</div>
	);
}
