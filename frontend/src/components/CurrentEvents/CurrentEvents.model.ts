import { History } from 'history';

import {
    AuthStatus,
    Event
} from 'models';

export interface CurrentEventsProps {
    children?: JSX.Element;
    history: History;
    authStatus: AuthStatus;
    events: Event[];

    loadEvents(): void;
}
