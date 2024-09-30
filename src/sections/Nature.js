/* eslint-disable no-mixed-spaces-and-tabs */

// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/Nature.module.scss";

// IMAGES //
import productRecepi from "../../public/img/home/product_recepi.png";
import vectorImg from "../../public/img/home/vector_img.png";
// DATA //

/** HomeHero Section */
export default function Nature() {
	return <div className={`${styles.Nature}`}>
		<div className="container">
			<div className={`${styles.nature_section} f_r_aj_between`}>
				<div className={`${styles.info}`}>
					<h2 className="text_50">From the lap of nature, not labs</h2>
					<h3 className="text_40">सर्व गुड़ सम्पन्न</h3>
					<p className="text_20">Our products are made with 100% natural ingredients without harmful chemicals which means every spoonful keeps you happy and healthy!</p>
				</div>
				<div className={`${styles.product}`}>
					<div className={`${styles.left_section}`}>
						<div className={`${styles.top_item}`}>
							<img src={vectorImg.src} className="img-responsive" alt="vectorImg" />
							<p className="text_16">Made with the finest sugarcane</p>
						</div>
						<div className={`${styles.center_item}`}>
							<img src={vectorImg.src} className="img-responsive" alt="vectorImg" />
							<p className="text_16">Unadulterated, premium quality</p>
						</div>
						<div className={`${styles.bottom_item}`}>
							<img src={vectorImg.src} className="img-responsive" alt="vectorImg" />
							<p className="text_16">Unapologetically desi</p>
						</div>
					</div>
					<div className={`${styles.product_img}`}>
						<img src={productRecepi.src} className="img-responsive" alt="productRecepi" />
					</div>
					<div className={`${styles.right_section}`}>
						<div className={`${styles.top_item}`}>
							<img src={vectorImg.src} className="img-responsive" alt="vectorImg" />
							<p className="text_16">Preservatives free</p>
						</div>
						<div className={`${styles.center_item}`}>
							<img src={vectorImg.src} className="img-responsive" alt="vectorImg" />
							<p className="text_16">Harmful additives free</p>
						</div>
						<div className={`${styles.bottom_item}`}>
							<img src={vectorImg.src} className="img-responsive" alt="vectorImg" />
							<p className="text_16">Guilt free</p>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>;
}
