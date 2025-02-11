// /* eslint-disable react/no-unescaped-entities */
// // MODULES //
// import { useEffect, useState } from "react";
// // COMPONENTS //
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import MetaTags from "@/components/MetaTags";
// import Button from "@/components/Buttons/Button";
// import BlogCard from "@/components/BlogCard";
// import BreadCrumb from "@/components/Breadcrumb";
// // import DummyComponent from "@/components/DummyComponent";

// // SECTIONS //

// // PLUGINS //
// import { request, gql } from "graphql-request";
// import ScrollOut from "scroll-out";
// // IMAGES //
// import bottomWave from "../../public/img/home/wave_bottom_img.svg";
// // STYLES //
// import styles from "@/styles/pages/Blogs.module.scss";

// // SERVICES //

// // DATA //
// // import dummyData from "@/data/tempStrapiData.json";

// /** Fetch data */
// export async function getStaticProps() {
// 	try {
// 		// Fetch both APIs concurrently
// 		const [allBlogsData] = await Promise.all([
// 			fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/allBlogs`),
// 		]);

// 		// Parse the JSON responses
// 		const allBlogs = await allBlogsData.json();

// 		// console.log("Fetched headerData:", headerData);
// 		// console.log("Fetched projectListings:", projectListings);

// 		return {
// 			props: {
// 				allBlogs: allBlogs || null,
// 			},
// 			revalidate: 30,
// 		};
// 	} catch (error) {
// 		console.error("Error fetching data:", error);
// 		return {
// 			props: {
// 				allBlogs: null,
// 			},
// 			revalidate: 30,
// 		};
// 	}
// }

// /** Blogs Page */
// export default function Blogs({ allBlogs }) {
// 	const [showHeader, setShowHeader] = useState(false);
// 	const [data, setData] = useState();
// 	const [activeInd, setActiveInd] = useState(0);
// 	/** Open sidebar on click of hamburger */
// 	const activeTabs = (ind) => {
// 		setActiveInd(ind);
// 	};

// 	useEffect(() => {
// 		const headerClassRemove = document.querySelector(".header");
// 		headerClassRemove.classList.remove("hidden_header");
// 		ScrollOut({
// 			once: true,
// 		});
// 	}, []);
// 	const breadcrumbData = [
// 		{
// 			name: "Blogs",
// 			link: "/blogs",
// 		},
// 	];
// 	const BlogList = [
// 		{
// 			cardtype: "Blog",
// 			date: "12th Sep, 2024",
// 			title: "Discover the Health Benefits of Jaggery!",
// 			link: "/blogs-inside",
// 		},
// 		{
// 			cardtype: "Blog",
// 			date: "12th Sep, 2024",
// 			title: "Discover the Health Benefits of Jaggery!",
// 			link: "/blogs-inside",
// 		},
// 		{
// 			cardtype: "Blog3",
// 			date: "12th Sep, 2024",
// 			title: "Discover the Health Bene",
// 			link: "/blogs-inside",
// 		},
// 		{
// 			cardtype: "Blog",
// 			date: "12th Sep, 2024",
// 			title: "Discover the Health Benefits of Jaggery!",
// 			link: "/blogs-inside",
// 		},
// 		{
// 			cardtype: "Blog3",
// 			date: "12th Sep, 2024",
// 			title: "Discover the Health Bene",
// 			link: "/blogs-inside",
// 		},
// 	];
// 	const productData = allBlogs.categories[activeInd].product;
// 	// When fetching data from strapi use blogsData directly instead of dummyData,
// 	// Here dummyData is used just for demonstration purpose
// 	// console.log(productData, "  productData");

// 	return (
// 		<div>
// 			{/* Metatags */}
// 			<MetaTags
// 				Title={"Blogs Listing"}
// 				Desc={""}
// 				OgImg={""}
// 				Url={"/blogs-listing"}
// 			/>

// 			{/* Header */}
// 			<Header showHeader={showHeader} setShowHeader={setShowHeader} />

// 			{/* Page Content Starts */}
// 			<main className={`${styles.BlogsListingPage} bg_tertiary `}>
// 				<BreadCrumb breadcrumbData={breadcrumbData} />
// 				<div className="container">
// 					<section className={`${styles.BlogsListingMain}`}>
// 						<div className={`${styles.Head}`}>
// 							<h2 className="text_50 color_primary">Discover what&#39;s Gud</h2>
// 							<p className="text_20 color_primary">
// 								Browse through our curated collection of blogs with insights,
// 								<br className="hidden_xs" /> tips, and stories for a better you.
// 							</p>
// 							<div className={`${styles.Tabs}`}>
// 								{allBlogs.categories.map((item, ind) => {
// 									return (
// 										<div
// 											className={`${styles.btn} ${
// 												activeInd === ind ? styles.active : ""
// 											} text_16 color_primary`}
// 											key={ind}
// 											onClick={() => activeTabs(ind)}
// 										>
// 											{item.title}
// 										</div>
// 									);
// 								})}
// 							</div>
// 						</div>

// 						<div className={styles.GridBox}>
// 							{productData.map((item, ind) => (
// 								<>
// 									<BlogCard
// 										key={ind}
// 										title={item?.productTitle}
// 										type={allBlogs.categories[activeInd].title}
// 										link={item?.externalLink}
// 										ytLink={item?.youtube}
// 										date={item.date}
// 										slug={item.slug}
// 									/>
// 								</>
// 							))}
// 						</div>
// 						<div className={`${styles.ViewBtn}`}>
// 							<Button hrefVal="/blogs" color="secondary" variant="filled">
// 								View All
// 							</Button>
// 						</div>
// 					</section>
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
import React from "react";
/** Data Fetching */
const Blogs = () => {
	return <div>Blogs</div>;
};

export default Blogs;
