import Header from "./Header";
import style from "./Tickets.module.css";
import TicketsList from "./TicketsList";

const Tickets = () => {
  return (
    <div className={style.header}>
      <Header />
      <TicketsList
        origin_name={""}
        price={0}
        departure_time={""}
        destination={""}
        departure_date={""}
        origin={""}
        stops={0}
        arrival_time={""}
        destination_name={""}
        arrival_date={""}
      />
    </div>
  );
};

export default Tickets;
