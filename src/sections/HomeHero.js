// MODULES //
import React, { useEffect, useRef } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Lottie from "lottie-web";

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

// DATA //

/** HomeHero Section */
export default function HomeHero() {
	const Birds = useRef();
	const Birds2 = useRef();
	const BirdsMob = useRef();
	const Birds2Mob = useRef();
	useEffect(() => {
		// Lottie
		Lottie.loadAnimation({
			container: Birds.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Birds.json"),
		});
		Lottie.loadAnimation({
			container: Birds2.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Birds2.json"),
		});
		Lottie.loadAnimation({
			container: BirdsMob.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Birds_Mobile.json"),
		});
		Lottie.loadAnimation({
			container: Birds2Mob.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Birds2_Mobile.json"),
		});
	}, []);
	return (
		<div className={`${styles.hero_wrap} banner_animation`}>
			<div className={`${styles.banner_section}`}>
				<div className={`${styles.birds_left}`}>
					<div ref={Birds} className={styles.Desktop}></div>
					<div ref={BirdsMob} className={styles.Mobile}></div>
					{/* <img src={birds1.src} className="img-responsive" alt="birds1" /> */}
				</div>
				<div className={`${styles.birds_right}`}>
					<div ref={Birds2} className={styles.Desktop}></div>
					<div ref={Birds2Mob} className={styles.Mobile}></div>
					{/* <img src={birds2.src} className="img-responsive" alt="birds2" /> */}
				</div>
				<div className={`${styles.cloud_left}`}>
					<img src={cloud1.src} className="img-responsive" alt="cloud1" />
				</div>
				<div className={`${styles.cloud_right}`}>
					<img src={cloud2.src} className="img-responsive" alt="cloud2" />
				</div>
				<div className={`${styles.info} info`}>
					<h1 className="text_100 mobile_padd">Make the Gud choice</h1>
					<p className="text_20">
						Go against the crystal grain - from the bitter side of sugar to the better
						side of sweetness, returning to the Gud ol’ ways and onto the trupath.
					</p>
				</div>
				{/* <div className={`${styles.mountain}`}>
					<img src={mountain.src} className="img-responsive" alt="mountain" />
				</div> */}
				<div className={`${styles.product_img} product_img`}>
					<img src={productImg.src} className="img-responsive" alt="product_img" />
				</div>
				<div className={`${styles.sugarcane} sugarcane`}>
					<img
						src={sugarcane.src}
						className="img-responsive"
						alt="Sugarcane line1"
					/>
					{/* <img src={productImg.src} className="img-responsive" alt="product_img" /> */}
				</div>
			</div>
		</div>
	);
}
