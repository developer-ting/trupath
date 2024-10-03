// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //
import Logo from "../../public/img/footer_logo.svg";
import linkedIn from "../../public/img/icons/social/linkedin.svg";
import FB from "../../public/img/icons/social/fb.svg";
import Twitter from "../../public/img/icons/social/twitter.svg";
import Insta from "../../public/img/icons/social/insta.svg";
import MadeByTing from "../../public/img/icons/social/MadeByTing.svg";

// DATA //

/** Footer Component */
export default function Footer() {
	return (
		<footer className={`${styles.main_footer}`}>
			<div className="container">
				<div className={`${styles.footer_upper}`}>
					<div className={`${styles.LogoBx}`}>
						<img src={Logo.src} alt="Social Icons" />
					</div>
					<div className={`${styles.LogoBx}`}></div>
				</div>
				<div className={`${styles.footer_lower}`}>
					<div className={`${styles.CopyrightBx}`}>
						<p className="text_20">© {new Date().getFullYear()} trupath</p>
					</div>
					<div className={`${styles.SocialBx}`}>
						<div className={`${styles.IconBx}`}>
							<img src={linkedIn.src} alt="Social Icons" />
						</div>
						<div className={`${styles.IconBx}`}>
							<img src={Twitter.src} alt="Social Icons" />
						</div>
						<div className={`${styles.IconBx}`}>
							<img src={FB.src} alt="Social Icons" />
						</div>
						<div className={`${styles.IconBx}`}>
							<img src={Insta.src} alt="Social Icons" />
						</div>
					</div>
					<div className={`${styles.MadeByTing}`}>
						<div className={`${styles.IconBx}`}>
							<img src={MadeByTing.src} alt="Social Icons" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
