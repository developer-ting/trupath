// MODULES //
import { useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/SweetTaste.module.scss";

// IMAGES //
import BowlImg from "../../public/img/home/JaggeryBowl.png";
import Tick from "../../public/img/home/Tick.png";

// DATA //

/** SweetTaste Section */
export default function SweetTaste({ gsap, ScrollTrigger }) {
	useEffect(() => {
		const winH = window.innerHeight;
		const winW = window.innerWidth;
		if (winW > 767) {
			const BowlAnimTimeline = gsap.timeline({});

			BowlAnimTimeline.to(
				`.${styles.TextBoxes}`,
				{
					y: "0",
					x: "0",
					opacity: "1",
				},
				"first"
			);

			ScrollTrigger.create({
				trigger: `.${styles.SweetTaste}`,
				animation: BowlAnimTimeline,
				start: "top 90%",
				end: "+=" + winH * 0.8,
				pin: false,
				scrub: true,
				markers: false,
				// pinSpacing: false,
			});
		}
	}, []);
	return (
		<section className={`${styles.SweetTaste}`} id="Benefits">
			<div className="container">
				<div className={`${styles.FlexMain}`}>
					<div className={`${styles.TextBx} toTop`} data-scroll>
						<img
							src={BowlImg.src}
							alt="Bowl Image"
							className={`${styles.BowlImg} toTop visible_xs`}
							data-scroll
						/>
						<h2 className="text_50">
							The sweet taste
							<br className="hidden_xs" /> of no compromise
						</h2>
						<h5 className="text_40">सच्चाई की मिठास</h5>
						<p className="text_20">
							Gud is the natural, traditional sweetener our ancestors loved but today’s
							families forgot. But it’s never too late to switch back!
						</p>
					</div>
					<div className={`${styles.ImgBx}`}>
						<img
							src={BowlImg.src}
							alt="Bowl Image"
							className={`${styles.BowlImg} toTop hidden_xs`}
							data-scroll
						/>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14 f_w_s_b">
								Improves
								<br /> immunity
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14 f_w_s_b">
								Enhances
								<br /> metabolism
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14 f_w_s_b">
								Purifies
								<br /> blood
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14 f_w_s_b">
								Aids
								<br /> digestion
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14 f_w_s_b">
								Supports
								<br /> respiratory health
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14 f_w_s_b">
								Promotes
								<br /> menstrual comfort
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14 f_w_s_b">
								Boosts
								<br /> energy
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14 f_w_s_b">
								High in
								<br /> antioxidants
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14 f_w_s_b">
								Rich in
								<br /> minerals
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
