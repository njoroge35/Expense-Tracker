import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { default as NumberFormat } from 'react-number-format';


const Budget = ({ budget, onDelete, onToggle }) => {
  return (
    <div
      className={`budget ${budget.ispaidout && 'ispaidout'}`}
      onDoubleClick={() => onToggle(budget.id)}
    >
      <small>{budget.exptype}</small>
      <h3>
        {budget.name}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(budget.id)}
        />
      </h3>
      <hr></hr>
<NumberFormat
  value={budget.amount}
  className="expenditureamount"
  displayType={'text'}
  thousandSeparator={true}
  prefix={'KES '}
  renderText={(value, props) => <div {...props}>{value}</div>}
/>
    </div>
  )
}

export default Budget
