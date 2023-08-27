import React from "react";
import styles from "./styles.module.scss";
import { Button } from "components";
import { useNavigate } from "react-router-dom";
import { Routes } from "router";
import { star } from "assets";

export interface TicketData {
  id: string;
  month: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  name: string;
  validVenue: boolean;
  available: "open" | "closed" | "none";
  className?: string;
}

export interface TicketProps extends TicketData {
  className?: string;
  hideButton?: boolean;
}
const TicketSale: React.FC<TicketProps> = ({
  id,
  month,
  date,
  day,
  time,
  venue,
  name,
  available,
  validVenue,
  className,
  hideButton,
}) => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.ticket} ${className}`} key={id}>
      <div className={styles.ticket__information}>
        <div className={styles.ticket__information__date}>
          <p>{month}</p>
          <h2>{date}</h2>
        </div>
        <div className={styles.ticket__information__details}>
          <p className={styles.ticket__information__details__day}>
            {day}
            <span>
              <img src={star} alt="" className={styles.sun} />
            </span>
            {time}
          </p>
          <p className={styles.ticket__information__details__venue}>
            {!validVenue && "Venue TBA -"} {venue}
          </p>
          <p className={styles.ticket__information__details__name}>{name}</p>
        </div>
      </div>
      {hideButton ? (
        ""
      ) : (
        <Button
          text={available === "open" ? "GET TICKET" : "CLOSED"}
          className={styles.ticketSaleBtn}
          available={available}
          onClick={() =>
            available === "open"
              ? navigate(Routes.ticketCheckoutId(id), {
                  state: {
                    month,
                    date,
                    day,
                    time,
                    venue,
                    name,
                  },
                })
              : ""
          }
        />
      )}
    </div>
  );
};

export { TicketSale };
