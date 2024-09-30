/* eslint-disable no-mixed-spaces-and-tabs */

// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/TrupathCircle.module.scss";

// IMAGES //
import marqueeC from "../../public/img/home/marquee_c.png";
import productCircle from "../../public/img/home/product_circle.png";
import leftStar from "../../public/img/home/left_star.png";
import rightStar from "../../public/img/home/right_star.png";
import hand from "../../public/img/home/hand.png";

// DATA //

/** HomeHero Section */
export default function TrupathCircle() {
	return <div className={`${styles.TrupathCircle}`}>
		<div className={`${styles.circle_div}`}>
			<div className={`${styles.text_para}`}>
				<p className="text_20">To be healthy you don’t need to eat bland. Simply stir, sprinkle or knead the nourishing Gud in your drinks and food to enjoy a better, wellness-focused life without sacrificing flavour!</p>
			</div>
			<div className={`${styles.product_circle}`}>
				<img src={productCircle.src} className="img-responsive" alt="product_circle" />
				<div className={`${styles.left_star}`}>
				    <img src={leftStar.src} className="img-responsive" alt="left_star" />
			    </div>
				<div className={`${styles.right_star}`}>
				    <img src={rightStar.src} className="img-responsive" alt="right_star" />
			    </div>  
			</div>
			<div className={`${styles.hand}`}>
				<img src={hand.src} className="img-responsive" alt="hand" /> 
			</div>
		</div>
		<div className={`${styles.title_div}`}>
			<img src={marqueeC.src} className="img-responsive" alt="marqueeC" />
		</div>
	</div>;
}
