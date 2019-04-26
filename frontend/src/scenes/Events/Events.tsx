import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from 'store';
import { LoadEvents } from 'store/events';
import { AuthStatus } from 'models';

import { CaEventsTabs } from 'components/Mui';

import './Events.scss';
import { EventsProps } from './Events.model';

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
      <div className='wrapper'>
        <div className='event-head'>
          <div className='event-nav'>
            <div className='nav'>
              <CaEventsTabs {...this.props}/>
            </div>
            <button className='event-nav__create-event-btn'>Create new event</button>
          </div>
        </div>
      </div>
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
