// MODULES //
import React, { useState, useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// UTILS //

// STYLES //
import styles from "@/styles/sections/GreatValueSec.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// IMAGES //
import SliderImg1 from "../../public/img/home/image1.jpg";
import SliderImg2 from "../../public/img/home/image2.jpg";
import SliderImg3 from "../../public/img/home/image3.jpg";
import Wave from "../../public/img/home/wave.png";

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
				modules={[Navigation, Autoplay, Pagination]}
				slidesPerView={1.8}
				spaceBetween={20}
				grabCursor={true}
				centeredSlides={true}
				speed={1000}
				autoplay={{ delay: 2000, disableOnInteraction: false }}
				loop={true}
				breakpoints={{
					768: {
						slidesPerView: 1.2,
						spaceBetween: 10,
					},
				}}
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
			<img src={Wave.src} className={`${styles.Waves} width_100`} alt="Wave" />
		</section>
	);
}
