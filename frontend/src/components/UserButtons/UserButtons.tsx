import * as React from 'react';
import { connect } from 'react-redux';
import { I18n } from 'react-i18next';

// import { UserButtonsProps } from './UserButtons.model';
import { AppState } from 'store';
import { CaButton } from 'components';
// import { AuthStatus } from 'models';

import './UserButtons.scss';

export class UserButtons extends React.Component<any> {

  // public componentDidMount(): void {

  //   if (this.props.status === AuthStatus.Authorized) {
  //     this.props.history.push('/');
  //   }
  // }

  public redToLogin = () => {
    console.log('/login');
  }

  public redToRegister = () => {
    console.log('register');
  }

  public render(): JSX.Element {
    return (
      <I18n>{t => (
        <div className='user-buttons'>
          <div className='user-buttons__container'>
            <button
              className='user-buttons__login-btn'
              onClick={this.redToLogin}
              color='primary'
            >
             {t('login')}
          </button>
            <CaButton
              className='user-buttons__register-btn'
              onClick={this.redToRegister}
            >
             {t('register')}
          </CaButton>
          </div>
        </div>
      )}</I18n>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  status: state.auth.status
});

export const DojoUserButtons = connect(
  mapStateToProps,
  {}
)(UserButtons);
