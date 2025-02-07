/* eslint-disable react/no-unescaped-entities */
// MODULES //
import { useEffect, useState } from "react";
// COMPONENTS //
import MetaTags from "@/components/MetaTags";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import DummyComponent from "@/components/DummyComponent";

// SECTIONS //

// PLUGINS //
import { request, gql } from "graphql-request";
// IMAGES //

// STYLES //
import styles from "@/styles/pages/Blogs.module.scss";

// SERVICES //
import { getAllBlogs } from "@/services/BlogService";

// DATA //
import dummyData from "@/data/tempStrapiData.json";

/** Fetch data */
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
// 				allBlogs: allBlogs.allBlogs || null,
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

/** Blogs Page */
export default function Blogs({ allBlogs }) {
	const [data, setData] = useState();
	// When fetching data from strapi use blogsData directly instead of dummyData,
	// Here dummyData is used just for demonstration purpose

	// console.log(allBlogs, "  data");

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Blogs"}
				Desc={""}
				Keywords={""}
				OgImg={""}
				Url={"/blogs"}
			/>
			{/* Header */}
			<Header />

			{/* Page Content Starts */}
			<main className={`${styles.blogs_page}`}>
				<div className="section_spacing">
					<div className="container">
						{/* <div className={`${styles.blog_wrap}`}>
							{dummyData.map((item, index) => {
								return (
									<DummyComponent
										key={item.attributes.title + index}
										title={item.attributes.title}
										desc={item.attributes.desc}
										thumbImage={item.attributes.thumbImage}
									/>
								);
							})}
						</div> */}
					</div>
				</div>
			</main>
			{/* Page Content Ends */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
