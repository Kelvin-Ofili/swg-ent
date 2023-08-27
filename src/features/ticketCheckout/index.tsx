import { useState } from "react";
import styles from "./styles.module.scss";
import {
  Button,
  Confirmation,
  FormUI,
  Input,
  TicketProps,
  TicketSale,
  TopTitle,
} from "components";
import { star } from "assets";

const TicketCheckoutUI = () => {
  const sample = {
    id: "3",
    month: "TBA",
    date: "00",
    day: "TBA",
    time: "10: 00 PM",
    sun: star,
    venue: "Club Cheetah Girne",
    name: "Myztro: Amapiano Asylum 2.0",
    available: "none",
    validVenue: true,
  };

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });
  const [success, setSuccess] = useState<boolean | undefined>(undefined);

  const handleSubmit = () => {
    console.log(userInfo);
	setSuccess(true)
  };

  return (
    <div className={styles.contactDiv}>
      {success === undefined ? (
        <>
          <div className={styles.top}>
            <TopTitle text={"YOU ARE ALMOST THERE"} position={true} />
          </div>
          <div className={styles.checkout}>
            <TicketSale {...(sample as TicketProps)} className={styles.info} />
            <FormUI className={styles.formInfo}>
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

              <Button
                text={"SUBMIT"}
                available={"open"}
                onClick={handleSubmit}
                className={styles.submitBtn}
              />
            </FormUI>
          </div>
        </>
      ) : (
        <Confirmation
          isSuccess={success}
          buttonText="RETURN TO TICKETS"
          text="Our representatives will contact you shortly with information about the
        ticket price and delivery options."
          handleBack={console.log}
        />
      )}
    </div>
  );
};

export { TicketCheckoutUI };
