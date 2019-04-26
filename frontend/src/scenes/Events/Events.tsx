import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { I18n } from 'react-i18next';
import { AppState } from 'store';
import { LoadEvents } from 'store/events';
import { AuthStatus } from 'models';

import { CaButton, CaEventsTabs } from 'components/Mui';

import './Events.scss';
import { EventsProps } from './Events.model';

const navButtonStyle = {
  minWidth: '16.8rem',
  width: 'max-content',
};

export class CaEventsPageComponent extends React.Component<EventsProps> {
  public componentWillMount(): void {
    const isAuthenticated = this.props.authStatus === AuthStatus.Authorized;

    if (!isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  public componentDidMount(): void {
    this.props.loadEvents();
  }

  public render(): JSX.Element {
    return (
      <I18n>
        {(t) => (
          <div className='events-page'>
            <div className='events-page__content'>
              <div className='btn-wrapper'>
                <div className='btn-container'>
                  <CaButton className='nav-btn' style={navButtonStyle}>
                    {t('Create new event')}
                  </CaButton>
                </div>
              </div>
              <CaEventsTabs {...this.props} />
            </div>
          </div>
        )}
      </I18n>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  authStatus: state.auth.status,
  events: state.events.events,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadEvents: () => dispatch(new LoadEvents()),
});

export const CaEvents = connect(
  mapStateToProps,
  mapDispatchToProps
)(CaEventsPageComponent);
