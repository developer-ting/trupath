// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/FieldsSec.module.scss";

// IMAGES //
import Quality from "../../public/img/home/quality.svg";
import Hygiene from "../../public/img/home/hygiene.svg";
import Supply from "../../public/img/home/supply.svg";

// DATA //

/** FieldsSec Section */
export default function FieldsSec() {
	return (
		<section className={styles.FieldsSec}>
			<div className="container">
				<div className={`${styles.FlexMain}`}>
					<div className={`${styles.TextBx}`}>
						<h2 className="text_50">
							From the fields to
							<br className="hidden_xs" /> our factory to you
						</h2>
						<h5 className="text_40">फसल से रसोई तक</h5>
						<p className="text_20">
							We take pride in manufacturing our products in-house at our
							state-of-the-art, fully automatic facility. This allows us to maintain
							stringent control over.
						</p>
						<p className="text_20">
							By cutting out intermediaries, we’re able to pass the cost savings
							directly to our customers!
						</p>
					</div>
					<div className={`${styles.ImgBx}`}>
						<div className={`${styles.FieldItem}`}>
							<div className={`${styles.ItemImg}`}>
								<img src={Quality.src} alt="Social Icons" className="width_100" />
							</div>
							<div className={`${styles.ItemTxt}`}>
								<p className="text_20 f_w_m">Quality</p>
								<p className="text_20">
									Ensuring our products meet the highest standards
								</p>
							</div>
						</div>
						<div className={`${styles.FieldItem}`}>
							<div className={`${styles.ItemImg}`}>
								<img src={Hygiene.src} alt="Social Icons" className="width_100" />
							</div>
							<div className={`${styles.ItemTxt}`}>
								<p className="text_20 f_w_m">Hygiene</p>
								<p className="text_20">
									Guaranteeing a clean and safe production environment
								</p>
							</div>
						</div>
						<div className={`${styles.FieldItem}`}>
							<div className={`${styles.ItemImg}`}>
								<img src={Supply.src} alt="Social Icons" className="width_100" />
							</div>
							<div className={`${styles.ItemTxt}`}>
								<p className="text_20 f_w_m">Supply</p>
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