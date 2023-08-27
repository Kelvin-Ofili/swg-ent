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
import { useLocation, useNavigate } from "react-router-dom";
import { Routes } from "router";

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

  const {state} = useLocation()

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });

  const handleSubmit = () => {
    const keys = Object.keys(userInfo);

    if (keys.some((key) => userInfo[key] === "")) {
      setErrors({
        firstName: userInfo.firstName === "" ? "Required" : "",
        lastName: userInfo.lastName === "" ? "Required" : "",
        email: userInfo.email === "" ? "Required" : "",
        number: userInfo.number === "" ? "Required" : "",
      });
    } else {
      setErrors({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
      });
      onSubmit();
    }
  };

  const onSubmit = () => {
    console.log(userInfo);
    console.log(state);
    setSuccess(true);
  };


  const navigate = useNavigate();

  return (
    <div className={styles.contactDiv}>
      {success === undefined ? (
        <>
          <div className={styles.top}>
            <TopTitle text={"YOU ARE ALMOST THERE"} position={true} />
          </div>
          <div className={styles.checkout}>
            <TicketSale hideButton {...(state as TicketProps)} className={styles.info} />
            <FormUI className={styles.formInfo}>
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
                onchange={(value) =>
                  setUserInfo({ ...userInfo, number: value })
                }
                error={errors.number}
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
          handleBack={() =>
            success ? navigate(Routes.landing) : navigate(Routes.tickets)
          }
        />
      )}
    </div>
  );
};

export { TicketCheckoutUI };
