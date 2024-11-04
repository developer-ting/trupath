// MODULES //
import { useEffect, useRef } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Lottie from "lottie-web";

// UTILS //

// STYLES //
import styles from "@/styles/sections/FieldsSec.module.scss";

// IMAGES //
import Quality from "../../public/img/home/quality.svg";
import Hygiene from "../../public/img/home/hygiene.svg";
import Supply from "../../public/img/home/supply.svg";

// DATA //

/** FieldsSec Section */
export default function FieldsSec({ gsap, ScrollTrigger }) {
	// useEffect(() => {
	// 	const cardTimeline = gsap.timeline({});

	// 	cardTimeline.to(
	// 		`.${styles.cardItemAnimation2}`,
	// 		{
	// 			// transform: "rotate(8deg) translate(50px, 0)",
	// 		},
	// 		"first"
	// 	);

	// 	ScrollTrigger.create({
	// 		trigger: `.${styles.FieldsSec}`,
	// 		animation: cardTimeline,
	// 		start: "top center",
	// 		end: "bottom center",
	// 		pin: false,
	// 		scrub: true,
	// 		markers: false,
	// 		// pinSpacing: false,
	// 	});
	// }, []);
	const Quality = useRef();
	const Supply = useRef();
	const Hygiene = useRef();
	useEffect(() => {
		// Lottie
		Lottie.loadAnimation({
			container: Quality.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Quality.json"),
		});
		Lottie.loadAnimation({
			container: Supply.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Supply2.json"),
		});
		Lottie.loadAnimation({
			container: Hygiene.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Hygiene.json"),
		});
	}, []);
	return (
		<section className={styles.FieldsSec} id="Promise">
			<div className="container">
				<div className={`${styles.FlexMain}`}>
					<div className={`${styles.TextBx}`}>
						<h2 className="text_50 toTop" data-scroll>
							From the fields to
							<br className="hidden_xs" /> our factory to you
						</h2>
						<h5 className="text_40 toTop" data-scroll>
							फसल से रसोई तक
						</h5>
						<p className="text_20 toTop" data-scroll>
							We take pride in manufacturing our products in-house at our
							state-of-the-art, fully automatic facility. This allows us to maintain
							stringent control at every stage. Plus, by cutting out intermediaries,
							we're able to pass the cost savings directly to our customers!
						</p>
					</div>
					<div className={`${styles.ImgBx}`}>
						<div className={`${styles.FieldItem} card1`} data-scroll>
							<div className={`${styles.ItemImg}`}>
								<div ref={Quality}></div>
								{/* <img src={Quality.src} alt="Social Icons" className="width_100" /> */}
							</div>
							<div className={`${styles.ItemTxt}`}>
								<p className="text_20 f_w_s_b">Quality</p>
								<p className="text_20">
									Ensuring our products meet the highest standards
								</p>
							</div>
						</div>
						<div className={`${styles.FieldItem} card2`} data-scroll>
							<div className={`${styles.ItemImg}`}>
								<div ref={Hygiene}></div>
								{/* <img src={Hygiene.src} alt="Social Icons" className="width_100" /> */}
							</div>
							<div className={`${styles.ItemTxt}`}>
								<p className="text_20 f_w_s_b">Hygiene</p>
								<p className="text_20">
									Guaranteeing a clean and safe production environment
								</p>
							</div>
						</div>
						<div className={`${styles.FieldItem} card3`} data-scroll>
							<div className={`${styles.ItemImg}`}>
								<div ref={Supply}></div>
								{/* <img src={Supply.src} alt="Social Icons" className="width_100" /> */}
							</div>
							<div className={`${styles.ItemTxt}`}>
								<p className="text_20 f_w_s_b">Supply</p>
								<p className="text_20">
									Managing our output to meet demand efficiently
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
