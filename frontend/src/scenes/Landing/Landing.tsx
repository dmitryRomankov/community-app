import * as React from 'react';
import { connect } from 'react-redux';

// import { AuthStatus } from 'models';
import { I18n } from 'react-i18next';
import { AppState } from 'store';

import { LandingProps } from './Landing.model';
// import './landing.scss';

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
            <div className='ca-landing'>
              <div className='ca-landing__container'>
               
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
