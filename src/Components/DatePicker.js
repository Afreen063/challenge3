import React, { useState} from 'react';

import moment from 'moment';

import 'moment/locale/en-gb'; // Import the locale you prefer




export default function DatePicker() {

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
    const duration = [
        { label: 'Year', id: 'year' },
        { label: 'Months', id: 'month' },
        { label: 'Days', id: 'day' },
        { label: 'Hours', id: 'hour' },
        { label: 'Minutes', id: 'minute' },
    ]




  const handleDurationChange = (e) => {

      const duration = parseInt(e.target.value);
      

    const calculatedToDate = moment(fromDate).add(duration, e.target.id);

    setToDate(calculatedToDate.format('YYYY-MM-DDTHH:mm'));

  };

   



  return (

    <div>

      <h1>Date Picker</h1>

      <div>

        <label htmlFor="from-date-picker">From Date:</label>

        <input

          id="from-date-picker"

          type="datetime-local"

          value={fromDate}

          onChange={(e)=>{ setFromDate(e.target.value);}}

        />

      </div>

      <div>

              <h3 id="duration">Duration:</h3>
              
              {duration.map((item,index) => {
                  return <div key={String(index)}>
                      <label htmlFor={item.id}>{ item.label}</label>
              <input id={item.id} type='text'  onChange={handleDurationChange} />
                  </div>
        })}
             
      </div>

      <div style={{marginTop:'20px'}}>

        <label htmlFor="to-date-picker">To Date:</label>

        <input id="to-date-picker" type="datetime-local" value={toDate} disabled />

      </div>

    </div>

  );

}




 