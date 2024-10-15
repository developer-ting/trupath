/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/Sugarcoating.module.scss";

// IMAGES //
import sugarcoatingBg from "../../public/img/home/sugarcoating_bg_img.jpg";
import chiti from "../../public/img/home/chiti.png";
import marqueeC from "../../public/img/home/marquee_c.png";
import productCircle from "../../public/img/home/product_circle.png";
import leftStar from "../../public/img/home/left_star.png";
import rightStar from "../../public/img/home/right_star.png";
import hand from "../../public/img/home/hand.png";
import productRecepi from "../../public/img/home/product_recepi.png";
import vectorImg from "../../public/img/home/vector_img.png";

// DATA //

/** HomeHero Section */
export default function Sugarcoating({ gsap, ScrollTrigger }) {
	const [trupathCircleWrapperHeight, setTrupathCircleWrapperHeight] =
		useState(0);
	const productImgRef = useRef(null); // Create a ref for product_img

	useEffect(() => {
		const winH = window.innerHeight;
		const winW = window.innerWidth;
		const sugarcoatingAnimTimeline = gsap.timeline({});
		const sugarcoatingAnimTimeline2 = gsap.timeline({});
		const TrupathCircleWrapper = document.querySelector(".TrupathCircleWrapper");
		if (TrupathCircleWrapper) {
			const height = TrupathCircleWrapper.offsetHeight;
			setTrupathCircleWrapperHeight(height);
			console.log(height);
		}

		const productImgRect = productImgRef.current?.getBoundingClientRect(); // Get the position of product_img
		const productCircle = document.querySelector(`.${styles.product_circle_img}`);

		sugarcoatingAnimTimeline
			.fromTo(
				`.${styles.chini_img}`,
				{
					width: "0",
				},
				{
					width: "98px",
				},
				"first"
			)
			.fromTo(
				`.${styles.sugarcoating_bg}`,
				{
					scaleX: 1.1, // Starting horizontal scale (1 means 100%)
					scaleY: 1.1, // Starting vertical scale (1 means 100%)
					y: "0%", // Starting translateY
				},
				{
					scaleX: 0.2, // Ending horizontal scale (50% of original width)
					scaleY: 0.55, // Ending vertical scale (30% of original height)
					y: "40%", // Ending translateY
				},
				"second"
			)
			.fromTo(
				`.${styles.title_sec}, .${styles.title}`,
				{
					// color: "#fff",
				},
				{
					color: "#000",
				},
				"second"
			)
			.fromTo(
				`.${styles.para_text_ani}`,
				{
					// color: "#fff",
				},
				{
					color: "#000",
				},
				"second"
			)
			.fromTo(
				`.${styles.sugarcoating_info}`,
				{
					transform: "translate(-50%, -50%)",
				},
				{
					transform: "translate(-50%, -100%)",
				},
				"second"
			)
			.fromTo(
				`.${styles.sugarcoating_info}`,
				{
					transform: "translate(-50%, -100%)",
				},
				{
					transform: "translate(-50%, -300%)",
				},
				"third"
			)
			.fromTo(
				`.${styles.sugarcoating_bg}`,
				{
					y: "40%", // Starting translateY
				},
				{
					y: "10%", // Ending translateY
				},
				"third"
			)
			.fromTo(
				`.${styles.sugarcoating_bg}`,
				{
					opacity: "1", // Starting translateY
				},
				{
					opacity: "0",
					delay: 0.5, // Ending translateY
				},
				"fourth"
			)
			.fromTo(
				`.${styles.TrupathCircle}`,
				{
					y: "0%", // Starting translateY
				},
				{
					y: "-120%", // Adjust the end translateY to reduce the gap
				},
				"fourth"
			)
			.fromTo(
				`.${styles.product_circle_img}`,
				{
					top: "-90vh", // Starting top position
				},
				{
					top: "250px",
				},
				"fourth"
			)
			.fromTo(
				`.${styles.product_circle_img}`,
				{
					rotate: "16deg",
					duration: 10,
				},
				{
					rotate: "0deg",
				},
				"fourth"
			);

		ScrollTrigger.create({
			trigger: `.${styles.two_section_wrapper}`,
			animation: sugarcoatingAnimTimeline,
			start: "top top",
			end: "+=" + winH * 2,
			pin: true,
			scrub: true,
			markers: true,
			// pinSpacing: false,
		});

		const productImgElement = productImgRef.current;

		if (productImgElement) {
			const productImgRect = productImgElement.getBoundingClientRect();
			const productCircle = document.querySelector(
				`.${styles.product_circle_img}`
			);

			if (productCircle) {
				sugarcoatingAnimTimeline2.fromTo(
					`.${styles.product_circle_img}`,
					{
						top: "250px", // Starting position
						left: `${productCircle.offsetLeft}px`, // Start from the current position
					},
					{
						top: `${productImgRect.top}px`, // Animate to the product_img position
						left: `${productImgRect.left}px`, // Adjust horizontal position if necessary
						duration: 1,
						ease: "power1.inOut",
					},
					"fourth"
				);
			}
		}
		ScrollTrigger.create({
			trigger: `.${styles.Nature}`,
			animation: sugarcoatingAnimTimeline2,
			start: "top bottom",
			end: "+=" + winH * 1,
			// pin: true,
			scrub: true,
			markers: true,
			// pinSpacing: false,
		});
	}, []);

	return (
		<section className={`${styles.section_wrapper}`}>
			<div
				className={styles.two_section_wrapper}
				style={{ paddingBottom: trupathCircleWrapperHeight }}
			>
				<div className={`${styles.sugarcoating}`}>
					<div className={`${styles.sugarcoating_bg}`}>
						<img
							src={sugarcoatingBg.src}
							className={`${styles.sugarcoating_bg_img} img-responsive`}
							alt="sugarcoatingBg"
						/>
					</div>
					<div className={`${styles.sugarcoating_info}`}>
						<div className={`${styles.title_sec}`}>
							<h2 className={`${styles.title} text_50`}>No more</h2>
							<h2 className={`${styles.title} text_50`}>
								sugarcoating{" "}
								<span>
									<img
										src={chiti.src}
										className={`${styles.chini_img} img-responsive`}
										alt="chiti"
									/>
								</span>{" "}
								the truth
							</h2>
						</div>
						<div className={`${styles.para}`}>
							<p className={`${styles.para_text_ani} text_20`}>
								We all want the same thing - a healthy life without compromise. But the
								world’s been hooked to unhealthy sugar for far too long. It’s time to
								swap the nasty with the no-nonsense.
							</p>
						</div>
					</div>
				</div>
				<div className={`${styles.TrupathCircleWrapper} TrupathCircleWrapper`}>
					<div className={`${styles.TrupathCircle}`}>
						<div className={`${styles.circle_div}`}>
							<div className={`${styles.text_para}`}>
								<p className="text_20">
									To be healthy you don’t need to eat bland. Simply stir, sprinkle or
									knead the nourishing Gud in your drinks and food to enjoy a better,
									wellness-focused life without sacrificing flavour!
								</p>
							</div>
							<div className={`${styles.product_circle}`}>
								<img
									src={productCircle.src}
									className={`${styles.product_circle_img} img-responsive`}
									alt="product_circle"
								/>
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
					</div>
				</div>
			</div>
			<div className={`${styles.Nature}`}>
				<div className="container">
					<div className={`${styles.nature_section} f_r_aj_between`}>
						<div className={`${styles.info}`}>
							<h2 className="text_50">From the lap of nature, not labs</h2>
							<h3 className="text_40">सर्व गुड़ सम्पन्न</h3>
							<p className="text_20">
								Our products are made with 100% natural ingredients without harmful
								chemicals which means every spoonful keeps you happy and healthy!
							</p>
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
							<div className={`${styles.product_img}`} ref={productImgRef}>
								<img
									src={productRecepi.src}
									className="img-responsive"
									alt="productRecepi"
								/>
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
			</div>
		</section>
	);
}
