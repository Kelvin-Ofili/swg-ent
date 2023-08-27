import { useState } from "react";
import styles from "./styles.module.scss";
import {
  Button,
  Confirmation,
  FormUI,
  Input,
  TextArea,
  TopTitle,
} from "components";
import { SCRIPT_API_URL } from "config";
import axios from "axios";

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
  const [success, setSuccess] = useState<boolean | undefined>(undefined);
  const [loading, setLoading] = useState(false);

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

  const onSubmit = () => {
    setLoading(true);
    const data = new FormData();
    data.append("form_id", "contact");
    data.append("First name", userInfo.firstName);
    data.append("Last name", userInfo.lastName);
    data.append("Email", userInfo.email);
    data.append("Phone number", userInfo.number);
    data.append("Message", userInfo.message);

    if (!SCRIPT_API_URL) return;

    axios
      .post(SCRIPT_API_URL, data)
      .then((res) => {
        setSuccess(true);
        setUserInfo({
          firstName: "",
          lastName: "",
          email: "",
          number: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(undefined);
        }, 10000);
      })
      .catch((err) => {
        setSuccess(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.contactDiv}>
      {success === undefined ? (
        <>
          <div className={styles.top}>
            <TopTitle text={"CONTACT US"} position={true} />
          </div>
          <FormUI>
            <Input
              type={"text"}
              label={"First name"}
              placeholder="First name"
              size="half"
              onchange={(value) =>
                setUserInfo({ ...userInfo, firstName: value })
              }
              error={errors.firstName}
            />
            <Input
              type={"text"}
              label={"Last name"}
              placeholder="Last name"
              size="half"
              onchange={(value) =>
                setUserInfo({ ...userInfo, lastName: value })
              }
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
              text={loading ? "LOADING..." : "SUBMIT"}
              available={"open"}
              onClick={handleSubmit}
              className={styles.submitBtn}
            />
          </FormUI>
        </>
      ) : (
        <Confirmation
          isSuccess={success}
          buttonText={"CLOSE"}
          text="Thank you for your inquiry! Our representatives will contact you shortly."
          handleBack={() => setSuccess(undefined)}
        />
      )}
    </div>
  );
};

export { ContactUI };
