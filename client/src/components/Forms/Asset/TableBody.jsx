import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";

import CircleDiv from "./CircleDiv";

const TableBody = (props) => {
  const differenceDate = (date1, date2) => {
    date1 = new Date(date1);
    date2 = new Date(date2);
    const date1utc = Date.UTC(
      date1.getFullYear(),
      date1.getMonth(),
      date1.getDate()
    );
    const date2utc = Date.UTC(
      date2.getFullYear(),
      date2.getMonth(),
      date2.getDate()
    );
    let day = 1000 * 60 * 60 * 24;
    return (date2utc - date1utc) / day;
  };
  if (props.data.data !== undefined && props.data.data.length > 0) {
    let currentDate = new Date().toLocaleDateString("en", {
      year: "numeric",
      day: "2-digit",
      month: "2-digit",
    });
    const items = props.data.data.map((item) => (
      <tr key={item._id}>
        <td>
          <CircleDiv diff={differenceDate(currentDate, item.clibrationDate)} />
        </td>
        <td>{item.clibrationDate}</td>
        <td>{item.sku}</td>
        <td>{item.name}</td>
        <td>{item.maintenaceTech}</td>
        <td>
          <button
            className="btn btn-sm btn-primary me-1"
            onClick={() => props.onEditClick(item._id)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            className="btn btn-sm btn-dark me-1"
            onClick={() => props.onViewClick(item._id)}
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button
            className="btn btn-sm btn-danger me-1"
            onClick={() => props.onDeleteClick(item._id)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </td>
      </tr>
    ));

    return <tbody>{items}</tbody>;
  }

  return <tbody></tbody>;
};

export default TableBody;
