/* eslint-disable @next/next/no-img-element */
// MODULES //
import { useRef } from "react";

// COMPONENTS //
import Button from "@/components/Buttons/Button";

// SECTIONS //
import ContactForm from "../sections/ContactForm";

// PLUGINS //
import { useForm } from "react-hook-form";

// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //
import LocIcon from "../../public/img/icons/loc_pin.svg";
import MailIcon from "../../public/img/icons/email.svg";
import CallIcon from "../../public/img/icons/call.svg";
import Logo from "../../public/img/footer_logo.svg";
import linkedIn from "../../public/img/icons/social/linkedin.svg";
import FB from "../../public/img/icons/social/fb.svg";
import Twitter from "../../public/img/icons/social/twitter.svg";
import Insta from "../../public/img/icons/social/insta.svg";
import MadeByTing from "../../public/img/icons/social/MadeByTing.svg";

// DATA //

/** Footer Component */
export default function Footer() {
	const formRef = useRef();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });

	/** Function to handle submit */
	const onSubmit = async (data, e) => {
		// Write form submission codes here
	};
	return (
		<footer className={`${styles.main_footer}`}>
			<div className="container">
				<div className={`${styles.footer_upper}`}>
					<div className={`${styles.LogoBx}`}>
						<a href="" rel="noreferrer">
							<img src={Logo.src} alt="Social Icons" />
						</a>
					</div>
					<div className={`${styles.MainFlex}`}>
						<div className={`${styles.ContactDetails}`}>
							<h2 className="text_50">
								Connect with
								<br /> us anytime
							</h2>
							<div className={`${styles.DetailsBx}`}>
								<img src={LocIcon.src} alt="Location Icon" />
								<div className={`${styles.content}`}>
									<p className="text_20">
										203, Hallmark Business Plaza, Kala Nagar, Bandra East, Mumbai 400 051.
									</p>
								</div>
							</div>
							<div className={`${styles.DetailsBx}`}>
								<img src={MailIcon.src} alt="Mail Icon" />
								<div className={`${styles.content}`}>
									<p className="text_20">
										<a href="mailto:xyz@bluesapphirefoods.com">
											xyz@bluesapphirefoods.com
										</a>
									</p>
								</div>
							</div>
							<div className={`${styles.DetailsBx}`}>
								<img src={CallIcon.src} alt="Call Icon" />
								<div className={`${styles.content}`}>
									<p className="text_20">
										<a href="tel:+91 83695 54202">+91 83695 54202</a>{" "}
										<span className={`${styles.hidden_md}`}>|</span>{" "}
										<br className={`${styles.visible_md}`} />
										<a href="tel:+91 83695 54202">+91 83695 54202</a>
									</p>
								</div>
							</div>
						</div>
						<ContactForm />
					</div>
				</div>
				<div className={`${styles.footer_lower}`}>
					<div className={`${styles.CopyrightBx}`}>
						<p className="text_20">© {new Date().getFullYear()} trupath</p>
					</div>
					<div className={`${styles.SocialBx}`}>
						<div className={`${styles.IconBx}`}>
							<a href="" rel="noreferrer">
								<img src={linkedIn.src} alt="Social Icons" />
							</a>
						</div>
						<div className={`${styles.IconBx}`}>
							<a href="" rel="noreferrer">
								<img src={Twitter.src} alt="Social Icons" />
							</a>
						</div>
						<div className={`${styles.IconBx}`}>
							<a href="" rel="noreferrer">
								<img src={FB.src} alt="Social Icons" />
							</a>
						</div>
						<div className={`${styles.IconBx}`}>
							<a href="" rel="noreferrer">
								<img src={Insta.src} alt="Social Icons" />
							</a>
						</div>
					</div>
					<div className={`${styles.MadeByTing}`}>
						<div className={`${styles.IconBx}`}>
							<a href="https://www.ting.in/" rel="noreferrer">
								<img src={MadeByTing.src} alt="Social Icons" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
