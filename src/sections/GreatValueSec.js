// MODULES //
import React, { useState, useEffect, useRef } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Lottie from "lottie-web";

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
// import Wave from "../../public/img/home/waveNew.png";

// DATA //

/** GreatValueSec Section */
export default function GreatValueSec() {
	// const Wave = useRef();
	// useEffect(() => {
	// 	// Lottie
	// 	Lottie.loadAnimation({
	// 		container: Wave.current,
	// 		renderer: "svg",
	// 		loop: true,
	// 		autoplay: true,
	// 		animationData: require("../../public/img/home/json/Waves-2.json"),
	// 	});
	// }, []);
	return (
		<section className={styles.GreatValueSec} id="Contact">
			<div className="container">
				<h2 className="text_50 toTop" data-scroll>
					Great value. Great taste. Great health.
					<br className="hidden_xs" /> That’s trupath
				</h2>
				<h5 className="text_40 toTop" data-scroll>
					जिंदगी बनाओ गुड़ से मीठी
				</h5>
			</div>
			<div className="toTop" data-scroll>
				<Swiper
					modules={[Navigation, Autoplay, Pagination]}
					slidesPerView={1.2}
					spaceBetween={10}
					grabCursor={true}
					centeredSlides={true}
					speed={1000}
					autoplay={{ delay: 2000, disableOnInteraction: false }}
					loop={true}
					breakpoints={{
						768: {
							slidesPerView: 1.8,
							spaceBetween: 20,
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
			</div>

			{/* <div ref={Wave} className={`${styles.Waves} width_100`} alt="Wave"></div> */}
			{/* <img src={Wave.src} className={`${styles.Waves} width_100`} alt="Wave" /> */}
		</section>
	);
}
