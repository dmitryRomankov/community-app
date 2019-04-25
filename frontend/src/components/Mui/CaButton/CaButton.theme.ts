import { ButtonClassKey } from '@material-ui/core/Button';
import { StyleRules } from '@material-ui/core/styles';

import {
  defaultButtonTextColor,
  primaryButtonTextColor,
  secondaryButtonTextColor
} from 'style/muiTheme.colors';

export const MuiButton: Partial<StyleRules<ButtonClassKey>> = {
  root: {
    width: 'max-content',
    minWidth: '136px',
    height: '40px',
    borderRadius: '20px',
    backgroundColor: '#0084EA',
    color: defaultButtonTextColor,
    textTransform: 'none',
    fontFamily: '"Source Sans Pro", serif',
    fontSize: '1.6rem',
    fontWeight: 400,

    '&$disabled': {
      color: defaultButtonTextColor,
      opacity: 0.25
    },
  },
  textPrimary: {
    color: primaryButtonTextColor,
    borderColor: primaryButtonTextColor,
    backgroundColor: 'transparent',

    '&$disabled': {
      color: primaryButtonTextColor,
      borderColor: primaryButtonTextColor
    },
  },
  containedSecondary: {
    color: secondaryButtonTextColor
  },
};
