// MODULES //

// COMPONENTS //
import Button from "../components/Buttons/Button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/BlogCard.module.scss";

// IMAGES //
import Slide1 from "../../public/img/home/Slide1.jpg";

// DATA //

/** BlogCard Component */
export default function BlogCard({ title, Keyno, type, link, date }) {
	return (
		<div className={`${styles.SliderItem} bg_fourth b_r_10`} key={Keyno}>
			<a href={link}>
				<img src={Slide1.src} className="width_100 b_r_10" alt="Slide Image" />
				<div className={`${styles.ItemHd}`}>
					<p className={`${styles.Type} text_18 f_w_r color_primary`}>{type}</p>
					<p className={`${styles.Date} text_18 f_w_r color_primary`}>{date}</p>
				</div>
				<p className={`${styles.Title} text_20 f_w_m color_primary`}>{title}</p>
				<div className={`${styles.Btn}`}>
					<Button color="primary" variant="underline">
						Read More
					</Button>
				</div>
			</a>
		</div>
	);
}
