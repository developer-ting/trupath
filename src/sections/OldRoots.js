/* eslint-disable require-jsdoc */
// MODULES //
import { useState, useEffect } from "react";
import Link from "next/link";

// COMPONENTS //
import Button from "../components/Buttons/Button";

// SECTIONS //

// PLUGINS //
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// UTILS //

// STYLES //
import styles from "@/styles/sections/OldRoots.module.scss";

// IMAGES //
import Slide1 from "../../public/img/home/Slide1.jpg";
import PrevArrow from "../../public/img/icons/PrevArrow.svg";
import NextArrow from "../../public/img/icons/NextArrow.svg";

// DATA //

// SERVICES //
import { getAllBlogs } from "@/services/BlogService";

export const getStaticProps = async () => {
	const blogsList = await getAllBlogs();
	return { props: { blogsList }, revalidate: 60 };
};

/** OldRoots Section */
export default function OldRoots({ blogsList }) {
	/** slider Section */
	var settings = {
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: false,
		autoplay: false,
		pauseOnHover: false,
		speed: 1000,
		variableWidth: false,
		afterChange: (i) => {
			fillProgress(i + 1);
		},
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					//variableWidth: false,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					//variableWidth: false,
				},
			},
		],
		prevArrow: (
			<button className={`${styles.prevarrow} slick-arrow`}>
				<img src={PrevArrow.src} alt="arrow" />
			</button>
		),
		nextArrow: (
			<button className={`${styles.nextarrow} slick-arrow`}>
				<img src={NextArrow.src} alt="arrow" />
			</button>
		),
	};
	/** progress Section */
	const [progressWidth, setProgressWidth] = useState(0);
	useEffect(() => {
		fillProgress(1);
	}, []);
	/** progress Section */
	const fillProgress = (currInd) => {
		// console.log(currInd, " currInd");

		setProgressWidth((currInd / 4) * 100);
	};
	return (
		<section className={styles.OldRoots} id="Blogs">
			<div className="container">
				<div className={`${styles.Head} f_r_aj_between toTop`} data-scroll>
					<h2 className="text_50 color_primary">Path to true wellness</h2>
					<Button color="primary" variant="filled">
						<Link href="/blogs">View All</Link>
					</Button>
				</div>
				<div className={`${styles.SliderBox} toTop`} data-scroll>
					<Slider {...settings}>
						{blogsList.data.map((item, ind) => {
							return (
								<div className={`${styles.SliderItem} bg_primary b_r_10`} key={ind}>
									<img src={Slide1.src} className="width_100 b_r_10" alt="Slide Image" />
									<p className={`${styles.Type} text_18 f_w_r color_tertiary`}>
										{item?.categories}
									</p>
									<p className={`${styles.Title} text_20 f_w_m color_tertiary`}>
										{item?.productTitle}
									</p>
									{!item?.externalLink && (
										<div className={`${styles.Btn}`}>
											<a href={item?.slug}>
												<Button color="tertiary" variant="underline">
													Read More
												</Button>
											</a>
										</div>
									)}
									{item?.externalLink && (
										<div className={`${styles.Btn}`}>
											<LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgVideo]}>
												<div data-src={item?.externalLink}>
													<Button color="primary" variant="underline">
														View More
													</Button>
												</div>
											</LightGallery>
										</div>
									)}
								</div>
							);
						})}
					</Slider>
					<div className={`${styles.progress_div}`}>
						<div className={`${styles.progress_bar}`}>
							<div
								style={{ width: `${progressWidth}%` }}
								className={`${styles.color_div}`}
							></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
