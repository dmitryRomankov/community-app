import { History } from 'history';

import {
  AuthStatus,
  Event,
} from 'models';

export interface EventsTabsProps {
  children?: JSX.Element;
  history: History;
  authStatus: AuthStatus;
  events: Event[];

  loadEvents(): void;
}
