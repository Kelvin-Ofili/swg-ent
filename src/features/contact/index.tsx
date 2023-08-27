import React, { useState } from "react";
import styles from "./styles.module.scss";
import {
  Button,
  FormField,
  FormUI,
  Input,
  TextArea,
  TopTitle,
} from "components";
import { type } from "@testing-library/user-event/dist/type";

const ContactUI = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });
  const handleSubmit = () => {
    console.log(userInfo);
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

        <TextArea
          label="Message"
          onchange={(e: { target: { value: any } }) =>
            setUserInfo({ ...userInfo, message: e.target.value })
          }
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
