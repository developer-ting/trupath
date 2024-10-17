// MODULES //
import { useRef } from "react";

// COMPONENTS //
import Button from "../components/Buttons/Button";

// SECTIONS //

// PLUGINS //
import { useForm } from "react-hook-form";

// UTILS //

// STYLES //
import styles from "@/styles/sections/ContactForm.module.scss";

// IMAGES //

// DATA //

/** ContactForm Section */
export default function ContactForm() {
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
							id="firstname"
							name="firstname"
							placeholder=" "
							{...register("firstname", { required: true })}
						/>
						<label className={styles.inputLabels} htmlFor="firstname">
							First Name<span>*</span>
						</label>
						{errors.firstname && errors.firstname.type == "required" && (
							<label className="error">This field is required</label>
						)}
					</div>
					<div className={styles.formGroup}>
						<input
							className={`${styles.input} text_14`}
							type="text"
							id="lastname"
							name="lastname"
							placeholder=" "
							{...register("lastname", { required: true })}
						/>
						<label className={styles.inputLabels} htmlFor="lastname">
							Last Name<span>*</span>
						</label>
						{errors.lastname && errors.lastname.type == "required" && (
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
							id="phoneno"
							name="phoneno"
							placeholder=" "
							{...register("phoneno", { required: true })}
						/>
						<label className={styles.inputLabels} htmlFor="phoneno">
							Phone Number<span>*</span>
						</label>
						{errors.phoneno && errors.phoneno.type == "required" && (
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
				<Button color="secondary" variant="filled">
					Submit
				</Button>
			</form>
		</div>
	);
}
