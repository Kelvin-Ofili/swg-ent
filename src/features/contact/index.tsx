import { useState } from "react";
import styles from "./styles.module.scss";
import { Button, FormUI, Input, TextArea, TopTitle } from "components";

const ContactUI = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });

  const onSubmit = () => {
    console.log(userInfo);
  };
  const handleSubmit = () => {
    const keys = Object.keys(userInfo);

    if (keys.some((key) => userInfo[key] === "")) {
      setErrors({
        firstName: userInfo.firstName === "" ? "Required" : "",
        lastName: userInfo.lastName === "" ? "Required" : "",
        email: userInfo.email === "" ? "Required" : "",
        number: userInfo.number === "" ? "Required" : "",
        message: userInfo.message === "" ? "Required" : "",
      });
    } else {
      setErrors({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        message: "",
      });
      onSubmit();
    }
  };

  return (
    <div className={styles.contactDiv}>
      <div className={styles.top}>
        <TopTitle text={"CONTACT US"} position={true} />
      </div>
      <FormUI>
        <Input
          type={"text"}
          label={"First name"}
          placeholder="First name"
          size="half"
          onchange={(value) => setUserInfo({ ...userInfo, firstName: value })}
          error={errors.firstName}
        />
        <Input
          type={"text"}
          label={"Last name"}
          placeholder="Last name"
          size="half"
          onchange={(value) => setUserInfo({ ...userInfo, lastName: value })}
          error={errors.lastName}
        />
        <Input
          type={"email"}
          label={"Email"}
          placeholder="you@company.com"
          size="full"
          onchange={(value) => setUserInfo({ ...userInfo, email: value })}
          error={errors.email}
        />
        <Input
          type={"tel"}
          label={"Phone number"}
          placeholder="+1 (555) 000-0000"
          size="full"
          onchange={(value) => setUserInfo({ ...userInfo, number: value })}
          error={errors.number}
        />

        <TextArea
          label="Message"
          onchange={(value) => setUserInfo({ ...userInfo, message: value })}
          error={errors.message}
        />

        <Button
          text={"SUBMIT"}
          available={"open"}
          onClick={handleSubmit}
          className={styles.submitBtn}
        />
      </FormUI>
    </div>
  );
};

export { ContactUI };
