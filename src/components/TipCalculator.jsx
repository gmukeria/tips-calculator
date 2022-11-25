import { useState } from "react";
import Card from "./Card";
import "./tip_calculator.css";
import TipsButton from "./TipsButton";
import PeopleInput from "./PeopleInput";

const TipCalculator = props => {
  const tipsData = [5, 10, 15, 25, 50];

  const [customTip, setCustomTip] = useState("");
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);

  function tipAmountPerPerson() {
    let amountPerson = parseInt(bill) / parseInt(people);
    let tipAmount = (amountPerson / 100) * parseInt(tip);

    return tipAmount >= 0 ? tipAmount.toFixed(2) : 0;
  }

  function totalAmountPerPerson() {
    let amountPerson = parseInt(bill) / parseInt(people);
    let tipAmount = (amountPerson / 100) * parseInt(tip);
    let totalAmount = parseInt(amountPerson) + parseInt(tipAmount);

    return totalAmount >= 0 ? totalAmount.toFixed(2) : 0;
  }

  const handleChangeTip = tip => {
    setCustomTip("");
    setTip(tip);
  };

  const handleChangeCustomTip = event => {
    let customTipValue = event.target.value;

    if (customTipValue > 100) {
      customTipValue = 100;
    }

    if (customTipValue < 0) {
      customTipValue = 0;
    }

    setTip(customTipValue);
    setCustomTip(customTipValue);
  };

  const handleChangeBill = event => {
    let billValue = event.target.value;
    if (billValue < 0) {
      billValue = 0;
    }
    setBill(billValue);
  };

  const handleChangePeople = event => {
    let peopleValue = event.target.value;
    if (peopleValue < 0) {
      peopleValue = 0;
    }

    setPeople(peopleValue);
  };

  const handleResetButton = () => {
    setCustomTip("");
    setTip(0);
    setBill(0);
    setPeople(1);
  };

  return (
    <Card>
      <div className="data-segment">
        <label htmlFor="bill-input">Bill</label>
        <input
          type="number"
          className="input bill-input"
          id="bill-input"
          onChange={handleChangeBill}
          value={bill}
          min="0"
        />
        <label htmlFor="">Select Tip %</label>
        <div className="tip">
          {tipsData.map(item => (
            <TipsButton
              tipValue={item}
              changeTip={handleChangeTip}
              tipPercent={tip}
            />
          ))}

          <div id="tip-custom">
            <input
              type="number"
              className="tip-custom"
              onChange={handleChangeCustomTip}
              placeholder="CUSTOM"
              value={customTip}
              min="0"
              max="100"
            />
          </div>
        </div>

        <PeopleInput handleChangePeople={handleChangePeople} people={people} />
      </div>

      <div className="result-segment">
        <div className="tip-amount">
          <div className="text">
            <p>Tip Amount</p>
            <p className="person">/ person</p>
          </div>
          <div className="amount" id="tip-amount">
            ${tipAmountPerPerson()}
          </div>
        </div>
        <div className="total">
          <div className="text">
            <p>Total</p>
            <p className="person">/ person</p>
          </div>
          <div className="amount" id="total-amount">
            ${totalAmountPerPerson()}
          </div>
        </div>
        <button className="reset" onClick={handleResetButton}>
          RESET
        </button>
      </div>
    </Card>
  );
};

export default TipCalculator;
