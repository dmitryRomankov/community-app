import * as React from 'react';
import { connect } from 'react-redux';

// import { AuthStatus } from 'models';
import { I18n } from 'react-i18next';
import { AppState } from 'store';
import { CaButton, CaEventCard } from 'components';

import { LandingProps } from './Landing.model';
import './landing.scss';

import jsSvg from 'assets/svg/js-icon.svg';
import goSvg from 'assets/svg/go-icon.svg';
import sharpSvg from 'assets/svg/sharp-icon.svg';
import javaSvg from 'assets/svg/java-icon.svg';
import cPlusSvg from 'assets/svg/cpp_logo.png';
import pythonSvg from 'assets/svg/python-icon.svg';
import rubySvg from 'assets/svg/ruby-icon.svg';

const landingButtonStyle = {
  width: 'max-content'
};

const eventButton = {
  width: '152px',
  backgroundColor: '#303644',
  border: '1px solid #fff'
};

class LandingComponent extends React.Component<LandingProps> {
  // public componentDidMount(): void {
  //   if (this.props.status === AuthStatus.Authorized) {
  //     this.props.history.push('/homepage');
  //   }
  // }

  public redToLogin = () => {
    this.props.history.push('/login');
  }

  public redToRegister = () => {
    this.props.history.push('/register');
  }

  public render(): JSX.Element {
    return (
      <I18n>
        {
          (t) => (
            <div className='landing'>
              <div className='landing__container'>
                <div className='landing__title'>
                  <p className='landing__title-text'>{t('practiceandLearn')}</p>
                  <p className='landing__title-description'>{t('challengeDescription')}</p>

                  <CaButton style={landingButtonStyle}>
                    {t('startChallenge')}
                  </CaButton>
                </div>
              </div>

              <div className='landing__event-section'>
                <div className='landing__event-description'>
                  <h1 className='landing__practice-event'>Practice code on events</h1>
                  <p className='landing__event-motivation'>
                    Feel free to visit one of our events to explore innovative technologies, to
                    <span className='landing__event-motivation landing__event-motivation--center'> meet or join dream team</span>
                  </p>
                </div>

                <div className='landing__event-card-section'>
                  <CaEventCard
                    id={1}
                    title='First event'
                    city='Mogilev'
                    place='Nebo'
                    begginingInTime='12:00'
                    begginingDate='11/22/33'
                  />
                </div>

                <div className='landing__event-btn'>
                  <CaButton style={eventButton}>
                    {t('All events')}
                  </CaButton>
                </div>

                <section className='landing-banner'>
                  <div className='landing-banner__event-banner'>
                    <div className='landing-banner__event-heading-container'>
                      <h1 className='landing-banner__heading'>
                        <div>Create an event in</div>
                        <div>three simple steps</div>
                      </h1>
                    </div>
                    <div className='landing-banner__description-container'>
                      <p className='landing-banner__description'>
                        We will show you that it is very simple
                     </p>
                    </div>
                  </div>
                </section>

                <section className='landing-banner'>
                  <div className='landing-banner__programming-banner'>
                    <div className='landing-banner__programming-heading-container'>
                      <h1 className='landing-banner__heading'>
                        <div>Learn new programming</div>
                        <div>languages</div>
                      </h1>
                    </div>
                    <div className='landing-banner__icons-container'>
                      <img src={jsSvg} />
                      <img src={goSvg} />
                      <img src={sharpSvg} />
                      <img src={javaSvg} />
                      <img src={cPlusSvg} />
                      <img src={pythonSvg} />
                      <img src={rubySvg} />
                    </div>
                  </div>
                </section>

              </div>
            </div>
          )
        }
      </I18n>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  status: state.auth.status
});

export const Landing = connect(
  mapStateToProps,
  {}
)(LandingComponent);
