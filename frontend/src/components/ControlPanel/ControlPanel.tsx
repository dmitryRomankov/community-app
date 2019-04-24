import * as React from 'react';

import './ControlPanel.scss';

import {
  CaCheckbox,
  CaDatePicker,
  CaInput,
  CaLocSelect,
} from '../../components/Mui';

export class ControlPanel extends React.Component {
  public render(): JSX.Element {
    return (
      <section className='ca-control-panel'>
        <div className='ca-control-panel__location'>
          <h3 className='ca-control-panel__heading'>Location</h3>
          <CaLocSelect values={['1', '2', '3']}/>
        </div>
        <div className='ca-control-panel__technology'>
          <h3 className='ca-control-panel__heading'>Technology</h3>
          <CaInput />
        </div>
        <div className='ca-control-panel__date-range'>
          <h3 className='ca-control-panel__heading'>Date range</h3>
          <div className='ca-control-panel__pickers'>
            <CaDatePicker />
            <span className='ca-control-panel__separator'>-</span>
            <CaDatePicker />
          </div>
        </div>
        <div className='ca-control-panel__event-type'>
          <h3 className='ca-control-panel__heading'>Event type</h3>
          <div className='ca-control-panel__checkbox-container'>
            <CaCheckbox label={'Online'}/>
            <CaCheckbox label={'Offline'}/>
          </div>
        </div>
      </section>
    );
  }
}
