import React from 'react'
import Select from 'react-select'

export default function CustomSelect({selected,setSelected,placeholder,options}) {

      const onChangeSelect = (e) => {
        if(e) setSelected(e.value);
        else setSelected("");
      }

    return (
      <div className='shadow-xl mt-5'>
          <Select
          onChange={onChangeSelect}
          options={options}
          placeholder={placeholder}
          />
        </div>
    );

}
