import * as React from 'react';
import Input from '@material-ui/core/Input';
import './CaDatePicker.scss';

export function CaDatePicker() {
  return (
    <div className='container'>
      <Input
        className='ca-datePicker'
        disableUnderline={true}
        type='date'
        defaultValue='DD-MM-YYYY'
      />
    </div>
  );
}
