import * as React from 'react';

import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { ChipsForm } from 'components';
import { CaChipsTheme } from './CaChips.theme';
import { CaChipsState } from './CaChips.model';

import './CaChips.scss';

export class CaChips extends React.Component<any, CaChipsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isFormShown: false,
      chips: [],
    };

    this.showChipsForm = this.showChipsForm.bind(this);
    this.getTechnologies = this.getTechnologies.bind(this);
  }

  public showChipsForm(): void {
    this.setState(prevState => ({
      isFormShown: !prevState.isFormShown
    }));
  }

  public getTechnologies(value: any): void {
    const technologies = this.state.chips;
    technologies.push(value);
    console.log(technologies);

    this.setState({ chips: technologies });
  }

  public render(): JSX.Element {
    const handleDelete = (chipsItem: any) => () => {
      const chipsArray = this.state.chips;
      const chipToDelete = chipsArray.indexOf(chipsItem);
      chipsArray.splice(chipToDelete, 1);
      this.setState({ chips: chipsArray });
    };

    return (
      <MuiThemeProvider theme={CaChipsTheme}>
        <section className='test'>
          <Paper onClick={this.showChipsForm}>
            {this.state.chips.map((chipsItem: any) => {
              return (
                <Chip
                  key={chipsItem.key}
                  label={chipsItem.label}
                  onDelete={handleDelete(chipsItem)}
                />
              );
            })}
          </Paper>
          <ChipsForm
            getTechnologies={this.getTechnologies}
            isShown={this.state.isFormShown}
          />
        </section>
      </MuiThemeProvider>
    );
  }
}
