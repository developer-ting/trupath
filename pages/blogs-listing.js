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

// STYLES //
import styles from "@/styles/pages/BlogsListing.module.scss";

// IMAGES //
import bottomWave from "../public/img/home/wave_bottom_img.svg";

// DATA //

/** Blogs Listing Page */
export default function BlogsListingPage() {
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
		{
			name: "Blogs",
			link: "/blogs-listing",
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
								<div className={`${styles.btn} ${styles.active} text_16 color_primary`}>
									Filter Articles
								</div>
								<div className={`${styles.btn} text_16 color_primary`}>Blogs</div>
								<div className={`${styles.btn} text_16 color_primary`}>Articles</div>
								<div className={`${styles.btn} text_16 color_primary`}>Videos</div>
								<div className={`${styles.btn} text_16 color_primary`}>Recipes</div>
							</div>
						</div>
						<div className={`${styles.GridBox}`}>
							{BlogList.map((item, ind) => {
								return (
									<BlogCard
										Keyno={ind}
										title={item.title}
										type={item.cardtype}
										link={item.link}
										date={item.date}
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
