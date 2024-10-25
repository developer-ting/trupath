// MODULES //
import { useState, useEffect } from "react";

// COMPONENTS //
import Button from "../components/Buttons/Button";

// SECTIONS //

// PLUGINS //
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

/** OldRoots Section */
export default function OldRoots() {
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
		<section className={styles.OldRoots} id="Manufacturing">
			<div className="container">
				<div className={`${styles.Head} f_r_aj_between toTop`} data-scroll>
					<h2 className="text_50 color_primary">Old roots for new relishes</h2>
					<Button color="primary" variant="filled">
						View All
					</Button>
				</div>
				<div className={`${styles.SliderBox} toTop`} data-scroll>
					<Slider {...settings}>
						<div className={`${styles.SliderItem} bg_primary b_r_10`}>
							<img src={Slide1.src} className="width_100 b_r_10" alt="Slide Image" />
							<p className={`${styles.Type} text_18 f_w_r color_tertiary`}>Blog</p>
							<p className={`${styles.Title} text_20 f_w_m color_tertiary`}>
								Discover the Health Benefits of Jaggery!
							</p>
							<div className={`${styles.Btn}`}>
								<Button color="tertiary" variant="underline">
									Read More
								</Button>
							</div>
						</div>
						<div className={`${styles.SliderItem} bg_secondary b_r_10`}>
							<img src={Slide1.src} className="width_100 b_r_10" alt="Slide Image" />
							<p className={`${styles.Type} text_18 f_w_r color_tertiary`}>Blog</p>
							<p className={`${styles.Title} text_20 f_w_m color_tertiary`}>
								Discover the Health Benefits of Jaggery!
							</p>
							<div className={`${styles.Btn}`}>
								<Button color="tertiary" variant="underline">
									Read More
								</Button>
							</div>
						</div>
						<div className={`${styles.SliderItem} bg_fourth b_r_10`}>
							<img src={Slide1.src} className="width_100 b_r_10" alt="Slide Image" />
							<p className={`${styles.Type} text_18 f_w_r color_primary`}>Blog</p>
							<p className={`${styles.Title} text_20 f_w_m color_primary`}>
								Discover the Health Benefits of Jaggery!
							</p>
							<div className={`${styles.Btn}`}>
								<Button color="primary" variant="underline">
									Read More
								</Button>
							</div>
						</div>
						<div className={`${styles.SliderItem} bg_primary b_r_10`}>
							<img src={Slide1.src} className="width_100 b_r_10" alt="Slide Image" />
							<p className={`${styles.Type} text_18 f_w_r color_tertiary`}>Blog</p>
							<p className={`${styles.Title} text_20 f_w_m color_tertiary`}>
								Discover the Health Benefits of Jaggery!
							</p>
							<div className={`${styles.Btn}`}>
								<Button color="tertiary" variant="underline">
									Read More
								</Button>
							</div>
						</div>
						<div className={`${styles.SliderItem} bg_secondary b_r_10`}>
							<img src={Slide1.src} className="width_100 b_r_10" alt="Slide Image" />
							<p className={`${styles.Type} text_18 f_w_r color_tertiary`}>Blog</p>
							<p className={`${styles.Title} text_20 f_w_m color_tertiary`}>
								Discover the Health Benefits of Jaggery!
							</p>
							<div className={`${styles.Btn}`}>
								<Button color="tertiary" variant="underline">
									Read More
								</Button>
							</div>
						</div>
						<div className={`${styles.SliderItem} bg_fourth b_r_10`}>
							<img src={Slide1.src} className="width_100 b_r_10" alt="Slide Image" />
							<p className={`${styles.Type} text_18 f_w_r color_primary`}>Blog</p>
							<p className={`${styles.Title} text_20 f_w_m color_primary`}>
								Discover the Health Benefits of Jaggery!
							</p>
							<div className={`${styles.Btn}`}>
								<Button color="primary" variant="underline">
									Read More
								</Button>
							</div>
						</div>
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
