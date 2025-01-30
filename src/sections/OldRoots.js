/* eslint-disable require-jsdoc */
// MODULES //
import { useState, useEffect } from "react";
import Link from "next/link";

// COMPONENTS //
import Button from "../components/Buttons/Button";
import BlogCard from "@/components/BlogCard";

// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	Autoplay,
	Scrollbar,
	A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// UTILS //
import StrapiImage from "@/utils/StrapiImage";

// STYLES //
import styles from "@/styles/sections/OldRoots.module.scss";

// IMAGES //
import Slide1 from "../../public/img/home/Slide1.jpg";
import PrevArrow from "../../public/img/icons/PrevArrow.svg";
import NextArrow from "../../public/img/icons/NextArrow.svg";

// DATA //

/** OldRoots Section */
export default function OldRoots({ blogsList }) {
	const Settings = {
		modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
		slidesPerView: 1,
		spaceBetween: 10,
		grabCursor: true,
		speed: 1000,
		autoplay: true,
		loop: true,
		pagination: {
			clickable: true,
			type: "progressbar",
			el: ".swiper-pagination-news",
		},
		observer: true,
		observeParents: true,
		navigation: {
			prevEl: "#customPrev",
			nextEl: "#customNext",
		},
		breakpoints: {
			767: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
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
					<Swiper {...Settings}>
						{blogsList.data.map((item, ind) => {
							return (
								<SwiperSlide key={ind}>
									<BlogCard
										title={item?.productTitle}
										type={item?.categories}
										link={item?.slug}
										date={item?.date}
										thumbnail={StrapiImage(item?.thumbnail)?.url}
										externalLink={item?.externalLink}
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
					<div className={`${styles.items}`}>
						<div
							className={`${styles.progressBar} m_t_30 swiper-pagination-news`}
						></div>
						<div className={`${styles.arrowSection} f_w_a_j_center`}>
							<button className={`${styles.customPrev}`} id="customPrev">
								<img src={PrevArrow.src} alt="" />
							</button>
							<button className={styles.customNext} id="customNext">
								<img src={NextArrow.src} alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
