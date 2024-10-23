// MODULES //
import React, { useState } from "react";

// COMPONENTS //
import Button from "../components/Buttons/Button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/ProductSec.module.scss";

// IMAGES //
import Download from "../../public/img/home/download.svg";
import Hand from "../../public/img/home/hand2.png";
import Sugarcane1 from "../../public/img/home/Sugarcane1.png";
import Sugarcane2 from "../../public/img/home/Sugarcane2.png";
import Product1 from "../../public/img/home/Product1.png";
import Product2 from "../../public/img/home/Product2.png";
import Product3 from "../../public/img/home/Product3.png";
import Shadow from "../../public/img/home/Shadow.png";
import Flipkart from "../../public/img/home/Flipkart.svg";
import Amazon from "../../public/img/home/Amazon.svg";
import BB from "../../public/img/home/bb_logo.svg";
import knoMore from "../../public/img/home/Product_Marquee.png";

// DATA //

/** ProductSec Section */
export default function ProductSec() {
	return (
		<section className={styles.ProductSec}>
			<img className={`${styles.Hand}`} src={Hand.src} alt="" />
			<img className={`${styles.Sugarcane1}`} src={Sugarcane1.src} alt="" />
			<img className={`${styles.Sugarcane2}`} src={Sugarcane2.src} alt="" />
			<div className={`${styles.MainSec}`}>
				<h2 className="text_50">
					Pick a pack - one for the pantry,
					<br /> one on-the-go
				</h2>
				{/* <a href="" rel="noreferrer" className={`${styles.Download} text_16`}>
					Download Catalogue
					<img src={Download.src} alt="Download Icon" />
				</a> */}
				<div className="container">
					<div className={`${styles.GridBox}`}>
						{/* <div className={`${styles.GridItem}`}>
							<div className={`${styles.script_btn}`}>
								<a className={styles.ProductItem} href="" target="" rel="noreferrer">
									<span className={styles.span_outer}>
										<span className={styles.span_inner}>
											<img src={Product1.src} className={`${styles.btn_arrow}`} />
										</span>
									</span>
									<img
										src={knoMore.src}
										className={styles.knoMoreImg}
										alt="right arrow"
									/>
									<div className={`${styles.Btn}`}>
										<Button color="primary" variant="filled">
											Buy Now
										</Button>
									</div>
								</a>
							</div>
							<div className={`${styles.Shadow}`}>
								<img
									src={Shadow.src}
									alt="Jaggery Powder"
									className={`${styles.hovered_image}`}
								/>
							</div>
						</div> */}
						<div className={`${styles.GridItem}`}>
							<div className={`${styles.script_btn}`}>
								<a className={styles.ProductItem} href="" target="" rel="noreferrer">
									<span className={styles.span_outer}>
										<span className={styles.span_inner}>
											<img src={Product2.src} className={`${styles.btn_arrow}`} />
										</span>
									</span>
									<img
										src={knoMore.src}
										className={styles.knoMoreImg}
										alt="right arrow"
									/>
									{/* <div className={`${styles.Btn}`}>
										<Button color="primary" variant="filled">
											Buy Now
										</Button>
									</div> */}
								</a>
							</div>
							<div className={`${styles.Shadow}`}>
								<img
									src={Shadow.src}
									alt="Jaggery Powder"
									className={`${styles.hovered_image}`}
								/>
							</div>
						</div>
						{/* <div className={`${styles.GridItem}`}>
							<div className={`${styles.script_btn}`}>
								<a className={styles.ProductItem} href="" target="" rel="noreferrer">
									<span className={styles.span_outer}>
										<span className={styles.span_inner}>
											<img src={Product3.src} className={`${styles.btn_arrow}`} />
										</span>
									</span>
									<img
										src={knoMore.src}
										className={styles.knoMoreImg}
										alt="right arrow"
									/>
									<div className={`${styles.Btn}`}>
										<Button color="primary" variant="filled">
											Buy Now
										</Button>
									</div>
								</a>
							</div>
							<div className={`${styles.Shadow}`}>
								<img
									src={Shadow.src}
									alt="Jaggery Powder"
									className={`${styles.hovered_image}`}
								/>
							</div>
						</div> */}
					</div>
					<div className={`${styles.ShopMain}`}>
						<p className="text_18 color_primary">Order now at</p>
						<div className={`${styles.ShopBox}`}>
							<div className={`${styles.ShopItem}`}>
								<a href="">
									<img src={Flipkart.src} alt="Flipkart Logo" />
								</a>
							</div>
							<div className={`${styles.ShopItem}`}>
								<a href="">
									<img src={Amazon.src} alt="Amazon Logo" />
								</a>
							</div>
							{/* <div className={`${styles.ShopItem}`}>
								<a href="">
									<img src={BB.src} alt="BB Logo" />
								</a>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
