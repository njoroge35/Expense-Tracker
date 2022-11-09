import React from 'react'

import { useState } from 'react'

const AddBudget = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [exptype, setExptype] = useState('')
  const [ispaidout, setIspaidout] = useState(false)


  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add a expenditure name');
      return;
    }else if (!amount){
      alert('Please enter the expenditure amount');
      return;
    }else if (!exptype){
      alert('Please select the  expenditure type');
      return;
    }

    onAdd({ name: name, amount: amount, exptype:exptype,ispaidout })

    setName('')
    setAmount('')
    setExptype('')
    setIspaidout(false)
  }

  return (
 
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Item Name</label>
        <input
          type='text'
          placeholder='Item name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Expenditure Type</label>
     
     <select name='extype' type="select"   onChange={(e) => setExptype(e.target.value)} >
    <option  value=""> </option>
    <option  value="Personal Use">Personal Use </option>
    <option  value="Home ">Home</option>
    <option  value="Miscallenous">Miscallenous</option>
    </select>

      </div>
      <div className='form-control'>
        <label>Amount</label>
        <input
          type='text'
          placeholder='Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

      </div>
      <div className='form-control form-control-check'>
        <label>Paid Out</label>
        <input
          type='checkbox'
          checked={ispaidout}
          value={ispaidout}
          onChange={(e) => setIspaidout(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Record' className='btn btn-block' />
    </form>
  )
}
 return (
      <div className="container">
        <div className="cover">
          <img
            src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1667967915~exp=1667968515~hmac=82986987260be47212fcd13a16dc34d93cc96256eea6e8321010d47eeef80a56"
            alt="Profile Pic"
          />
        </div>
        <div className={`body ${slideUp && `slideup`}`}>
          <div className="bodyWrapper">
          <img className={`avatar ${slideUp && `slideup`}`} src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1667967915~exp=1667968515~hmac=82986987260be47212fcd13a16dc34d93cc96256eea6e8321010d47eeef80a56" alt="" />
          <div className="profileDetails">
              <section className="profileName">Peter</section>
              <section className="profileEmail">1@gmail.com</section>
              <section className="profileLocation">KENYA</section>
              <button  className= "seeMoreButton" onClick={() => {toggleSlideUp(!slideUp)}}>{!slideUp ? 'See More' : 'See Less' }</button>
              <div className="moreDetails">
                  <p>I am a FullStack Developer!!
                  </p>
                  <ul className="skillsets">
                      <li>HTML</li>
                      <li>React</li>
                      <li>MySQL</li>
                      <li>Ruby</li>
                  </ul>
              </div>
  
          </div>
  
  
          </div>
          
        </div>
      </div>
    );

export default AddBudget
