import * as React from 'react';

import {  Input, MenuItem, Select } from '@material-ui/core';
import { CaLocSelectProps } from './CaLocSelect.model';
import './CaLocSelect.scss';

export class CaLocSelect extends React.Component<CaLocSelectProps> {
  state = {
    location: 'Select a location',
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ location: event.target.value });
  };

  public render(): JSX.Element {
    const { values } = this.props;

    return (
      <Select
        className='ca-select'
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
        {values.map((locations, index) =>
          <MenuItem
            className='test'
            key={locations}
            value={values[index]}>
              {locations}
          </MenuItem>
        )}
      </Select>
    );
  }
}
