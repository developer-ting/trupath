/* eslint-disable require-jsdoc */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Lottie from "lottie-web";

// UTILS //

// STYLES //
import styles from "@/styles/sections/Sugarcoating.module.scss";

// IMAGES //
import sugarcoatingBg from "../../public/img/home/sugarcoating_bg_img.jpg";
import chiti from "../../public/img/home/chiti.png";
import marqueeC from "../../public/img/home/marquee_c.png";
import productCircle from "../../public/img/home/product_circle.png";
import mobileHandProduct from "../../public/img/home/transProMobile.png";
import leftStar from "../../public/img/home/left_star.png";
import rightStar from "../../public/img/home/right_star.png";
import hand from "../../public/img/home/hand.png";
import mobileHeand from "../../public/img/home/mobileHeand.png";
import productRecepi from "../../public/img/home/product_recepi.png";
import Spoon from "../../public/img/home/Spoon.png";
import vectorImg1 from "../../public/img/home/vector_img_1.png";
import vectorImg2 from "../../public/img/home/vector_img_2.png";
import vectorImg3 from "../../public/img/home/vector_img_3.png";
import vectorImg4 from "../../public/img/home/vector_img_4.png";
import vectorImg5 from "../../public/img/home/vector_img_5.png";
import vectorImg6 from "../../public/img/home/vector_img_6.png";
import bgLine from "../../public/img/banner/bg_line.png";
import transBg from "../../public/img/home/trans_bg.png";
import brownWave from "../../public/img/home/brown_wave.png";
import mobileProduct from "../../public/img/home/mobile_product.png";
import mobileMarquee from "../../public/img/home/mobile_marquee.png";
import transBgMobile from "../../public/img/home/transBgMobile.png";
import transBgIpad from "../../public/img/home/transBgIpad.png";
import transBgIpadPro from "../../public/img/home/transBgIpadPro.png";
import transProIpad from "../../public/img/home/transProIpad.png";

// DATA //

/** HomeHero Section */
export default function Sugarcoating({ gsap, ScrollTrigger }) {
	const finest = useRef();
	const premium = useRef();
	const desi = useRef();
	const preservatives = useRef();
	const additives = useRef();
	const guilt = useRef();
	// const Wave = useRef();
	// const Wave2 = useRef();
	useEffect(() => {
		// Lottie
		// Lottie.loadAnimation({
		// 	container: Wave.current,
		// 	renderer: "svg",
		// 	loop: true,
		// 	autoplay: true,
		// 	animationData: require("../../public/img/home/json/Waves-3.json"),
		// });
		// Lottie.loadAnimation({
		// 	container: Wave2.current,
		// 	renderer: "svg",
		// 	loop: true,
		// 	autoplay: true,
		// 	animationData: require("../../public/img/home/json/Waves.json"),
		// });
		Lottie.loadAnimation({
			container: finest.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Made-with-the-finest-sugarcane.json"),
		});
		Lottie.loadAnimation({
			container: premium.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Unadulterated-premium-quality.json"),
		});
		Lottie.loadAnimation({
			container: desi.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Unapologetically-desi.json"),
		});
		Lottie.loadAnimation({
			container: preservatives.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Preservatives-free.json"),
		});
		Lottie.loadAnimation({
			container: additives.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Harmful-additives-free3.json"),
		});
		Lottie.loadAnimation({
			container: guilt.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Guilt-free.json"),
		});
	}, []);
	const productImgRef = useRef(null);

	useEffect(() => {
		const winH = window.innerHeight;
		const winW = window.innerWidth;
		if (winW > 1200) {
			const sugarcoatingAnimTimeline = gsap.timeline({});
			const sugarcoatingAnimTimeline2 = gsap.timeline({});

			sugarcoatingAnimTimeline
				.fromTo(
					`.${styles.chini_img}`,
					{
						width: "0",
						scale: 0,
					},
					{
						width: "98px",
						scale: 1,
					},
					"first"
				)
				.fromTo(
					`.${styles.transBg}`,
					{
						scaleX: 10,
						scaleY: 10,
						y: "0%",
					},
					{
						scaleX: 1,
						scaleY: 1,
						y: "30%",
					},
					"second"
				)
				.fromTo(
					`.${styles.sugarcoating_bg_img}`,
					{
						y: "0%",
					},
					{
						y: "30%",
					},
					"second"
				)
				.to(
					`.${styles.leaves}`,
					{
						y: "-100%",
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
						delay: "0.2",
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
						delay: "0.2",
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
						transform: "translate(-50%, -100vh)",
					},
					"third"
				)
				.fromTo(
					`.${styles.transBg}`,
					{
						y: "30%",
					},
					{
						y: "10%",
					},
					"third"
				)
				.to(
					`.${styles.TrupathCircleWrapper}`,
					{
						top: "10vh",
					},
					"fourth"
				)
				.fromTo(
					`.${styles.product_circle_img}`,
					{
						top: "-112vh",
					},
					{
						top: "3vh",
					},
					"fourth"
				)
				.to(
					`.${styles.text_para}`,
					{
						opacity: "1",
						delay: 0.5,
					},
					"fourth"
				)
				.to(
					`.${styles.left_star}`,
					{
						left: "35%",
						opacity: "1",
					},
					"five"
				)
				.to(
					`.${styles.right_star}`,
					{
						right: "30%",
						opacity: "1",
					},
					"five"
				)
				.to(
					`.${styles.circle_div}`,
					{
						overflow: "inherit",
					},
					"five"
				)
				.fromTo(
					`.${styles.product_circle_img}`,
					{
						xPercent: -50,
						y: 0,
						rotate: "0deg",
					},
					{
						xPercent: -50,
						y: 0,
						rotate: "8deg",
						ease: "none",
						delay: 0.1,
					},
					"fourth"
				);
			ScrollTrigger.create({
				trigger: `.${styles.two_section_wrapper}`,
				animation: sugarcoatingAnimTimeline,
				start: "top top",
				end: "+=" + winH * 3,
				pin: true,
				scrub: true,
			});

			sugarcoatingAnimTimeline2
				.fromTo(
					`.${styles.Nature}`,
					{
						backgroundColor: "rgb(255 73 0 / 84%)",
					},
					{
						delay: 3,
						duration: 10,
						backgroundColor: "#410F00",
					},
					"first"
				)
				.fromTo(
					`.${styles.product_circle_img}`,
					{
						top: "3vh",
					},
					{
						top: "90vh",
						width: "1440px",
						height: "810px",
						left: "calc(50% + 240px)",
						duration: 15,
					},
					"first"
				)
				.fromTo(
					`.${styles.left_section}`,
					{
						left: "30%",
						opacity: 0,
					},
					{
						left: "0%",
						opacity: 1,
						duration: 5,
					},
					"second"
				)
				.to(
					`.${styles.SpoonMain}`,
					{
						opacity: 1,
					},
					"second"
				)
				.fromTo(
					`.${styles.right_section}`,
					{
						right: "30%",
						opacity: 0,
					},
					{
						right: "-20px",
						opacity: 1,
						duration: 5,
					},
					"second"
				);

			ScrollTrigger.create({
				trigger: `.${styles.Nature}`,
				animation: sugarcoatingAnimTimeline2,
				start: "top 90%",
				end: "+=" + winH * 0.8,
				scrub: true,
			});
		}
		if (winW < 767) {
			const sugarcoatingAnimTimeline = gsap.timeline({});
			const sugarcoatingAnimTimeline2 = gsap.timeline({});

			sugarcoatingAnimTimeline
				.fromTo(
					`.${styles.chini_img}`,
					{
						width: "0",
						scale: 0,
					},
					{
						width: "70px",
						scale: 1,
					},
					"first"
				)
				.fromTo(
					`.${styles.transBg}`,
					{
						scaleX: 5,
						scaleY: 5,
						y: "0%",
					},
					{
						scaleX: 1,
						scaleY: 1,
						y: "30%",
					},
					"second"
				)
				.fromTo(
					`.${styles.sugarcoating_bg_img}`,
					{
						y: "0%",
					},
					{
						y: "32vh",
					},
					"second"
				)
				.to(
					`.${styles.leaves}`,
					{
						y: "-100%",
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
						delay: "0.2",
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
						delay: "0.2",
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
						transform: "translate(-50%, -100vh)",
					},
					"third"
				)
				.fromTo(
					`.${styles.transBg}`,
					{
						y: "30%",
					},
					{
						y: "10%",
					},
					"third"
				)
				.to(
					`.${styles.TrupathCircleWrapper}`,
					{
						top: "0",
					},
					"fourth"
				)
				.fromTo(
					`.${styles.product_circle_img}`,
					{
						top: "-130vh",
					},
					{
						top: "0",
						duration: 0.5,
					},
					"fourth"
				)
				.fromTo(
					`.${styles.transBg}`,
					{
						y: "10%",
					},
					{
						y: "18%",
					},
					"fourth"
				)
				.to(
					`.${styles.text_para}`,
					{
						opacity: "1",
						delay: 0.5,
					},
					"fourth"
				)
				.to(
					`.${styles.left_star}`,
					{
						left: "15%",
						opacity: "1",
					},
					"five"
				)
				.to(
					`.${styles.right_star}`,
					{
						right: "0%",
						opacity: "1",
					},
					"five"
				)
				.to(
					`.${styles.circle_div}`,
					{
						overflow: "inherit",
					},
					"five"
				)
				.fromTo(
					`.${styles.product_circle_img}`,
					{
						xPercent: -50,
						y: 0,
						rotate: "0deg",
					},
					{
						xPercent: -50,
						y: 0,
						rotate: "8deg",
						ease: "none",
						delay: 0.1,
					},
					"fourth"
				);
			ScrollTrigger.create({
				trigger: `.${styles.two_section_wrapper}`,
				animation: sugarcoatingAnimTimeline,
				start: "top top",
				end: "+=" + winH * 3,
				pin: true,
				scrub: true,
			});

			sugarcoatingAnimTimeline2
				.fromTo(
					`.${styles.product_circle_img}`,
					{
						top: "0",
					},
					{
						top: "50vh",
						// left: "0",
						duration: 15,
					},
					"first"
				)
				.fromTo(
					`.${styles.left_section}`,
					{
						left: "30%",
						opacity: 0,
					},
					{
						left: "0%",
						opacity: 1,
						duration: 5,
					},
					"second"
				)
				.to(
					`.${styles.SpoonMain}`,
					{
						opacity: 1,
					},
					"second"
				)
				.fromTo(
					`.${styles.right_section}`,
					{
						right: "30%",
						opacity: 0,
					},
					{
						right: "-20px",
						opacity: 1,
						duration: 5,
					},
					"second"
				)
				.fromTo(
					`.${styles.mobile_product}`,
					{
						y: "10vh",
						opacity: 0,
					},
					{
						y: "0",
						delay: 5,
						opacity: 1,
						duration: 5,
					},
					"third"
				);

			ScrollTrigger.create({
				trigger: `.${styles.Nature}`,
				animation: sugarcoatingAnimTimeline2,
				start: "top 90%",
				end: "+=" + winH * 0.8,
				scrub: true,
			});
		}
		if (winW > 767 && winW < 992) {
			const sugarcoatingAnimTimeline = gsap.timeline({});
			const sugarcoatingAnimTimeline2 = gsap.timeline({});

			sugarcoatingAnimTimeline
				.fromTo(
					`.${styles.chini_img}`,
					{
						width: "0",
						scale: 0,
					},
					{
						width: "70px",
						scale: 1,
					},
					"first"
				)
				.fromTo(
					`.${styles.transBgIpad}`,
					{
						scaleX: 5,
						scaleY: 5,
						y: "0%",
					},
					{
						scaleX: 1,
						scaleY: 1,
						y: "30%",
					},
					"second"
				)
				.fromTo(
					`.${styles.sugarcoating_bg_img}`,
					{
						y: "0%",
					},
					{
						y: "32vh",
					},
					"second"
				)
				.to(
					`.${styles.leaves}`,
					{
						y: "-100%",
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
						delay: "0.2",
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
						delay: "0.2",
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
						transform: "translate(-50%, -100vh)",
					},
					"third"
				)
				.fromTo(
					`.${styles.transBgIpad}`,
					{
						y: "30%",
					},
					{
						y: "10%",
					},
					"third"
				)
				.to(
					`.${styles.TrupathCircleWrapper}`,
					{
						top: "0",
					},
					"fourth"
				)
				.fromTo(
					`.${styles.product_circle_img_ipad}`,
					{
						top: "-100vh",
					},
					{
						top: "0",
						duration: 0.5,
					},
					"fourth"
				)
				// .fromTo(
				// 	`.${styles.transBgIpad}`,
				// 	{
				// 		y: "10%",
				// 	},
				// 	{
				// 		y: "18%",
				// 	},
				// 	"fourth"
				// )
				.to(
					`.${styles.text_para}`,
					{
						opacity: "1",
						delay: 0.5,
					},
					"fourth"
				)
				.to(
					`.${styles.left_star}`,
					{
						left: "25%",
						opacity: "1",
					},
					"five"
				)
				.to(
					`.${styles.right_star}`,
					{
						right: "10%",
						opacity: "1",
					},
					"five"
				)
				.to(
					`.${styles.circle_div}`,
					{
						overflow: "inherit",
					},
					"five"
				)
				.fromTo(
					`.${styles.product_circle_img_ipad}`,
					{
						xPercent: -50,
						y: 0,
						rotate: "0deg",
					},
					{
						xPercent: -50,
						y: 0,
						rotate: "8deg",
						ease: "none",
						delay: 0.1,
					},
					"fourth"
				);
			ScrollTrigger.create({
				trigger: `.${styles.two_section_wrapper}`,
				animation: sugarcoatingAnimTimeline,
				start: "top top",
				end: "+=" + winH * 3,
				pin: true,
				scrub: true,
			});

			sugarcoatingAnimTimeline2
				.fromTo(
					`.${styles.product_circle_img_ipad}`,
					{
						top: "0",
					},
					{
						top: "68vh",
						// left: "0",
						duration: 15,
					},
					"first"
				)
				.fromTo(
					`.${styles.left_section}`,
					{
						left: "30%",
						opacity: 0,
					},
					{
						left: "0%",
						opacity: 1,
						duration: 5,
					},
					"second"
				)
				.to(
					`.${styles.SpoonMain}`,
					{
						opacity: 1,
					},
					"second"
				)
				.fromTo(
					`.${styles.right_section}`,
					{
						right: "30%",
						opacity: 0,
					},
					{
						right: "-20px",
						opacity: 1,
						duration: 5,
					},
					"second"
				)
				.fromTo(
					`.${styles.mobile_product}`,
					{
						y: "10vh",
						opacity: 0,
					},
					{
						y: "0",
						delay: 5,
						opacity: 1,
						duration: 5,
					},
					"third"
				);

			ScrollTrigger.create({
				trigger: `.${styles.Nature}`,
				animation: sugarcoatingAnimTimeline2,
				start: "top 90%",
				end: "+=" + winH * 0.8,
				scrub: true,
			});
		}
		if (winW > 992 && winW < 1200) {
			const sugarcoatingAnimTimeline = gsap.timeline({});
			const sugarcoatingAnimTimeline2 = gsap.timeline({});

			sugarcoatingAnimTimeline
				.fromTo(
					`.${styles.chini_img}`,
					{
						width: "0",
						scale: 0,
					},
					{
						width: "98px",
						scale: 1,
					},
					"first"
				)
				.fromTo(
					`.${styles.transBg}`,
					{
						scaleX: 10,
						scaleY: 10,
						y: "0%",
					},
					{
						scaleX: 1,
						scaleY: 1,
						y: "30%",
					},
					"second"
				)
				.fromTo(
					`.${styles.sugarcoating_bg_img}`,
					{
						y: "0%",
					},
					{
						y: "30%",
					},
					"second"
				)
				.to(
					`.${styles.leaves}`,
					{
						y: "-100%",
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
						delay: "0.2",
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
						delay: "0.2",
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
						transform: "translate(-50%, -100vh)",
					},
					"third"
				)
				.fromTo(
					`.${styles.transBg}`,
					{
						y: "30%",
					},
					{
						y: "10%",
					},
					"third"
				)

				.to(
					`.${styles.TrupathCircleWrapper}`,
					{
						top: "10vh",
					},
					"fourth"
				)
				.fromTo(
					`.${styles.transBg}`,
					{
						y: "10%",
					},
					{
						y: "15%",
					},
					"fourth"
				)
				.fromTo(
					`.${styles.product_circle_img}`,
					{
						top: "-127vh",
					},
					{
						top: "0",
					},
					"fourth"
				)
				.to(
					`.${styles.text_para}`,
					{
						opacity: "1",
						delay: 0.5,
					},
					"fourth"
				)
				.to(
					`.${styles.left_star}`,
					{
						left: "35%",
						opacity: "1",
					},
					"five"
				)
				.to(
					`.${styles.right_star}`,
					{
						right: "30%",
						opacity: "1",
					},
					"five"
				)
				.to(
					`.${styles.circle_div}`,
					{
						overflow: "inherit",
					},
					"five"
				)
				.fromTo(
					`.${styles.product_circle_img}`,
					{
						xPercent: -50,
						y: 0,
						rotate: "0deg",
					},
					{
						xPercent: -50,
						y: 0,
						rotate: "8deg",
						ease: "none",
						delay: 0.1,
					},
					"fourth"
				);
			ScrollTrigger.create({
				trigger: `.${styles.two_section_wrapper}`,
				animation: sugarcoatingAnimTimeline,
				start: "top top",
				end: "+=" + winH * 3,
				pin: true,
				scrub: true,
			});

			sugarcoatingAnimTimeline2
				.fromTo(
					`.${styles.Nature}`,
					{
						backgroundColor: "rgb(255 73 0 / 84%)",
					},
					{
						delay: 3,
						duration: 10,
						backgroundColor: "#410F00",
					},
					"first"
				)
				.fromTo(
					`.${styles.product_circle_img}`,
					{
						top: "0",
					},
					{
						top: "84vh",
						width: "1440px",
						height: "810px",
						left: "calc(50% + 175px)",
						duration: 15,
					},
					"first"
				)
				.fromTo(
					`.${styles.left_section}`,
					{
						left: "30%",
						opacity: 0,
					},
					{
						left: "0%",
						opacity: 1,
						duration: 5,
					},
					"second"
				)
				.to(
					`.${styles.SpoonMain}`,
					{
						opacity: 1,
					},
					"second"
				)
				.fromTo(
					`.${styles.right_section}`,
					{
						right: "30%",
						opacity: 0,
					},
					{
						right: "-20px",
						opacity: 1,
						duration: 5,
					},
					"second"
				);

			sugarcoatingAnimTimeline2
				.fromTo(
					`.${styles.product_circle_img_ipad}`,
					{
						top: "0",
					},
					{
						top: "68vh",
						// left: "0",
						duration: 15,
					},
					"first"
				)
				.fromTo(
					`.${styles.left_section}`,
					{
						left: "30%",
						opacity: 0,
					},
					{
						left: "0%",
						opacity: 1,
						duration: 5,
					},
					"second"
				)
				.to(
					`.${styles.SpoonMain}`,
					{
						opacity: 1,
					},
					"second"
				)
				.fromTo(
					`.${styles.right_section}`,
					{
						right: "30%",
						opacity: 0,
					},
					{
						right: "-20px",
						opacity: 1,
						duration: 5,
					},
					"second"
				)
				.fromTo(
					`.${styles.mobile_product}`,
					{
						y: "10vh",
						opacity: 0,
					},
					{
						y: "0",
						delay: 5,
						opacity: 1,
						duration: 5,
					},
					"third"
				);

			ScrollTrigger.create({
				trigger: `.${styles.Nature}`,
				animation: sugarcoatingAnimTimeline2,
				start: "top 90%",
				end: "+=" + winH * 0.8,
				scrub: true,
			});
		}
	}, []);

	return (
		<section className={`${styles.section_wrapper}`}>
			<div className={styles.two_section_wrapper}>
				<div className={`${styles.leaves}`}>
					{/* <div ref={Wave}></div> */}
					<img src={bgLine.src} className="img-responsive" alt="Sugarcane line" />
				</div>
				<div className={`${styles.sugarcoating}`} id="Overview">
					<div className={`${styles.sugarcoating_bg}`}>
						<img
							src={sugarcoatingBg.src}
							className={`${styles.sugarcoating_bg_img} img-responsive`}
							alt="sugarcoatingBg"
						/>
						<img
							src={transBg.src}
							className={`${styles.transBg} img-responsive hidden_xs`}
							alt="sugarcoatingBg"
						/>
						<img
							src={transBgMobile.src}
							className={`${styles.transBg} img-responsive visible_xs`}
							alt="sugarcoatingBg"
						/>
						<img
							src={transBgIpad.src}
							className={`${styles.transBgIpad} img-responsive`}
							alt="sugarcoatingBg"
						/>
						{/* <img
							src={transBgIpadPro.src}
							className={`${styles.transBg} img-responsive`}
							alt="sugarcoatingBg"
						/> */}
					</div>
					<div className={`${styles.sugarcoating_info}`}>
						<div className={`${styles.title_sec}`}>
							<h2 className={`${styles.title} text_50`}>No more</h2>
							<h2 className={`${styles.title} text_50`}>
								sugarcoating{" "}
								<span className={`${styles.chini_img}`}>
									<img src={chiti.src} className="img-responsive" alt="chiti" />
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
								<p>
									To be healthy you don’t need to eat bland. Simply stir, sprinkle or
									knead the nourishing Gud in your drinks and food to enjoy a better,
									wellness-focused life without sacrificing flavour!
								</p>
							</div>
							<div className={`${styles.product_circle}`}>
								<img
									src={productCircle.src}
									className={`${styles.product_circle_img} img-responsive hidden_xs`}
								/>
								<div className={`${styles.SpoonMain}`}>
									<img src={Spoon.src} className={styles.Spoon} alt="productSpoon" />
								</div>
								<img
									src={mobileHandProduct.src}
									className={`${styles.product_circle_img} img-responsive visible_xs`}
								/>
								<img
									src={transProIpad.src}
									className={`${styles.product_circle_img_ipad} img-responsive`}
								/>
								<div className={`${styles.left_star}`}>
									<img src={leftStar.src} className="img-responsive" alt="left_star" />
								</div>
								<div className={`${styles.right_star}`}>
									<img src={rightStar.src} className="img-responsive" alt="right_star" />
								</div>
							</div>
							<div className={`${styles.hand}`}>
								<img src={hand.src} className="img-responsive hidden_xs" alt="hand" />
								<img
									src={mobileHeand.src}
									className="img-responsive visible_xs"
									alt="hand"
								/>
							</div>
						</div>
						<div className={`${styles.title_div} hidden_xs`}>
							<img src={marqueeC.src} className="img-responsive" alt="marqueeC" />
						</div>
						<div
							className={`${styles.title_div} ${styles.title_div_mobile} visible_xs`}
						>
							<img src={mobileMarquee.src} className="img-responsive" alt="marqueeC" />
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.Nature}`} id="USPs">
				<div className={`${styles.pad_section} container`}>
					<div className={`${styles.nature_section} f_r_aj_between`}>
						{/* <img
							src={mobileProduct.src}
							className={`${styles.mobileProduct} img-responsive visible_xs`}
							alt="hand"
						/> */}
						<div className={`${styles.info} toTop`} data-scroll>
							<h2 className="text_50">From the lap of nature, not labs</h2>
							<h3 className="text_40">सर्व गुड़ सम्पन्न</h3>
							<p className="text_20">
								Our products are made with 100% natural ingredients without harmful
								chemicals which means every spoonful keeps you happy and healthy!
							</p>
						</div>
						<div className={`${styles.product} hidden_xs`}>
							<div className={`${styles.left_section}`}>
								<div className={`${styles.top_item}`}>
									{/* <img src={vectorImg1.src} className="img-responsive" alt="vectorImg" /> */}
									<div className={`${styles.icon_lottie}`} ref={finest}></div>
									<p className="text_16">Made with the finest sugarcane</p>
								</div>
								<div className={`${styles.center_item}`}>
									{/* <img src={vectorImg2.src} className="img-responsive" alt="vectorImg" /> */}
									<div className={`${styles.icon_lottie}`} ref={premium}></div>
									<p className="text_16">Unadulterated, premium quality</p>
								</div>
								<div className={`${styles.bottom_item}`}>
									{/* <img src={vectorImg3.src} className="img-responsive" alt="vectorImg" /> */}
									<div className={`${styles.icon_lottie}`} ref={desi}></div>
									<p className="text_16">Unapologetically desi</p>
								</div>
							</div>
							{/* <div className={`${styles.SpoonMain}`}>
								<img src={Spoon.src} className={styles.Spoon} alt="productSpoon" />
							</div> */}
							<div className={`${styles.product_img}`} ref={productImgRef}>
								<img
									src={productRecepi.src}
									className={`${styles.ProductImg} img-responsive`}
									alt="productRecepi"
								/>
							</div>
							<div className={`${styles.right_section}`}>
								<div className={`${styles.top_item}`}>
									{/* <img src={vectorImg4.src} className="img-responsive" alt="vectorImg" /> */}
									<div className={`${styles.icon_lottie}`} ref={preservatives}></div>
									<p className="text_16">Preservatives free</p>
								</div>
								<div className={`${styles.center_item}`}>
									{/* <img src={vectorImg5.src} className="img-responsive" alt="vectorImg" /> */}
									<div className={`${styles.icon_lottie}`} ref={additives}></div>
									<p className="text_16">Harmful additives free</p>
								</div>
								<div className={`${styles.bottom_item}`}>
									{/* <img src={vectorImg6.src} className="img-responsive" alt="vectorImg" /> */}
									<div className={`${styles.icon_lottie}`} ref={guilt}></div>
									<p className="text_16">Guilt free</p>
								</div>
							</div>
						</div>
						<div className={`${styles.mobile_product}`}>
							<div className={`${styles.icon_item}`}>
								{/* <div ref={finest}></div> */}
								<img src={vectorImg1.src} className="img-responsive" alt="vectorImg" />
								<p className="text_16">Made with the finest sugarcane</p>
							</div>
							<div className={`${styles.icon_item}`}>
								{/* <div ref={premium}></div> */}
								<img src={vectorImg2.src} className="img-responsive" alt="vectorImg" />
								<p className="text_16">Unadulterated, premium quality</p>
							</div>
							<div className={`${styles.icon_item}`}>
								{/* <div ref={desi}></div> */}
								<img src={vectorImg3.src} className="img-responsive" alt="vectorImg" />
								<p className="text_16">Unapologetically desi</p>
							</div>
							<div className={`${styles.icon_item}`}>
								<img src={vectorImg4.src} className="img-responsive" alt="vectorImg" />
								{/* <div ref={preservatives}></div> */}
								<p className="text_16">Preservatives free</p>
							</div>
							<div className={`${styles.icon_item}`}>
								<img src={vectorImg5.src} className="img-responsive" alt="vectorImg" />
								{/* <div ref={additives}></div> */}
								<p className="text_16">Harmful additives free</p>
							</div>
							<div className={`${styles.icon_item}`}>
								<img src={vectorImg6.src} className="img-responsive" alt="vectorImg" />
								{/* <div ref={guilt}></div> */}
								<p className="text_16">Guilt free</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.wave_bgg}`}>
				<img
					src={brownWave.src}
					className={`${styles.Waves} width_100`}
					alt="Wave"
				/>
				{/* <div ref={Wave2}></div> */}
			</div>
		</section>
	);
}
