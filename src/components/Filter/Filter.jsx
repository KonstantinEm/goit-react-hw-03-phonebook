import React from "react";
import PropTypes from "prop-types";
import style from "./Filter.module.css";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <label className={style.Serch}>Find contacts by name</label>
      <input
        className={style.SerchInput}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func,
};
