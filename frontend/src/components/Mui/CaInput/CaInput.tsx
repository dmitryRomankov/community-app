import * as React from 'react';

import Input from '@material-ui/core/Input';
import { styles } from './CaInput.styles';
import { createStyled } from 'utils';
import './CaInput.scss';

const Styled = createStyled(styles);

interface InputTheme {
  darkTheme?: boolean;
  placeholder: string;
}

export function CaInput(props: InputTheme): JSX.Element {
  return (
    <Styled>{({ classes }) => (
      <Input
        id='input-placeholder'
        style={ props.darkTheme ? {background: '#252934'} : undefined}
        className={classes.input}
        disableUnderline={true}
        type='text'
        placeholder={props.placeholder}
      />
    )}</Styled>
  );
}
