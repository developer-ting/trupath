// MODULES //
import { useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Header.module.scss";

// IMAGES //
import Logo from "@/../public/img/home/logo.svg";
import Arrow from "@/../public/img/icons/arrow.svg";

// DATA //

/** Header Component */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};

	return (
		<div
			className={`${styles.main_header} ${
				openSidebar ? styles.sidebar_opened : ""
			} hidden_header`}
		>
			<div className="container">
				<div className={`${styles.header_inside}`}>
					{/* Logo wrap */}
					<Link href="/">
						<div className={styles.image_wrap}>
							<Image src={Logo} alt="Logo" />
						</div>
					</Link>

					{/* Links Wrap */}
					<div className={`${styles.links_wrap}`}>
						<div className={styles.links}>
							<Link href="">
								<div className={`${styles.link_title} text_16`}>About Us</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={`${styles.link_title} text_16`}>Value</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={`${styles.link_title} text_16`}>Our Story</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={`${styles.link_title} text_16`}>Health Benefits</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={`${styles.link_title} text_16`}>Products</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={`${styles.link_title} text_16`}>Manufacturing</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={`${styles.link_title} text_16`}>Recipes</div>
							</Link>
						</div>
					</div>

					{/* Hamburger icon visible in mobile only */}
					<div className={styles.hamburger_icon} onClick={toggleSidebar}>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
					</div>
				</div>
			</div>
		</div>
	);
}
