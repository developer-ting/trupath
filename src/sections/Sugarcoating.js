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
import leftStar from "../../public/img/home/left_star.png";
import rightStar from "../../public/img/home/right_star.png";
import hand from "../../public/img/home/hand.png";
import productRecepi from "../../public/img/home/product_recepi.png";
import vectorImg1 from "../../public/img/home/vector_img_1.png";
import vectorImg2 from "../../public/img/home/vector_img_2.png";
import vectorImg3 from "../../public/img/home/vector_img_3.png";
import vectorImg4 from "../../public/img/home/vector_img_4.png";
import vectorImg5 from "../../public/img/home/vector_img_5.png";
import vectorImg6 from "../../public/img/home/vector_img_6.png";
import bgLine from "../../public/img/banner/bg_line.png";
import transBg from "../../public/img/home/trans_bg.png";

// DATA //

/** HomeHero Section */
export default function Sugarcoating({ gsap, ScrollTrigger }) {
	const finest = useRef();
	const premium = useRef();
	const desi = useRef();
	const preservatives = useRef();
	const additives = useRef();
	const guilt = useRef();
	const Wave = useRef();
	const Wave2 = useRef();
	useEffect(() => {
		// Lottie
		Lottie.loadAnimation({
			container: Wave.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Waves-3.json"),
		});
		Lottie.loadAnimation({
			container: Wave2.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../public/img/home/json/Waves.json"),
		});
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
	const [trupathCircleWrapperHeight, setTrupathCircleWrapperHeight] =
		useState(0);
	const [productHeight, setProductHeight] = useState(0);
	const [windowHeight, setWindowHeight] = useState(0);
	const productImgRef = useRef(null); // Create a ref for product_img
	const productHeightSection = windowHeight;
	console.log(productHeightSection, "productHeightSection");

	useEffect(() => {
		const winH = window.innerHeight;
		const winW = window.innerWidth;
		setWindowHeight(winH);
		const sugarcoatingAnimTimeline = gsap.timeline({});
		const sugarcoatingAnimTimeline2 = gsap.timeline({});
		const TrupathCircleWrapper = document.querySelector(".TrupathCircleWrapper");
		const windowHeight = window.innerHeight;
		const additionalHeight = 100;
		const natureHeight = windowHeight + additionalHeight + "px";

		const root = document.documentElement;
		const containerLeftSpace = getComputedStyle(root).getPropertyValue(
			"--container_left_space"
		);

		console.log("Container Left Space:", containerLeftSpace);

		if (TrupathCircleWrapper) {
			const height = TrupathCircleWrapper.offsetHeight;
			setTrupathCircleWrapperHeight(height);
		}

		const circle = document.querySelector(`.${styles.product_circle}`);
		const natureProductImg = document.querySelector(`.${styles.product_img}`);

		if (circle && natureProductImg) {
			const circleProductImgBottom = circle.getBoundingClientRect().height;
			const natureProductImgBottom =
				natureProductImg.getBoundingClientRect().height;

			const distanceBetweenBottoms =
				circleProductImgBottom - natureProductImgBottom;
			setProductHeight(distanceBetweenBottoms);
			console.log("Distance", circleProductImgBottom);
			console.log("Distance", natureProductImgBottom);
			console.log("Distance", distanceBetweenBottoms);
		}

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
					scaleX: 10, // Starting horizontal scale (1 means 100%)
					scaleY: 10, // Starting vertical scale (1 means 100%)
					y: "0%", // Starting translateY
				},
				{
					scaleX: 1, // Ending horizontal scale (50% of original width)
					scaleY: 1, // Ending vertical scale (30% of original height)
					y: "30%", // Ending translateY
				},
				"second"
			)
			.fromTo(
				`.${styles.sugarcoating_bg_img}`,
				{
					y: "0%", // Starting translateY
				},
				{
					y: "30%", // Ending translateY
				},
				"second"
			)
			.to(
				`.${styles.leaves}`,
				{
					y: "-100%", // Starting translateY
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
					y: "30%", // Starting translateY
				},
				{
					y: "10%", // Ending translateY
				},
				"third"
			)
			// .fromTo(
			// 	`.${styles.sugarcoating_bg}`,
			// 	{
			// 		opacity: "1", // Starting translateY
			// 	},
			// 	{
			// 		opacity: "0",
			// 		delay: 0.5, // Ending translateY
			// 	},
			// 	"fourth"
			// )
			// .fromTo(
			// 	`.${styles.TrupathCircle}`,
			// 	{
			// 		y: "0%", // Starting translateY
			// 	},
			// 	{
			// 		y: "-120%", // Adjust the end translateY to reduce the gap
			// 	},
			// 	"fourth"
			// )
			.to(
				`.${styles.TrupathCircleWrapper}`,
				{
					top: "10vh", // Starting translateY
				},
				"fourth"
			)
			.fromTo(
				`.${styles.product_circle_img}`,
				{
					top: "-106vh",
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
			// .fromTo(
			// 	`.${styles.product_circle_img}`,
			// 	{
			// 		top: "25%",
			// 	},
			// 	{
			// 		top: `${natureHeight}`,
			// 		// top: "100%",
			// 	},
			// 	"six"
			// );
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
			end: "+=" + winH * 2,
			pin: true,
			scrub: true,
			// markers: true,
			// pinSpacing: false,
		});

		const productImgElement = productImgRef.current;

		// if (productImgElement) {
		// 	const productImgRect = productImgElement.getBoundingClientRect();
		// 	const productCircle = document.querySelector(
		// 		`.${styles.product_circle_img}`
		// 	);

		// 	if (productCircle) {
		// 		sugarcoatingAnimTimeline2.fromTo(
		// 			`.${styles.product_circle_img}`,
		// 			{
		// 				top: "250px", // Starting position
		// 				left: `${productCircle.offsetLeft}px`, // Start from the current position
		// 			},
		// 			{
		// 				top: `${productImgRect.top}px`, // Animate to the product_img position
		// 				left: `${productImgRect.left}px`, // Adjust horizontal position if necessary
		// 				duration: 1,
		// 				ease: "power1.inOut",
		// 			},
		// 			"fourth"
		// 		);
		// 	}
		// }
		// const productHeight = window.innerHeight * productHeight;
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
					// left: "50%",
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
					// left: "-70%",
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
			.fromTo(
				`.${styles.right_section}`,
				{
					// left: "-70%",
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
			// pin: true,
			scrub: true,
			// markers: true,
			// pinSpacing: false,
		});
	}, []);

	const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
	const [scrollPosition, setScrollPosition] = useState(0);
	const imgRef = useRef(null); // Create a ref for the image element

	// Function to handle image load
	const handleImageLoad = () => {
		if (imgRef.current) {
			const { width, height } = imgRef.current.getBoundingClientRect();
			setImageSize({ width, height });
		}
	};

	// Function to handle scroll
	const handleScroll = () => {
		setScrollPosition(window.scrollY);

		if (imgRef.current) {
			const { width, height } = imgRef.current.getBoundingClientRect();
			setImageSize({ width, height });
		}
	};

	useEffect(() => {
		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup scroll event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section className={`${styles.section_wrapper}`}>
			<div className={styles.two_section_wrapper}>
				<div className={`${styles.leaves}`}>
					<div ref={Wave}></div>
					{/* <img src={bgLine.src} className="img-responsive" alt="Sugarcane line" /> */}
				</div>
				<div className={`${styles.sugarcoating}`} id="About">
					{/* <p>Image width: {imageSize.width}px</p>
					<p>Image height: {imageSize.height}px</p>
					<p>Scroll position: {scrollPosition}px</p> */}
					<div className={`${styles.sugarcoating_bg}`}>
						<img
							src={sugarcoatingBg.src}
							ref={imgRef}
							className={`${styles.sugarcoating_bg_img} img-responsive`}
							alt="sugarcoatingBg"
							// onLoad={handleImageLoad}
						/>
						<img
							src={transBg.src}
							ref={imgRef}
							className={`${styles.transBg} img-responsive`}
							alt="sugarcoatingBg"
							// onLoad={handleImageLoad}
						/>
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
									// alt="product_circle"
									// style={{
									// 	width: `${imageSize.width}px`, // Set width dynamically
									// 	height: `${imageSize.height}px`, // Set height dynamically
									// 	objectFit: "contain", // Optional: maintain aspect ratio
									// }}
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
				<div className={`${styles.pad_section} container`}>
					<div className={`${styles.nature_section} f_r_aj_between`}>
						<div className={`${styles.info} toTop`} data-scroll>
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
									{/* <img src={vectorImg1.src} className="img-responsive" alt="vectorImg" /> */}
									<div ref={finest}></div>
									<p className="text_16">Made with the finest sugarcane</p>
								</div>
								<div className={`${styles.center_item}`}>
									{/* <img src={vectorImg2.src} className="img-responsive" alt="vectorImg" /> */}
									<div ref={premium}></div>
									<p className="text_16">Unadulterated, premium quality</p>
								</div>
								<div className={`${styles.bottom_item}`}>
									{/* <img src={vectorImg3.src} className="img-responsive" alt="vectorImg" /> */}
									<div ref={desi}></div>
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
									{/* <img src={vectorImg4.src} className="img-responsive" alt="vectorImg" /> */}
									<div ref={preservatives}></div>
									<p className="text_16">Preservatives free</p>
								</div>
								<div className={`${styles.center_item}`}>
									{/* <img src={vectorImg5.src} className="img-responsive" alt="vectorImg" /> */}
									<div ref={additives}></div>
									<p className="text_16">Harmful additives free</p>
								</div>
								<div className={`${styles.bottom_item}`}>
									{/* <img src={vectorImg6.src} className="img-responsive" alt="vectorImg" /> */}
									<div ref={guilt}></div>
									<p className="text_16">Guilt free</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.wave}`}>
				<div ref={Wave2}></div>
			</div>
		</section>
	);
}
