'use client';

import { CHECKBOXES_CONSTANTS } from '@/constants/constants';
import React, { useState } from 'react';

interface CheckboxesProps {
    upData: (data: string[]) => void;
  }

const Checkboxes: React.FC<CheckboxesProps> = ({upData}) => {
  const [value, grabValue] = useState<string[]>([]);

  const handleCheckboxChange = (title: string) => {
    let newValue;
    if (value.includes(title)) {
      newValue = value.filter((val) => val !== title);
    } else {
      newValue = [...value, title];
    }
    grabValue(newValue);
    upData(newValue);
  };
  return (
    <div className='w-full '>
      <div className='grid grid-cols-3 gap-2 w-fit '>
        {CHECKBOXES_CONSTANTS.map((item, index) => (
          <div
          key={index}
            className='w-full px-2  
          border gap-2 rounded-full flex justify-center items-center'
          >
            <input
              type='checkbox'
              id={item.title}
              name={item.title}
              key={index}
              checked={value.includes(item.title)}
              onChange={() => {
                handleCheckboxChange(item.title);
              }}
            />
            <label htmlFor={item.title}>{item.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkboxes;
