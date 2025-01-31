/* eslint-disable require-jsdoc */
/* eslint-disable react/jsx-key */
// MODULES //
import { useEffect, useState } from "react";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import Button from "@/components/Buttons/Button";
import BlogCard from "@/components/BlogCard";
import BreadCrumb from "@/components/Breadcrumb";

// SECTIONS //

// PLUGINS //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollOut from "scroll-out";

// UTILS //
import StrapiImage from "@/utils/StrapiImage";

// STYLES //
import styles from "@/styles/pages/BlogsListing.module.scss";

// IMAGES //
import bottomWave from "../../public/img/home/wave_bottom_img.svg";
import Slide1 from "../../public/img/home/Slide1.jpg";

// DATA //

// SERVICES //
import { getAllBlogs, getAllBlogsCategories } from "@/services/BlogService";

export const getStaticProps = async () => {
	const blogsList = await getAllBlogs();
	const blogCategoriesList = await getAllBlogsCategories();
	return { props: { blogsList, blogCategoriesList }, revalidate: 60 };
};

/** Blogs Listing Page */
export default function BlogsListingPage({ blogsList, blogCategoriesList }) {
	console.log(blogsList, "blogsList");

	const [showHeader, setShowHeader] = useState(false);
	const [selectCategory, setSelectCategory] = useState(
		blogCategoriesList.data[0].title
	);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const headerClassRemove = document.querySelector(".header");
		headerClassRemove.classList.remove("hidden_header");
		ScrollOut({
			once: true,
		});
	}, []);
	const breadcrumbData = [
		{
			name: "Blogs",
			link: "/blogs",
		},
	];
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Blogs Listing"}
				Desc={""}
				OgImg={""}
				Url={"/blogs-listing"}
			/>

			{/* Header */}
			<Header showHeader={showHeader} setShowHeader={setShowHeader} />

			{/* Page Content starts here */}
			<main className={`${styles.BlogsListingPage} bg_tertiary`}>
				<BreadCrumb breadcrumbData={breadcrumbData} />
				<div className="container">
					<section className={`${styles.BlogsListingMain}`}>
						<div className={`${styles.Head}`}>
							<h2 className="text_50 color_primary">Discover what&#39;s Gud</h2>
							<p className="text_20 color_primary">
								Browse through our curated collection of blogs with insights,
								<br className="hidden_xs" /> tips, and stories for a better you.
							</p>
							<div className={`${styles.Tabs}`}>
								{blogCategoriesList.data?.map((item) => {
									return (
										<div
											className={`${styles.btn} ${
												selectCategory === item.title && styles.active
											} text_16 color_primary`}
											key={item.title}
											onClick={() => setSelectCategory(item.title)}
										>
											{item.title}
										</div>
									);
								})}
							</div>
						</div>
						<div className={`${styles.GridBox}`}>
							{blogsList.data
								?.filter((filItem) =>
									filItem.categories.some((item2) => item2.title === selectCategory)
								)
								.map((item, ind) => {
									return (
										<BlogCard
											Keyno={ind}
											title={item?.productTitle}
											type={item?.categories}
											link={item?.slug}
											date={item?.date}
											thumbnail={StrapiImage(item?.thumbnail)?.url}
											externalLink={item?.externalLink}
										/>
									);
								})}
						</div>
						<div className={`${styles.ViewBtn}`}>
							<Button color="secondary" variant="filled">
								View All
							</Button>
						</div>
					</section>
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
