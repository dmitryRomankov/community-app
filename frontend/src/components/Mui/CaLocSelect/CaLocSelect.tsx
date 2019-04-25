import * as React from 'react';

import {  Input, MenuItem, Select } from '@material-ui/core';
import { CaLocSelectProps } from './CaLocSelect.model';
import './CaLocSelect.scss';

export class CaLocSelect extends React.Component<CaLocSelectProps> {
  state = {
    location: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ location: event.target.value });
  }

  public render(): JSX.Element {
    const { values, placeholder, ...otherProps } = this.props;

    return (
      <Select
        displayEmpty
        className='ca-select'
        { ...otherProps }
        value={this.state.location}
        onChange={this.handleChange}
        input={
          <Input
            disableUnderline={true}
            name='location'
            id='location-select'
          />
        }
      >
        <MenuItem style={{display: 'none'}} value=''>{placeholder}</MenuItem>
        {values.map((item, index) =>
          <MenuItem
            className='ca-select__item'
            key={item}
            value={values[index]}
          >
            {item}
          </MenuItem>
        )}
      </Select>
    );
  }
}
