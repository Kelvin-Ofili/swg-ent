import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Input, TextArea, Button } from "components";

interface FormProps {
	type: boolean;
	className?: any;
}

const FormUI: React.FC<FormProps> = ({ type, className }) => {
	const [userInfo, setUserInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		number: 0,
		message: "",
	});
	const handleSubmit = () => {
		console.log(userInfo);
	};
	return (
		<div className={`${styles.form} ${className}`}>
			<form action="">
				<div className={styles.fullName}>
					<Input
						type={"text"}
						label={"First name"}
						placeholder="First name"
						size="half"
						onchange={(e: { target: { value: any } }) =>
							setUserInfo({ ...userInfo, firstName: e.target.value })
						}
					/>
					<Input
						type={"text"}
						label={"Last name"}
						placeholder="Last name"
						size="half"
						onchange={(e: { target: { value: any } }) =>
							setUserInfo({ ...userInfo, lastName: e.target.value })
						}
					/>
				</div>
				<Input
					type={"email"}
					label={"Email"}
					placeholder="you@company.com"
					size="full"
					onchange={(e: { target: { value: any } }) =>
						setUserInfo({ ...userInfo, email: e.target.value })
					}
				/>
				<Input
					type={"tel"}
					label={"Phone number"}
					placeholder="+1 (555) 000-0000"
					size="full"
					onchange={(e: { target: { value: any } }) =>
						setUserInfo({ ...userInfo, number: e.target.value })
					}
				/>
				{type && (
					<TextArea
						label="Message"
						onchange={(e: { target: { value: any } }) =>
							setUserInfo({ ...userInfo, message: e.target.value })
						}
					/>
				)}
			</form>
			<Button text={"SUBMIT"} available={"open"} onClick={handleSubmit} className={styles.submitBtn}/>
		</div>
	);
};

export { FormUI };
