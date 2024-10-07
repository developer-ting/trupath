// MODULES //
import React, { useState, useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// UTILS //

// STYLES //
import styles from "@/styles/sections/GreatValueSec.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMAGES //
import SliderImg1 from "../../public/img/home/image1.jpg";
import SliderImg2 from "../../public/img/home/image2.jpg";
import SliderImg3 from "../../public/img/home/image3.jpg";

// DATA //

/** GreatValueSec Section */
export default function GreatValueSec() {
	return (
		<section className={styles.GreatValueSec}>
			<div className="container">
				<h2 className="text_50">
					Great value. Great taste. Great health.
					<br /> That’s trupath
				</h2>
				<h5 className="text_40">जिंदगी बनाओ गुड़ से मीठी</h5>
			</div>
			<Swiper
				modules={[Navigation]}
				slidesPerView={1.8}
				spaceBetween={20}
				grabCursor={true}
				centeredSlides={true}
				speed={500}
				loop={true}
			>
				<SwiperSlide>
					<img src={SliderImg1.src} className="width_100" alt="Slider Images" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={SliderImg2.src} className="width_100" alt="Slider Images" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={SliderImg3.src} className="width_100" alt="Slider Images" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={SliderImg1.src} className="width_100" alt="Slider Images" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={SliderImg2.src} className="width_100" alt="Slider Images" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={SliderImg3.src} className="width_100" alt="Slider Images" />
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
