import React from "react";

const PeopleInput = props => {
  let errorClass = props.people === 0 ? "error-active" : "error";

  return (
    <>
      <div className="people-label">
        <label htmlFor="people-inpu">Number of People</label>
        <label className="error" htmlFor="people-inpu">
          {props.people == 0 ? "Can't be zero" : ""}
          {/* Can't be zero */}
        </label>
      </div>

      <input
        type="number"
        className={`input people-input input-error ${
          props.people == 0 ? "number-error" : ""
        }`}
        id="people-input"
        onChange={props.handleChangePeople}
        value={props.people}
        min="0"
      />
    </>
  );
};

export default PeopleInput;
