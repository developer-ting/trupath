// /* eslint-disable react/jsx-key */
// // MODULES //
// import { useEffect, useState } from "react";
// import Link from "next/link";
// // COMPONENTS //
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import MetaTags from "@/components/MetaTags";
// import BreadCrumb from "@/components/Breadcrumb";
// import ContentFromCms from "@/components/ContentFromCms";
// import Button from "@/components/Buttons/Button";
// import BlogCard from "@/components/BlogCard";

// // SECTIONS //

// // PLUGINS //
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
// 	Navigation,
// 	Pagination,
// 	Autoplay,
// 	Scrollbar,
// 	A11y,
// } from "swiper/modules";
// import ScrollOut from "scroll-out";
// // IMAGES //

// // STYLES //
// import styles from "@/styles/pages/BlogsInside.module.scss";

// // SERVICES //
// import { getBlogBySlug, getRelatedBlogsBySlug } from "@/services/BlogService";

// // IMAGES //
// import bottomWave from "../../public/img/home/wave_bottom_img.svg";
// import BlogBanner from "../../public/img/blogs-inside/BlogMainImg.jpg";
// import InsideImg from "../../public/img/blogs-inside/image.png";
// import linkedIn from "../../public/img/icons/social/linkedin.svg";
// import FB from "../../public/img/icons/social/fb.svg";
// import Twitter from "../../public/img/icons/social/twitter.svg";
// import Insta from "../../public/img/icons/social/insta.svg";
// import PrevArrow from "../../public/img/icons/PrevArrow.svg";
// import NextArrow from "../../public/img/icons/NextArrow.svg";

// // UTILS //

// /** Data Fetching */
// export async function getStaticPaths() {
// 	const [res] = await Promise.all([
// 		fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/allBlogsProducts`),
// 	]);

// 	const data = await res.json();

// 	console.log(data);
// 	// console.log("Generated paths data:", JSON.stringify(data, null, 2)); // Debugging

// 	const paths =
// 		data?.products?.map((item) => ({
// 			params: { slug: item?.slug || "" },
// 		})) || [];

// 	return {
// 		paths,
// 		fallback: "blocking",
// 	};
// }
// /** Fetch data */
// export async function getStaticProps({ params }) {
// 	try {
// 		// Fetch both APIs concurrently
// 		const [allBlogsData] = await Promise.all([
// 			fetch(
// 				`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/singleBlog?slug=${params.slug}`
// 			),
// 		]);
// 		// Parse the JSON responses
// 		const allBlogs = await allBlogsData.json();
// 		const [relatedRes] = await Promise.all([
// 			fetch(
// 				`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/relatedBlogs?category=${allBlogs.category.title}&slug=${params.slug}`
// 			),
// 		]);
// 		const relatedData = await relatedRes.json();
// 		console.log("Fetched relatedData: ", relatedData);
// 		// console.log("Fetched headerData:", headerData);
// 		// console.log("Fetched projectListings:", projectListings);

// 		return {
// 			props: {
// 				blogsInsideData: allBlogs || null,
// 				related: relatedData.categories?.[0].product.filter(
// 					(item) => item.slug != params.slug
// 				),
// 			},
// 			revalidate: 30,
// 		};
// 	} catch (error) {
// 		console.error("Error fetching data:", error);
// 		return {
// 			props: {
// 				blogsInsideData: null,
// 				related: null,
// 			},
// 			revalidate: 30,
// 		};
// 	}
// }

// /** Blogs Inside Page */
// export default function BlogsInside({ blogsInsideData, related }) {
// 	const [showHeader, setShowHeader] = useState(false);
// 	gsap.registerPlugin(ScrollTrigger);
// 	console.log(related, "  related");
// 	useEffect(() => {
// 		const headerClassRemove = document.querySelector(".header");
// 		headerClassRemove.classList.remove("hidden_header");
// 		ScrollOut({
// 			once: true,
// 		});
// 	}, []);
// 	const Settings = {
// 		modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
// 		spaceBetween: 20, // Adjust spacing between slides
// 		slidesPerView: 1, // Show 3 slides fully
// 		autoWidth: false,
// 		loop: false,
// 		pagination: {
// 			clickable: true,
// 			type: "progressbar",
// 			el: ".swiper-pagination-news",
// 		},
// 		observer: true,
// 		observeParents: true,
// 		navigation: {
// 			prevEl: "#customPrev",
// 			nextEl: "#customNext",
// 		},
// 		breakpoints: {
// 			767: {
// 				slidesPerView: 2, // Mobile screens
// 				spaceBetween: 10, // Adjust spacing for mobile if needed
// 			},
// 			991: {
// 				slidesPerView: 3, // iPad Air portrait mode (820px width)
// 			},
// 			1024: {
// 				slidesPerView: 3, // Tablet and desktop view
// 				spaceBetween: 30, // Increase spacing if needed for larger screens
// 			},
// 		},
// 	};
// 	const breadcrumbData = [
// 		{ name: "Blogs", link: "/blogs" },
// 		{
// 			name: blogsInsideData.productTitle,
// 			link: `${blogsInsideData.slug}`,
// 		},
// 	];

// 	return (
// 		<div>
// 			{/* Metatags */}
// 			{/* <MetaTags
// 				Title={`${blogsInsideData.title}`}
// 				Desc={""}
// 				Keywords={""}
// 				OgImg={""}
// 				Url={`/blogs/${blogsInsideData.slug}`}
// 			/> */}
// 			{/* Header */}
// 			<Header showHeader={showHeader} setShowHeader={setShowHeader} />

// 			{/* Page Content Starts */}
// 			<main className={`${styles.BlogsInsidePage} bg_tertiary`}>
// 				<BreadCrumb breadcrumbData={breadcrumbData} />
// 				<div className="container">
// 					<div className={`${styles.HeadBx}`}>
// 						<div className={`${styles.TitleBx}`}>
// 							<h1 className="text_50 color_primary">{blogsInsideData.productTitle}</h1>
// 							<div className={`${styles.DetailsStrip}`}>
// 								<div className={`${styles.Left}`}>
// 									<p className="text_18 color_primary">
// 										<span>{blogsInsideData.category.title}</span>
// 										<span>{blogsInsideData.date}</span>
// 										<span>{blogsInsideData.readTime} mins read</span>
// 									</p>
// 									{/* <div className={`${styles.Type}`}></div>
// 									<div className={`${styles.Date}`}>12th Sep, 2024</div>
// 									<div className={`${styles.Time}`}>5 mins read</div> */}
// 								</div>
// 								<div className={`${styles.SocialsBx}`}>
// 									<div className={`${styles.IconBx}`}>
// 										<a href="" rel="noreferrer">
// 											<img src={linkedIn.src} alt="Social Icons" />
// 										</a>
// 									</div>
// 									<div className={`${styles.IconBx}`}>
// 										<a
// 											href="https://x.com/the_trupath?s=21"
// 											rel="noreferrer"
// 											target="_blank"
// 										>
// 											<img src={Twitter.src} alt="Social Icons" />
// 										</a>
// 									</div>
// 									<div className={`${styles.IconBx}`}>
// 										<a
// 											href="https://www.facebook.com/profile.php?id=61566508024318&mibextid=LQQJ4d"
// 											rel="noreferrer"
// 											target="_blank"
// 										>
// 											<img src={FB.src} alt="Social Icons" />
// 										</a>
// 									</div>
// 									<div className={`${styles.IconBx}`}>
// 										<a
// 											href="https://www.instagram.com/the.trupath"
// 											rel="noreferrer"
// 											target="_blank"
// 										>
// 											<img src={Insta.src} alt="Social Icons" />
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className={`${styles.ImgBx}`}>
// 							<img src={blogsInsideData.banner.url} className="b_r_10" alt="" />
// 						</div>
// 					</div>
// 					{blogsInsideData.content.html && (
// 						<ContentFromCms>{blogsInsideData.content.html}</ContentFromCms>
// 					)}
// 					{related.length > 0 ? (
// 						<div className={`${styles.RelatedBlogs}`}>
// 							<div className={`${styles.Head} f_r_aj_between`}>
// 								<h2 className="text_50 color_primary">Related Blogs</h2>
// 								<Button color="primary" variant="filled">
// 									<Link href="/blogs">View All</Link>
// 								</Button>
// 							</div>
// 							<div className={`${styles.SliderMainBx}`}>
// 								<Swiper {...Settings}>
// 									{related.map((item, ind) => {
// 										return (
// 											<SwiperSlide>
// 												{console.log(item, " gggg")}
// 												<BlogCard
// 													key={ind}
// 													title={item?.productTitle}
// 													type={item.category.title}
// 													link={item?.externalLink}
// 													ytLink={item?.youtube}
// 													date={item.date}
// 													slug={item.slug}
// 												/>
// 											</SwiperSlide>
// 										);
// 									})}
// 								</Swiper>
// 								<div className={`${styles.items}`}>
// 									<div
// 										className={`${styles.progressBar} m_t_30 swiper-pagination-news`}
// 									></div>
// 									<div className={`${styles.arrowSection} f_w_a_j_center`}>
// 										<button className={`${styles.customPrev}`} id="customPrev">
// 											<img src={PrevArrow.src} alt="" />
// 										</button>
// 										<button className={styles.customNext} id="customNext">
// 											<img src={NextArrow.src} alt="" />
// 										</button>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					) : (
// 						""
// 					)}
// 				</div>
// 				<img
// 					src={bottomWave.src}
// 					className={`${styles.Waves} width_100`}
// 					alt="Wave"
// 				/>
// 			</main>
// 			{/* Page Content Ends */}

// 			{/* Footer */}
// 			<Footer />
// 		</div>
// 	);
// }
