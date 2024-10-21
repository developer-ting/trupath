// MODULES //
import { useEffect } from "react";

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

// DATA //

/** IntroSec Component */
export default function IntroSec({ gsap }) {
	useEffect(() => {
		const introTimeline = gsap.timeline({});

		introTimeline.to(
			`.${styles.Logo}`,
			{
				opacity: "0",
				duration: "2",
			},
			"first"
		);
		introTimeline
			.to(
				`.${styles.Title}`,
				{
					opacity: "1",
					top: "50%",
					duration: "2",
				},
				"second"
			)
			.fromTo(
				`.${styles.Cloud1}`,
				{
					x: "-120%",
				},
				{
					x: 0,
					duration: "2",
				},
				"second"
			)
			.fromTo(
				`.${styles.Cloud2}`,
				{
					x: "120%",
				},
				{
					x: 0,
					duration: "2",
				},
				"second"
			)
			.to(
				`.${styles.Grass1}, .${styles.Grass2}, .${styles.Grass3}, .${styles.Grass4}`,
				{
					opacity: 1,
					duration: "2",
				},
				"second"
			)
			.to(
				`.${styles.ScrollBtn}`,
				{
					opacity: 1,
					duration: "2",
				},
				"second"
			);
	});

	return (
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
		</div>
	);
}
