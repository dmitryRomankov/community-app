import * as React from 'react';
import { I18n } from 'react-i18next';

import './EventCard.scss';
import { EventCardProps } from './EventCard.model';
import { NavLink } from 'react-router-dom';

import bookmark from 'assets/svg/icon-bookmark--check.svg';
import calendarGreen from 'assets/svg/icon-calendar--green.svg';
import location from 'assets/svg/icon-location.svg';

export class CaEventCard extends React.PureComponent<EventCardProps> {
  render() {
    const { id, title, city, begginingDate } = this.props;
    return (
      <I18n>
      {
        t => (
          <NavLink to={`/event/${id}`} >
            <div className='ca-about_card'>
              <div className='ca-about_card_img'>
                <div className='ca-about_card_img-bookmark'>
                  <img src={bookmark} alt='' />
                </div>
              </div>
              <div className='ca-about_card_information'>
                <div className='ca-about_card_information_title'>
                  {title}
                </div>
                <div className='ca-about_card_information_date'>
                  <img src={calendarGreen} alt='' />
                  <div className='ca-about_card_information_date-number'>
                    {begginingDate}
                  </div>
                </div>
                <div className='ca-about_card_information_city'>
                  <img src={location} alt='' />
                  <div className='ca-about_card_information_city-title'>
                    {city}
                  </div>
                </div>
                <div className='ca-about_card_information_skills'>
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
