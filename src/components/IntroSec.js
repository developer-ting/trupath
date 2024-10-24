/* eslint-disable require-jsdoc */
// MODULES //
import { useEffect, useRef } from "react";

// COMPONENTS //
import Button from "./Buttons/Button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/IntroSec.module.scss";

// IMAGES //
import Logo from "../../public/img/intro/Logo.svg";
import Grass1 from "../../public/img/intro/Grass1.png";
import Grass2 from "../../public/img/intro/Grass2.png";
import Grass3 from "../../public/img/intro/Grass3.png";
import Grass4 from "../../public/img/intro/Grass4.png";
import LeftCloud from "../../public/img/intro/LeftCloud.png";
import RightCloud from "../../public/img/intro/RightCloud.png";
import Path1 from "../../public/img/intro/Path1.png";
import Bowl1 from "../../public/img/intro/Bowl1.png";
import Path2 from "../../public/img/intro/Path2.png";
import Bowl2 from "../../public/img/intro/Bowl2.png";

// DATA //

/** IntroSec Component */
export default function IntroSec({ gsap }) {
	useEffect(() => {
		const introTimeline = gsap.timeline({});

		introTimeline
			.to(
				`.${styles.Logo}`,
				1.5,
				{
					opacity: "0",
					// duration: "2",
				},
				"1st"
			)

			.to(
				`.${styles.Title}`,
				1,
				{
					opacity: "1",
					top: "40%",
					// duration: "2",
				},
				"2nd"
			)
			.to(
				`.${styles.Cloud1}`,
				1,
				// {
				// 	x: "-120%",
				// 	opacity: 1,
				// },
				{
					x: 0,
					opacity: 1,
					// duration: "2",
				},
				"2nd"
			)
			.to(
				`.${styles.Cloud2}`,
				1,
				// {
				// 	x: "120%",
				// 	opacity: 1,
				// },
				{
					x: 0,
					opacity: 1,
					// duration: "2",
				},
				"2nd"
			)
			.to(
				`.${styles.Grass1}, .${styles.Grass2}, .${styles.Grass3}, .${styles.Grass4}`,
				1,
				{
					opacity: 1,
					// duration: "2",
				},
				"2nd"
			)
			.to(
				`.${styles.ScrollBtn}`,
				1,
				{
					opacity: 1,
					// duration: "2",
				},
				"2nd"
			)
			.to(
				`.${styles.Title}`,
				1,
				{
					top: "25%",
					// duration: "2",
				},
				"3rd"
			)
			.to(
				`.${styles.LeftDiv} .${styles.path}`,
				1,
				{
					"clip-path": "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
				},
				"3rd"
			)
			.to(
				`.${styles.LeftDiv} .${styles.BowlMain}`,
				1,
				// {
				// 	left: "-100%",
				// 	bottom: "65%",
				// 	y: "-100px",
				// },
				{
					left: "20%",
					bottom: "65%",
					y: "0px",
					duration: 1,
				},
				"4th"
			)
			.to(
				`.${styles.LeftDiv} .${styles.BowlTitle}`,
				1,
				// {
				// 	y: "20px",
				// 	opacity: 0,
				// },
				{
					y: "0px",
					opacity: 1,
					duration: 1,
				},
				"5th"
			)
			.to(
				`.${styles.RightDiv} .${styles.path}`,
				1,
				{
					"clip-path": "polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)",
				},
				"6th"
			)
			.to(
				`.${styles.LeftDiv} .${styles.path}`,
				0.2,
				{
					"clip-path": "polygon(90% 0%, 0% 0%, 0% 100%, 90% 100%)",
				},
				"6th"
			)
			.to(
				`.${styles.RightDiv} .${styles.BowlMain}`,
				1,
				// {
				// 	right: "-100%",
				// 	bottom: "65%",
				// 	y: "-100px",
				// },
				{
					right: "20%",
					bottom: "70%",
					y: "0px",
					duration: 1,
				},
				"7th"
			)
			.to(
				`.${styles.RightDiv} .${styles.BowlTitle}`,
				1,
				// {
				// 	y: "20px",
				// 	opacity: 0,
				// },
				{
					y: "0px",
					opacity: 1,
					duration: 1,
				},
				"8th"
			)
			.to(
				`.${styles.Title}`,
				1,
				{
					top: "15%",
					opacity: 0,
					// duration: "2",
				},
				"9th"
			)
			.to(
				`.${styles.LastBox} .${styles.LastTitle}`,
				1,
				// {
				// 	y: "30%",
				// 	opacity: 0,
				// },
				{
					y: "0%",
					opacity: 1,
				},
				"9th"
			)
			.to(
				`.${styles.LastBox} .${styles.BtnWrap}`,
				1,
				{
					y: "0",
					opacity: 1,
				},
				"10th"
			);
	});
	const handleClick = () => {
		console.log("Clicked");

		const afterintroTimeline = gsap.timeline({});
		// Animation for OrangeBg on button click
		afterintroTimeline
			.to(
				`.${styles.OrangeBg}`,
				1,
				{
					y: "-100%",
					opacity: 1,
				},
				"2st"
			)
			.to(
				`.${styles.IntroMain}`,
				1,
				{
					y: "-100%",
					opacity: 1,
				},
				"2st"
			)
			.fromTo(
				".banner_animation",
				1,
				{
					y: "90%",
					opacity: 1,
				},
				{
					y: "0%",
					opacity: 1,
					delay: 0.1,
				},
				"2st"
			)
			.fromTo(
				".info",
				1,
				{
					y: "150px",
					opacity: 1,
				},
				{
					y: "0",
					opacity: 1,
					delay: 0.1,
				},
				"2st"
			)
			.fromTo(
				".sugarcane",
				1,
				{
					y: "20%",
					opacity: 1,
				},
				{
					y: "0",
					opacity: 1,
					delay: 0.1,
				},
				"2st"
			)
			.fromTo(
				".product_img",
				1,
				{
					y: "20%",
					opacity: 1,
				},
				{
					y: "0",
					opacity: 1,
					delay: 0.1,
				},
				"2st"
			)
			.fromTo(
				`.${styles.skip_btn}`,
				1,
				{
					display: "block",
				},
				{
					display: "none",
				},
				"1st"
			)
			.to(
				".hidden_header_only",
				1,
				{
					y: "0%",
					opacity: 1,
				},
				"3st"
			);
	};

	return (
		<div className={`${styles.IntroWrap}`}>
			<div className={`${styles.IntroMain}`}>
				<div className={styles.Logo}>
					<img className={`${styles.Logo}`} src={Logo.src} alt="Logo Image" />
				</div>
				<div className={styles.MainDiv}>
					<div className={styles.Cloud1}>
						<img
							className={`${styles.LeftCloud}`}
							src={LeftCloud.src}
							alt="LeftCloud Image"
						/>
					</div>
					<div className={styles.Cloud2}>
						<img
							className={`${styles.RightCloud}`}
							src={RightCloud.src}
							alt="RightCloud Image"
						/>
					</div>
					<div className={styles.Title}>
						<h2 className="text_100 color_secondary">Two paths lie ahead</h2>
					</div>
					<img className={`${styles.Grass1}`} src={Grass1.src} alt="Grass1 Image" />
					<img className={`${styles.Grass2}`} src={Grass2.src} alt="Grass2 Image" />
					<img className={`${styles.Grass3}`} src={Grass3.src} alt="Grass3 Image" />
					<img className={`${styles.Grass4}`} src={Grass4.src} alt="Grass4 Image" />
					<div className={styles.ScrollBtn}>
						<Button color="primary" variant="underline">
							Scroll To Explore
						</Button>
					</div>
				</div>
				<div className={`${styles.BowlPathMain}`}>
					<div className={`${styles.LeftDiv}`}>
						<div className={`${styles.path}`}>
							<img
								className={`${styles.Path1} width_100`}
								src={Path1.src}
								alt="Path1 Image"
							/>
						</div>
						<div className={`${styles.BowlMain}`}>
							<div className={`${styles.BowlTitle}`}>
								<p>One leads to perils of sugar</p>
							</div>
							<img className={`${styles.Bowl1}`} src={Bowl1.src} alt="Bowl1 Image" />
						</div>
					</div>
					<div className={`${styles.RightDiv}`}>
						<div className={`${styles.path}`}>
							<img
								className={`${styles.Path2} width_100`}
								src={Path2.src}
								alt="Path2 Image"
							/>
						</div>
						<div className={`${styles.BowlMain}`}>
							<div className={`${styles.BowlTitle}`}>
								<p>The other, to the gud ol’ ways</p>
							</div>
							<img className={`${styles.Bowl2}`} src={Bowl2.src} alt="Bowl2 Image" />
						</div>
					</div>
				</div>
				<div className={`${styles.LastBox}`}>
					<div className={`${styles.LastTitle}`}>
						<h2 className="text_50 color_secondary">What will you do?</h2>
					</div>
					<div className={`${styles.BtnWrap}`} onClick={handleClick}>
						<Button className={`${styles.Btn}`} color="primary" variant="filled">
							Click to Enter
						</Button>
					</div>
				</div>
			</div>
			<div onClick={handleClick}>
				<div className={`${styles.skip_btn}`}>
					<Button className={`${styles.Btn}`} color="primary" variant="filled">
						skip
					</Button>
				</div>
			</div>
			<div className={`${styles.OrangeBg}`}></div>
		</div>
	);
}
