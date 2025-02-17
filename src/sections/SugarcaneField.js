/* eslint-disable react/no-unescaped-entities */
// MODULES //
import { useEffect, useRef } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Lottie from "lottie-web";

// UTILS //

// STYLES //
import styles from "@/styles/sections/SugarcaneField.module.scss";

// IMAGES //
import Cloud1 from "../../public/img/home/Cloud1.png";
import Cloud2 from "../../public/img/home/Cloud2.png";
import Cloud3 from "../../public/img/home/Cloud3.png";
import Birds1 from "../../public/img/home/Birds1.png";
import SugarcaneFieldImg from "../../public/img/home/SugarcaneFieldImg.png";

// DATA //

/** SugarcaneField Section */
export default function SugarcaneField({ gsap, ScrollTrigger }) {
	const Birds = useRef();
	const BirdsMob = useRef();
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
			container: BirdsMob.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Birds_Mobile.json"),
		});
	}, []);
	useEffect(() => {
		const winH = window.innerHeight;
		const BowlAnimTimeline = gsap.timeline({});

		BowlAnimTimeline.to(
			`.${styles.para}`,
			{
				y: "0",
			},
			"first"
		);

		ScrollTrigger.create({
			trigger: `.${styles.SugarcaneField}`,
			animation: BowlAnimTimeline,
			start: "top 90%",
			end: "+=" + winH * 0.8,
			pin: false,
			scrub: true,
			markers: false,
			// pinSpacing: false,
		});
	}, []);
	return (
		<section className={styles.SugarcaneField} id="Origins">
			<div className={`${styles.CloudTop} f_r_aj_center`}>
				<img src={Cloud2.src} className={`${styles.Cloud2}`} alt="Clouds Image" />
				<div ref={Birds} className={`${styles.Birds}`}></div>
				<div ref={BirdsMob} className={`${styles.BirdsMob}`}></div>
			</div>
			<div className={`${styles.CloudsBox} f_r_aj_between`}>
				<img src={Cloud1.src} className={`${styles.Cloud1}`} alt="Clouds Image" />
				<img src={Cloud3.src} className={`${styles.Cloud3}`} alt="Clouds Image" />
			</div>
			<div className="container">
				<div className={`${styles.TextBx} f_j`}>
					<div className={`${styles.Title}`}>
						<p className={`${styles.para} text_50 color_primary`}>
							It all began in lush sugarcane fields
						</p>
					</div>
					<div className={`${styles.Desc}`}>
						<p className={`${styles.para} text_20 f_w_l color_primary`}>
							In the heart of Ghansawangi, where sugarcane fields stretch as far as the
							eye can see, we saw farmers put in hard work to cultivate their crops
							Recognising the need for a dependable partner, we founded Trupath to
							support these farmers, providing a dedicated facility to process their
							produce and help India return to the Gud ol' ways.
						</p>
					</div>
				</div>
			</div>
			<img
				src={SugarcaneFieldImg.src}
				className={`${styles.SugarcaneFieldImg} width_100 toTop`}
				data-scroll
				alt="Sugarcane Image"
			/>
		</section>
	);
}
