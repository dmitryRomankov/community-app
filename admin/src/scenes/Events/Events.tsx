import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
  AppState,
} from 'store';

import {
  CaButton
} from 'components';

import {
  AuthStatus,
} from 'models';

import { history } from 'utils';

import { LoadEvents } from 'store/events';

import { EventsProps } from './Events.model';

import './Events.scss';


export class CaEventsPageComponent extends React.Component<EventsProps> {
  public componentWillMount(): void {
    const isAuthenticated = this.props.authStatus === AuthStatus.Authorized;

    if (!isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  public handleAddEvent = () => {
    history.push(`/events/add-event`);
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <div className='add-button-block'>
          <CaButton
            color='primary'
            type='submit'
            className='add-button'
            onClick={this.handleAddEvent}
          >
            Add New Event
          </CaButton>
        </div>
      </React.Fragment>
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
