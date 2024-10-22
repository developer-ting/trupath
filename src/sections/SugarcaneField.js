// MODULES //
import { useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/SugarcaneField.module.scss";

// IMAGES //
import Cloud1 from "../../public/img/home/Cloud1.png";
import Cloud2 from "../../public/img/home/Cloud2.png";
import Cloud3 from "../../public/img/home/Cloud3.png";
import SugarcaneFieldImg from "../../public/img/home/SugarcaneFieldImg.png";

// DATA //

/** SugarcaneField Section */
export default function SugarcaneField({ gsap, ScrollTrigger }) {
	useEffect(() => {
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
			start: "top center",
			end: "500px center",
			pin: false,
			scrub: true,
			markers: true,
			// pinSpacing: false,
		});
	}, []);
	return (
		<section className={styles.SugarcaneField}>
			<div className={`${styles.CloudsBox} f_r_aj_between`}>
				<img src={Cloud1.src} className={`${styles.Cloud1}`} alt="Clouds Image" />
				<img src={Cloud2.src} className={`${styles.Cloud2}`} alt="Clouds Image" />
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
							eye can see, we witnessed firsthand the struggles of local farmers.
							Despite the region’s abundant sugarcane supply, existing factories failed
							to procure enough, leaving the farmers vulnerable. <br />
							So, we founded Trupath to address this issue, supporting farmers and
							helping India return to the Gud ol’ ways.
						</p>
					</div>
				</div>
			</div>
			<img
				src={SugarcaneFieldImg.src}
				className={`${styles.SugarcaneFieldImg} width_100`}
				alt="Sugarcane Image"
			/>
		</section>
	);
}
