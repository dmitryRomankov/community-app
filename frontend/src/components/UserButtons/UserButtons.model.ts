import { History } from 'history';

import { AuthStatus } from 'models';

export interface UserButtonsProps {
  history: History;
  status: AuthStatus;
}
