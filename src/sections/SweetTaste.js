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
			start: "top center",
			end: "bottom center",
			pin: false,
			scrub: true,
			markers: false,
			// pinSpacing: false,
		});
	}, []);
	return (
		<section className={`${styles.SweetTaste}`}>
			<div className="container">
				<div className={`${styles.FlexMain}`}>
					<div className={`${styles.TextBx}`}>
						<h2 className="text_50">
							The sweet taste
							<br className="hidden_xs" /> of no compromise
						</h2>
						<h5 className="text_40">सच्ची की मिठास</h5>
						<p className="text_20">
							Gud is the natural, traditional sweetener that our ancestors loved but
							today’s world forgot. But it’s never too late to switch back!
						</p>
					</div>
					<div className={`${styles.ImgBx}`}>
						<img src={BowlImg.src} alt="Bowl Image" className={`${styles.BowlImg}`} />
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14">
								Improves
								<br /> immunity
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14">
								Enhances
								<br /> metabolism
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14">
								Detoxifies
								<br /> blood
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14">
								Aids
								<br /> digestion
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14">
								Supports
								<br /> respiratory health
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14">
								Promotes
								<br /> menstrual comfort
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14">
								Boosts
								<br /> energy
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14">
								High in
								<br /> antioxidants
							</p>
						</div>
						<div className={`${styles.TextBoxes} d_f`}>
							<img src={Tick.src} alt="Tick Image" />
							<p className="text_14">
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
