// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/Sugarcoating.module.scss";

// IMAGES //
import sugarcoatingBg from "../../public/img/home/sugarcoating_bg_img.png";
import chiti from "../../public/img/home/chiti.png";

// DATA //

/** HomeHero Section */
export default function Sugarcoating() {
	return <div className={`${styles.sugarcoating}`}>
		<div className={`${styles.sugarcoating_bg}`}>
			<img src={sugarcoatingBg.src} className="img-responsive" alt="sugarcoatingBg" />
		</div>
		<div className={`${styles.sugarcoating_info}`}>
			<div className={`${styles.title_sec}`}>
				<h2 className={`${styles.title} text_50`}>No more</h2>
				<h2 className={`${styles.title} text_50`}>
				sugarcoating <span><img src={chiti.src} className="img-responsive" alt="chiti" /></span> the truth</h2>
			</div>
			<div className={`${styles.para}`}>
				<p className="text_20">We all want the same thing - a healthy life without compromise. But the world’s been hooked to unhealthy sugar for far too long. It’s time to swap the nasty with the no-nonsense.</p>
			</div>
		</div>
	</div>;
}
