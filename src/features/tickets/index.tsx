import styles from "./styles.module.scss";
import { TicketData, TicketSale, TopTitle } from "components";
import { arrow, lineup } from "assets";

const TicketPurchaseUI = () => {
  const cyprusTickets: TicketData[] = [
    {
      id: "sep-22",
      month: "SEP",
      date: "22",
      day: "Friday",
      time: "10: 00 PM",
      venue: "Magusa",
      name: "Mellow & Sleezy: Amapiano Asylum 2.0",
      available: "open",
      validVenue: false,
    },
    {
      id: "sep-23",
      month: "SEP",
      date: "23",
      day: "Saturday",
      time: "10: 00 PM",
      venue: "Girne",
      name: "Busta 929: Amapiano Asylum 2.0",
      available: "open",
      validVenue: false,
    },
  ];
  const turkeyTickets: TicketData[] = [
    {
      id: "3",
      month: "TBA",
      date: "00",
      day: "TBA",
      time: "10: 00 PM",
      venue: "Club Cheetah Girne",
      name: "Myztro: Amapiano Asylum 2.0",
      available: "none",
      validVenue: true,
    },
    {
      id: "4",
      month: "OCT",
      date: "14",
      day: "Monday",
      time: "10: 00 PM",
      venue: "Club Cheetah Girne",
      name: "Busta 999 & Clis: Amapiano Asylum 2.0",
      available: "closed",
      validVenue: true,
    },
  ];
  return (
    <div>
      <div className={styles.top}>
        <TopTitle text={"GRAB UR TICKET"} position={true} />
      </div>
      <div className={styles.lineupDiv}>
        <img src={arrow} alt="" className={styles.arrow} />
        <img src={lineup} alt="" className={styles.lineupDiv__img} />
        <img src={arrow} alt="" className={styles.arrow} />
      </div>
      <div className={styles.ticketSale}>
        <div className={styles.ticketSale__location}>
          <h1>Cyprus</h1>
          {cyprusTickets.map((ticket) => (
            <TicketSale {...ticket} />
          ))}
        </div>

        <div className={styles.ticketSale__location}>
          <h1>Turkey</h1>
          {turkeyTickets.map((ticket) => (
            <TicketSale {...ticket} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { TicketPurchaseUI };
