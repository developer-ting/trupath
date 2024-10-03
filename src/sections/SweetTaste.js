// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/SweetTaste.module.scss";

// IMAGES //
import BowlImg from "../../public/img/home/BowlImg.png";

// DATA //

/** SweetTaste Section */
export default function SweetTaste() {
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
						<img src={BowlImg.src} alt="Social Icons" className="width_100" />
					</div>
				</div>
			</div>
		</section>
	);
}
