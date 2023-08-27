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
import { useLocation, useNavigate } from "react-router-dom";
import { Routes } from "router";
import { SCRIPT_API_URL } from "config";
import axios from "axios";

const TicketCheckoutUI = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });
  const [success, setSuccess] = useState<boolean | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();

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
    setLoading(true);
    const data = new FormData();
    data.append("form_id", "ticket");
    data.append(
      "Event",
      `${state.day} - ${state.month} ${state.date}, ${state.time}, ${state.name}, ${state.venue}`
    );
    data.append("First name", userInfo.firstName);
    data.append("Last name", userInfo.lastName);
    data.append("Email", userInfo.email);
    data.append("Phone number", userInfo.number);

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
            <TopTitle text={"YOU ARE ALMOST THERE"} position={true} />
          </div>
          <div className={styles.checkout}>
            <TicketSale
              hideButton
              {...(state as TicketProps)}
              className={styles.info}
            />
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
                disabled={loading}
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
                disabled={loading}
              />
              <Input
                type={"email"}
                label={"Email"}
                placeholder="you@company.com"
                size="full"
                onchange={(value) => setUserInfo({ ...userInfo, email: value })}
                error={errors.email}
                disabled={loading}
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
                disabled={loading}
              />

              <Button
                text={loading ? "LOADING..." : "SUBMIT"}
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
          buttonText={success ? "RETURN TO TICKETS" : "CLOSE"}
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
