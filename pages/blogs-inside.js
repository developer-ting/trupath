// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import BreadCrumb from "@/components/Breadcrumb";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/BlogsInside.module.scss";

// IMAGES //
import bottomWave from "../public/img/home/wave_bottom_img.svg";

// DATA //

/** Blogs Inside Page */
export default function BlogsInsidePage() {
	const breadcrumbData = [
		{ name: "Blogs" },
		{
			name: "Discover the Health Benefits of Jaggery!",
			link: "/blogs-inside",
		},
	];
	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Blogs Inside"}
				Desc={""}
				OgImg={""}
				Url={"/blogs-inside"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={styles.BlogsInsidePage}>
				<BreadCrumb breadcrumbData={breadcrumbData} />
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
