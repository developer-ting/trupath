// MODULES //
import { useEffect, useRef, useState } from "react";

// COMPONENTS //
import Button from "../components/Buttons/Button";

// SECTIONS //

// PLUGINS //
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

// UTILS //

// STYLES //
import styles from "@/styles/sections/ContactForm.module.scss";

// IMAGES //

// DATA //

/** ContactForm Section */
export default function ContactForm() {
	const formRef = useRef();
	const [isSubmit, setisSubmit] = useState(false);
	const [isSubmited, setIsSubmited] = useState(false);
	const [thankyouMessage, setThankyouMessage] = useState("");

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: "onChange" });

	/** Function to handle submit */
	// const onSubmit = async (data, e) => {
	// 	// Write form submission codes here
	// 	e.preventDefault();
	// 	const scriptURL =
	// 		"https://script.google.com/macros/s/AKfycbwME3piEjnLmKNHr_bkJ5QnedyQIE31_UMz8LqxZN0yPYLoLwr2rtEXe6DS6l9ulaYY/exec";
	// 	fetch(scriptURL, {
	// 		method: "POST",
	// 		body: new FormData(formRef.current),
	// 	})
	// 		.then((response) => {
	// 			// console.log(response);
	// 			reset();
	// 			setisSubmit(true);
	// 			setTimeout(() => {
	// 				setisSubmit(false);
	// 			}, 5000);
	// 		})
	// 		.catch((error) => console.error("Error!", error.message));
	// };
	/** Function to handle submit */
	const onSubmit = async (formData, e) => {
		e.preventDefault();

		const selectedMessage = "Thank you for your submission!";
		setThankyouMessage(selectedMessage);

		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append(
			"Authorization",
			`Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`
		);

		const graphql = JSON.stringify({
			query: `mutation MycreateHomeContact {
  createHomeContact(
    data: {email: "${formData.email}", firstName: "${formData.firstName}", lastName: "${formData.lastName}", message: "${formData.message}", phone: "${formData.phone}"}
  ) {
    id
  }
}`,
			variables: {},
		});
		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: graphql,
			redirect: "follow",
		};
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,
				requestOptions
			);
			const result = await response.json();
			console.log(result);
			reset();
			setIsSubmited(true);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		// <div>
		// 	<h1>Contact Us</h1>
		// 	<form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
		// 		<div className={styles.formGroup}>
		// 			<label className={styles.label} htmlFor="name">
		// 				Name:
		// 			</label>
		// 			<input
		// 				className={styles.input}
		// 				type="text"
		// 				id="name"
		// 				name="name"
		// 				{...register("name", { required: true })}
		// 			/>
		// 			{errors.name && errors.name.type == "required" && (
		// 				<label className="error">This field is required</label>
		// 			)}
		// 		</div>
		// 		<div className={styles.formGroup}>
		// 			<label className={styles.label} htmlFor="email">
		// 				Email:
		// 			</label>
		// 			<input
		// 				className={styles.input}
		// 				type="email"
		// 				id="email"
		// 				name="email"
		// 				{...register("email", {
		// 					required: true,
		// 					pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
		// 				})}
		// 			/>
		// 			{errors.email && errors.email.type == "required" && (
		// 				<label className="error">This field is required</label>
		// 			)}
		// 			{errors.email && errors.email.type == "pattern" && (
		// 				<label className="error">Enter valid email</label>
		// 			)}
		// 		</div>
		// 		<div className={styles.formGroup}>
		// 			<label className={styles.label} htmlFor="message">
		// 				Message:
		// 			</label>
		// 			<textarea
		// 				className={styles.textarea}
		// 				id="message"
		// 				name="message"
		// 				{...register("message", {
		// 					required: true,
		// 				})}
		// 			/>
		// 			{errors.message && errors.message.type == "required" && (
		// 				<label className="error">This field is required</label>
		// 			)}
		// 		</div>
		// 		<button className={styles.button} type="submit">
		// 			Submit
		// 		</button>
		// 	</form>
		// </div>
		<div className={`${styles.ContactForm}`}>
			<form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.twoInputs}>
					<div className={styles.formGroup}>
						<input
							className={`${styles.input} text_14`}
							type="text"
							id="firstName"
							name="firstName"
							placeholder=" "
							{...register("firstName", { required: true })}
						/>
						<label className={styles.inputLabels} htmlFor="firstName">
							First Name<span>*</span>
						</label>
						{errors.firstName && errors.firstName.type == "required" && (
							<label className="error">This field is required</label>
						)}
					</div>
					<div className={styles.formGroup}>
						<input
							className={`${styles.input} text_14`}
							type="text"
							id="lastName"
							name="lastName"
							placeholder=" "
							{...register("lastName", { required: true })}
						/>
						<label className={styles.inputLabels} htmlFor="lastName">
							Last Name<span>*</span>
						</label>
						{errors.lastName && errors.lastName.type == "required" && (
							<label className="error">This field is required</label>
						)}
					</div>
				</div>
				<div className={styles.twoInputs}>
					<div className={styles.formGroup}>
						<input
							className={`${styles.input} text_14`}
							type="email"
							id="email"
							name="email"
							placeholder=" "
							{...register("email", {
								required: true,
								pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
							})}
						/>
						<label className={styles.inputLabels} htmlFor="email">
							Email Address<span>*</span>
						</label>
						{errors.email && errors.email.type == "required" && (
							<label className="error">This field is required</label>
						)}
						{errors.email && errors.email.type == "pattern" && (
							<label className="error">Enter valid email</label>
						)}
					</div>
					<div className={styles.formGroup}>
						<input
							className={`${styles.input} text_14`}
							type="tel"
							id="phone"
							name="phone"
							placeholder=" "
							{...register("phone", { required: true })}
						/>
						<label className={styles.inputLabels} htmlFor="phone">
							Phone Number<span>*</span>
						</label>
						{errors.phone && errors.phone.type == "required" && (
							<label className="error">This field is required</label>
						)}
					</div>
				</div>
				<div className={styles.formGroup1}>
					<textarea
						className={styles.textarea}
						id="message"
						name="message"
						placeholder=" "
						{...register("message", {
							required: true,
						})}
					/>
					<label className={styles.inputLabels} htmlFor="message">
						Message<span>*</span>
					</label>
					{errors.message && errors.message.type == "required" && (
						<label className="error">This field is required</label>
					)}
				</div>
				{/* <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} /> */}
				<Button color="secondary" variant="filled">
					Submit
				</Button>
				{isSubmited && (
					<div className="m_t_10">
						<p className="text_lg">Thank you for contacting us</p>
						<p className="text_lg">We will get back to you shortly.</p>
					</div>
				)}
			</form>
		</div>
	);
}
