'use client';

import { CHECKBOXES_CONSTANTS } from '@/constants/constants';
import React, { useState } from 'react';

interface CheckboxesProps {
  upData: (data: string[]) => void;
}

const Checkboxes: React.FC<CheckboxesProps> = ({ upData }) => {
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
      <div className='flex  gap-2  max-w-[700px] lg:max-w-[400px]  flex-wrap '>
        {CHECKBOXES_CONSTANTS.map((item, index) => (
          <div
            key={index}
            className={`w-fit px-2 
          border gap-2 rounded-full  font-checkboxes flex justify-center items-center
            ${
              item.value === '1'
                ? 'bg-[#D3D2FF]'
                : item.value === '2'
                  ? 'bg-[#FFDDD2]'
                  : item.value === '3'
                    ? 'bg-[#D2FFF2]'
                    : item.value === '4'
                      ? 'bg-[#FFFBD2]'
                      : item.value === '5'
                        ? 'bg-[#D2F7FF]'
                        : item.value === '6'
                          ? 'bg-[#FFDDD2]'
                          : item.value === '7'
                            ? 'bg-[#D2FFF2]'
                            : ''
            } 
          `}
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
            <label className='text-gray-500' htmlFor={item.title}>
              {item.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkboxes;
