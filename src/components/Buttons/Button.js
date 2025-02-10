// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Buttons/Button.module.scss";

// IMAGES //

// DATA //

/** Button Component */
export default function Button({
	children,
	shape,
	color,
	variant,
	isAnchor,
	hrefVal,
	isBlank,
}) {
	return (
		<>
			{isAnchor ? (
				<a
					className={`text_16 font_primary
				${styles.btn_common_styles}
				${styles[`btn_${color}`]}
				${styles[`btn_${variant}`]}
				${styles[shape]}
				`}
					href={hrefVal}
					rel={isBlank ? "noreferrer" : ""}
					target={isBlank ? "_blank" : ""}
				>
					{children}
				</a>
			) : (
				<button
					className={`text_16 font_primary
			${styles.btn_common_styles}
			${styles[`btn_${color}`]}
			${styles[`btn_${variant}`]}
			${styles[shape]}
			`}
					type="submit"
				>
					{children}
				</button>
			)}
		</>
	);
}
