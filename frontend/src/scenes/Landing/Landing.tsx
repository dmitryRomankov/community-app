import * as React from 'react';
import { connect } from 'react-redux';

import { AuthStatus } from 'models';
import { I18n } from 'react-i18next';
import { AppState } from 'store';
import { CaButton } from 'components';

import { LandingProps } from './Landing.model';
// import './landing.scss';

const style = {
  width: '152px'
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
                  <CaButton style={style}>
                    {t('startChallenge')}
                  </CaButton>
                </div>
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
