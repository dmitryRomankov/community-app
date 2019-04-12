import * as React from 'react';
import { I18n } from 'react-i18next';

import './EventCard.scss';
import { EventCardProps } from './EventCard.model';
import { NavLink } from 'react-router-dom';

import bookmark from 'assets/svg/icon-bookmark--check.svg';
import calendarGreen from 'assets/svg/icon-calendar--green.svg';
import location from 'assets/svg/icon-location.svg';
import online from 'assets/svg/icon-online.svg';

export class CaEventCard extends React.PureComponent<EventCardProps> {
  render() {
    const { id, title, city, begginingDate } = this.props;
    return (
      <I18n>
        {
          t => (
            <NavLink to={`/event/${id}`} >
              <div className='card'>
                <div className='img'>
                  <img src={ online } alt='' className='img__online'/>
                  <div className='img__bookmark'>
                    <img src={ bookmark } alt='' />
                  </div>
                </div>
                <div className='information'>
                  <div className='information__title'>
                    {title}
                  </div>
                  <div className='date'>
                    <img src={ calendarGreen } alt='' />
                    <div className='date__number'>
                      {begginingDate}
                    </div>
                  </div>
                  <div className='city'>
                    <img src={ location } alt='' />
                    <div className='city__title'>
                      {city}
                    </div>
                  </div>
                  <div className='information__skills'>
                    Java,C++,Ruby,Go
                </div>
                </div>
              </div>
            </NavLink>
          )
        }
      </I18n>
    );
  }
}
