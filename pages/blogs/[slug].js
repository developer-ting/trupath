/* eslint-disable require-jsdoc */
/* eslint-disable react/jsx-key */
// MODULES //
import { useEffect, useState } from "react";
import Link from "next/link";
import parse from "html-react-parser";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import BreadCrumb from "@/components/Breadcrumb";
import ContentFromCms from "@/components/ContentFromCms";
import Button from "@/components/Buttons/Button";
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollOut from "scroll-out";

// UTILS //
import StrapiImage from "@/utils/StrapiImage";

// STYLES //
import styles from "@/styles/pages/BlogsInside.module.scss";

// IMAGES //
import bottomWave from "../../public/img/home/wave_bottom_img.svg";
import BlogBanner from "../../public/img/blogs-inside/BlogMainImg.jpg";
import InsideImg from "../../public/img/blogs-inside/image.png";
import linkedIn from "../../public/img/icons/social/linkedin.svg";
import FB from "../../public/img/icons/social/fb.svg";
import Twitter from "../../public/img/icons/social/twitter.svg";
import Insta from "../../public/img/icons/social/insta.svg";
import PrevArrow from "../../public/img/icons/PrevArrow.svg";
import NextArrow from "../../public/img/icons/NextArrow.svg";

// DATA //

// SERVICES //
import {
	getAllBlogs,
	getBlogBySlug,
	getRelatedBlogsBySlug,
} from "@/services/BlogService";

// UTILS //

/** Data Fetching Paths*/
export async function getStaticPaths() {
	const blogsList = await getAllBlogs();

	const paths = blogsList.data.map((item) => {
		return {
			params: { slug: item.slug },
		};
	});
	return {
		paths,
		fallback: true,
	};
}

/** Data Fetching */
export async function getStaticProps({ params }) {
	const blogsList = await getAllBlogs();
	// API call to get Current Blog
	const blogsInsideData = await getBlogBySlug(params.slug);
	// // API call to get Related Blogs
	// const relatedBlogData = await getRelatedBlogsBySlug(params.slug);

	return {
		props: {
			blogsInsideData: blogsInsideData?.data?.[0],
			blogsList,
			// relatedBlogData: relatedBlogData.data,
		}, // will be passed to the page component as props
		revalidate: 60,
	};
}

/** Blogs Inside Page */
export default function BlogsInsidePage({ blogsInsideData, blogsList }) {
	console.log(blogsInsideData, "blogsInsideData");

	const [showHeader, setShowHeader] = useState(false);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const headerClassRemove = document.querySelector(".header");
		headerClassRemove.classList.remove("hidden_header");
		ScrollOut({
			once: true,
		});
	}, []);
	const breadcrumbData = [
		{ name: "Blogs", link: "/blogs" },
		{
			name: blogsInsideData?.productTitle,
			link: `/blogs/${blogsInsideData?.slug}`,
		},
	];
	const BlogList = [
		{
			cardtype: "Blog",
			date: "12th Sep, 2024",
			title: "Discover the Health Benefits of Jaggery!",
			link: "",
		},
		{
			cardtype: "Blog",
			date: "12th Sep, 2024",
			title: "Discover the Health Benefits of Jaggery!",
			link: "",
		},
		{
			cardtype: "Blog3",
			date: "12th Sep, 2024",
			title: "Discover the Health Bene",
			link: "",
		},
		{
			cardtype: "Blog",
			date: "12th Sep, 2024",
			title: "Discover the Health Benefits of Jaggery!",
			link: "",
		},
		{
			cardtype: "Blog3",
			date: "12th Sep, 2024",
			title: "Discover the Health Bene",
			link: "",
		},
	];
	const Settings = {
		modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
		spaceBetween: 20, // Adjust spacing between slides
		slidesPerView: 1, // Show 3 slides fully
		autoWidth: false,
		loop: false,
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
				slidesPerView: 2, // Mobile screens
				spaceBetween: 10, // Adjust spacing for mobile if needed
			},
			991: {
				slidesPerView: 3, // iPad Air portrait mode (820px width)
			},
			1024: {
				slidesPerView: 3, // Tablet and desktop view
				spaceBetween: 30, // Increase spacing if needed for larger screens
			},
		},
	};

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Blogs Inside"}
				Desc={""}
				OgImg={""}
				Url={"/blogs/blogs-inside"}
			/>

			{/* Header */}
			<Header showHeader={showHeader} setShowHeader={setShowHeader} />

			{/* Page Content starts here */}
			<main className={`${styles.BlogsInsidePage} bg_tertiary`}>
				<BreadCrumb breadcrumbData={breadcrumbData} />
				<div className="container">
					<div className={`${styles.HeadBx}`}>
						<div className={`${styles.TitleBx}`}>
							<h1 className="text_50 color_primary">
								{blogsInsideData?.productTitle}
							</h1>
							<div className={`${styles.DetailsStrip}`}>
								<div className={`${styles.Left}`}>
									<p className="text_18 color_primary">
										{/* <span>{blogsInsideData?.type}</span> */}
										{blogsInsideData?.categories.map((item) => (
											<span key={item.title}>{item.title}</span>
										))}
										<span>{blogsInsideData?.date}</span>
										<span>{blogsInsideData?.readTime}</span>
									</p>
									{/* <div className={`${styles.Type}`}></div>
									<div className={`${styles.Date}`}>12th Sep, 2024</div>
									<div className={`${styles.Time}`}>5 mins read</div> */}
								</div>
								<div className={`${styles.SocialsBx}`}>
									<div className={`${styles.IconBx}`}>
										<a href="" rel="noreferrer">
											<img src={linkedIn.src} alt="Social Icons" />
										</a>
									</div>
									<div className={`${styles.IconBx}`}>
										<a
											href="https://x.com/the_trupath?s=21"
											rel="noreferrer"
											target="_blank"
										>
											<img src={Twitter.src} alt="Social Icons" />
										</a>
									</div>
									<div className={`${styles.IconBx}`}>
										<a
											href="https://www.facebook.com/profile.php?id=61566508024318&mibextid=LQQJ4d"
											rel="noreferrer"
											target="_blank"
										>
											<img src={FB.src} alt="Social Icons" />
										</a>
									</div>
									<div className={`${styles.IconBx}`}>
										<a
											href="https://www.instagram.com/the.trupath"
											rel="noreferrer"
											target="_blank"
										>
											<img src={Insta.src} alt="Social Icons" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.ImgBx}`}>
							<img
								src={StrapiImage(blogsInsideData?.banner)?.url}
								className="b_r_10"
								alt=""
							/>
						</div>
					</div>
					<ContentFromCms>{blogsInsideData?.content}</ContentFromCms>

					<div className={`${styles.RelatedBlogs}`}>
						<div className={`${styles.Head} f_r_aj_between`}>
							<h2 className="text_50 color_primary">Related Blogs</h2>
							<Button color="primary" variant="filled">
								<Link href="/blogs">View All</Link>
							</Button>
						</div>
						<div className={`${styles.SliderMainBx}`}>
							<Swiper {...Settings}>
								{/* {BlogList.map((item, ind) => {
									return (
										<SwiperSlide>
											<BlogCard
												Keyno={ind}
												title={item.title}
												type={item.cardtype}
												link={item.link}
												date={item.date}
											/>
										</SwiperSlide>
									);
								})} */}

								{blogsList?.data
									.filter((filitem) => filitem.slug != blogsInsideData?.slug)
									.map((item, ind) => {
										return (
											<SwiperSlide>
												<BlogCard
													Keyno={ind}
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
				</div>
				<img
					src={bottomWave.src}
					className={`${styles.Waves} width_100`}
					alt="Wave"
				/>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
