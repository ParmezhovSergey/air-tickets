import React from "react";
import { TicketProps } from "./TicketsList";
import style from "./List.module.css";
import turkishairlines from "../../img/turkishairlines.png";
import Vector1 from "../../img/Vector1.png";

const Information = (props: TicketProps) => {
  return (
    <div className={style.tickets}>
      <div className={style.price}>
        <div className={style.turkishairlines}>
          <img className={style.turkishairlines__image} src={turkishairlines} />
        </div>
        <div className={style.buy}>
          <button className={style.button}>
            Купить <span className={style.rub}> за {props.price} Р</span>
          </button>
        </div>
      </div>

      <div className={style.time}>
        <div className={style.start}>
          <div className={style.departure_time}>{props.departure_time}</div>
          <div className={style.origin}>
            {props.origin}, {props.origin_name}{" "}
          </div>
          <div className={style.departure_date}>
            {props.departure_date}, Пт{" "}
          </div>
        </div>
        <div className={style.air}>
          <div className={style.stops}>
            {props.stops}{" "}
            {props.stops > 1
              ? "ПЕРЕСАДКИ"
              : props.stops === 0
              ? "ПЕРЕСАДОК"
              : "ПЕРЕСАДКA"}
          </div>
          <div className={style.vector}>
            <div className={style.line}>________________</div>
            <img className={style.vector__image} src={Vector1} />
          </div>
        </div>
        <div className={style.finish}>
          <div className={style.arrival_time}>{props.arrival_time}</div>
          <div className={style.destination_name}>
            {props.destination_name}, {props.destination}
          </div>
          <div className={style.arrival_date}>{props.arrival_date}, Пт</div>
        </div>
      </div>
    </div>
  );
};

export default Information;
