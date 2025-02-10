// MODULES //

// COMPONENTS //
import Button from "../components/Buttons/Button";

// SECTIONS //

// PLUGINS //// PLUGINS //
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

// UTILS //

// STYLES //
import styles from "@/styles/components/BlogCard.module.scss";

// IMAGES //
import Slide1 from "../../public/img/home/Slide1.jpg";

// DATA //

/** BlogCard Component */
export default function BlogCard({
	title,
	Keyno,
	type,
	link,
	slug,
	ytLink,
	date,
}) {
	return (
		<div className={`${styles.SliderItem} bg_fourth b_r_10`} key={Keyno}>
			{/* <a href={link ? link : ""}> */}
			<img src={Slide1.src} className="width_100 b_r_10" alt="Slide Image" />
			<div className={`${styles.ItemHd}`}>
				<p className={`${styles.Type} text_18 f_w_r color_primary`}>{type}</p>
				<p className={`${styles.Date} text_18 f_w_r color_primary`}>{date}</p>
			</div>
			<p className={`${styles.Title} text_20 f_w_m color_primary`}>{title}</p>
			{slug && (
				<div className={`${styles.Btn}`}>
					<Button
						isAnchor={true}
						hrefVal={`blogs/${slug}`}
						color="primary"
						variant="underline"
					>
						Read More
					</Button>
				</div>
			)}
			{link && (
				<div className={`${styles.Btn}`}>
					<Button
						isBlank={link ? true : false}
						isAnchor={true}
						hrefVal={link}
						color="primary"
						variant="underline"
					>
						Read More
					</Button>
				</div>
			)}

			<div className={`${styles.Btn}`}>
				{ytLink && (
					<LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgVideo]}>
						<a data-src={ytLink}>
							<Button color="primary" variant="underline">
								View More
							</Button>
						</a>
					</LightGallery>
				)}
			</div>
			{/* </a> */}
		</div>
	);
}
