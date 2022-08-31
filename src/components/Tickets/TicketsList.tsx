import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, fetchTickets } from "../../store/reducer";
import Information from "./List";
import React from "react";
import style from "./TicketsList.module.css";

export interface TicketProps {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  stops: number;
  price: number;
}

const TicketsList: React.FC<TicketProps> = (props: any) => {
  const dispatch = useDispatch<any>();
  const tickets = useSelector((state: any) => state.tickets.tickets);
  const newTickets = useSelector((state: any) => state.tickets.newTickets);
  const zeroTransfer = useSelector((state: any) => state.tickets.zeroTransfer);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);


  const filterZero = (e: any) => {
    const { target } = e;
    const isFilter = target.type === "checkbox" ? target.checked : target.value;
    dispatch(actions.setFilterZero(isFilter));
  };
  const filterOne = (e: any) => {
    const { target } = e;
    const isFilter = target.type === "checkbox" ? target.checked : target.value;
    dispatch(actions.setFilterOne(isFilter));
  };
  const filterTwo = (e: any) => {
    const { target } = e;
    const isFilter = target.type === "checkbox" ? target.checked : target.value;
    dispatch(actions.setFilterTwo(isFilter));
  };
  const filterTrhee = (e: any) => {
    const { target } = e;
    const isFilter = target.type === "checkbox" ? target.checked : target.value;
    dispatch(actions.setFilterTrhee(isFilter));
  };

  const Ticket = newTickets.length
    ? newTickets.map((p: TicketProps) => (
        <Information
          origin_name={p.origin_name}
          price={p.price}
          origin={p.origin}
          departure_time={p.departure_time}
          destination={p.destination}
          departure_date={p.departure_date}
          stops={p.stops}
          arrival_time={p.arrival_time}
          destination_name={p.destination_name}
          arrival_date={p.arrival_date}
        />
      ))
    : tickets.map((p: TicketProps) => (
        <Information
          origin_name={p.origin_name}
          price={p.price}
          origin={p.origin}
          departure_time={p.departure_time}
          destination={p.destination}
          departure_date={p.departure_date}
          stops={p.stops}
          arrival_time={p.arrival_time}
          destination_name={p.destination_name}
          arrival_date={p.arrival_date}
        />
      ));

  return (
    <div className={style.home}>
      <div className={style.filtration}>
        <div className={style.many}>ВАЛЮТА</div>
        <div className={style.btn}>
          <button className={style.btn_el}>RUB</button>
          <button className={style.btn_el}>USD</button>
          <button className={style.btn_el}>EUR</button>
        </div>
        <div>
          <div className={style.many}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
        </div>
        <div className={style.checkbox}>
          <input type="checkbox"  /> Все
          <span className={style.text}>только</span>
        </div>
        <div className={style.checkbox}>
          <input type="checkbox" onChange={filterZero} checked={zeroTransfer} />{" "}
          Без пересадок
          <span className={style.text}>только</span>
        </div>
        <div className={style.checkbox}>
          <input type="checkbox" onChange={filterOne} /> 1 пересадка
          <span className={style.text}>только</span>
        </div>
        <div className={style.checkbox}>
          <input type="checkbox" onChange={filterTwo} /> 2 пересадки
          <span className={style.text}>только</span>
        </div>

        <div className={style.checkbox}>
          <input type="checkbox" onChange={filterTrhee} /> 3 пересадки
          <span className={style.text}>только</span>
        </div>
      </div>

      <div className={style.tickets}> {Ticket} </div>
    </div>
  );
};

export default TicketsList;
