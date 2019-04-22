import { History } from 'history';

import { AuthStatus, Event } from 'models';

export interface LandingProps {
  status: AuthStatus;
  history: History;
  events: Event[];

  loadEvents(): void;
}
