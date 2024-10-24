/* eslint-disable require-jsdoc */
// MODULES //
import { useEffect, useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Buttons/Button";

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
	const [sidebarActive, setSidebarActive] = useState(false);
	const [showHeader, setShowHeader] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
		setSidebarActive(!sidebarActive);
	};

	/** Handle scroll direction */
	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		if (currentScrollY > lastScrollY) {
			setShowHeader(false); // Hide header when scrolling down
		} else {
			setShowHeader(true); // Show header when scrolling up
		}
		setLastScrollY(currentScrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	/** scrollToSection */
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (!element) return;

		const targetPosition =
			element.getBoundingClientRect().top + window.scrollY - 80;
		const startPosition = window.scrollY;
		const distance = targetPosition - startPosition;
		const duration = 600; // Duration in ms
		let startTime = null;

		const animation = (currentTime) => {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const progress = Math.min(timeElapsed / duration, 1);

			const ease = (t) => t * (2 - t);
			const easeProgress = ease(progress);

			window.scrollTo(0, startPosition + distance * easeProgress);

			if (timeElapsed < duration) {
				requestAnimationFrame(animation);
			}
		};

		requestAnimationFrame(animation);
	};

	return (
		<div
			className={`${styles.main_header} ${
				openSidebar ? styles.sidebar_opened : ""
			} ${showHeader ? "" : "hidden_header"}`}
		>
			<div className="container">
				<div className={styles.header_inside}>
					{/* Logo wrap */}
					<Link href="/">
						<div className={styles.image_wrap}>
							<Image src={Logo} alt="Logo" />
						</div>
					</Link>

					{/* Links Wrap */}
					<div className={styles.links_wrap}>
						<div className={styles.links}>
							<div
								onClick={() => {
									toggleSidebar();
									scrollToSection("About");
								}}
							>
								<div className={`${styles.link_title} text_16`}>About Us</div>
							</div>
						</div>
						<div className={styles.links}>
							<div
								onClick={() => {
									toggleSidebar();
									scrollToSection("Value");
								}}
							>
								<div className={`${styles.link_title} text_16`}>Value</div>
							</div>
						</div>
						<div className={styles.links}>
							<div
								onClick={() => {
									toggleSidebar();
									scrollToSection("Our Story");
								}}
							>
								<div className={`${styles.link_title} text_16`}>Our Story</div>
							</div>
						</div>
						<div className={styles.links}>
							<div
								onClick={() => {
									toggleSidebar();
									scrollToSection("Health Benefits");
								}}
							>
								<div className={`${styles.link_title} text_16`}>Health Benefits</div>
							</div>
						</div>
						<div className={styles.links}>
							<div
								onClick={() => {
									toggleSidebar();
									scrollToSection("Products");
								}}
							>
								<div className={`${styles.link_title} text_16`}>Products</div>
							</div>
						</div>
						<div className={styles.links}>
							<div
								onClick={() => {
									toggleSidebar();
									scrollToSection("Manufacturing");
								}}
							>
								<div className={`${styles.link_title} text_16`}>Manufacturing</div>
							</div>
						</div>
						<div className={styles.links}>
							<Link href="">
								<Button color="secondary" variant="filled">
									Contact
								</Button>
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
