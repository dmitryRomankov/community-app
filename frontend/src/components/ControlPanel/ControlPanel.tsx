import * as React from 'react';

import './ControlPanel.scss';

export class ControlPanel extends React.Component {
  render() {
    return (
      <main className='wrapper-control-panel'>
        <section className='ca-control-panel'>
          <div className='ca-control-panel__container'>
            <div className='ca-control-panel__location'>
              <h3 className='ca-control-panel__heading'>Location</h3>
              <div className='ca-control-panel__select-container'>
                <select className='ca-control-panel__select' name='location'>
                  <option value=''>Select a location</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
            </div>
            <div className='ca-control-panel__technology'>
              <h3 className='ca-control-panel__heading'>Technology</h3>
              <input
                type='text'
                placeholder='Type technology'
                className='ca-control-panel__technology-input'
              />
            </div>
            <div className='ca-control-panel__date-range'>
              <h3 className='ca-control-panel__heading'>Date range</h3>
              <div className='ca-control-panel__pickers'>
                <div className='ca-control-panel__date-container'>
                  <input type='date' className='ca-control-panel__datepicker' />
                </div>
                <span className='ca-control-panel__separator'>-</span>
                <div className='ca-control-panel__date-container'>
                  <input type='date' className='ca-control-panel__datepicker' />
                </div>
              </div>
            </div>
            <div className='ca-control-panel__event-type'>
              <h3 className='ca-control-panel__heading'>Event type</h3>
              <div className='ca-control-panel__checkbox-container'>
                <div className='ca-control-panel__checkbox-item'>
                  <input
                    type='checkbox'
                    id='online'
                  />
                  <label htmlFor='online' className='ca-control-panel__checkbox-text'>Online</label>
                </div>
                <div className='ca-control-panel__checkbox-item'>
                  <input
                    type='checkbox'
                    id='offline'
                  />
                  <label htmlFor='offline' className='ca-control-panel__checkbox-text'>Offline</label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
