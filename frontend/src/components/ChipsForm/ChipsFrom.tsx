import * as React from 'react';

import './ChipsForm.scss';

import { CaCheckbox, CaInput } from '../Mui';

import { ChipsFormProps, ChipsFormState } from './ChipsForm.model';

export class ChipsForm extends React.Component<ChipsFormProps, ChipsFormState> {
  public constructor(props: ChipsFormProps) {
    super(props);

    this.state = {
      checkedItems: [],
      technologies: [
        { key: 0, label: 'Python' },
        { key: 1, label: 'JavaScript' },
        { key: 2, label: 'Java' },
        { key: 3, label: 'C++' },
        { key: 4, label: 'C#' },
        { key: 5, label: 'Go' },
        { key: 6, label: 'Ruby' },
        { key: 7, label: 'Scala' },
      ],
    };
  }

  public render(): JSX.Element {
    const checkboxes = this.state.technologies.map((technology: any) => (
      <div
        key={technology.key}
        className='chips-form__checkbox'
        onClick={() => {
          console.log(technology);
          this.props.getTechnologies(technology);
        }}
      >
        <CaCheckbox
          key={technology.key}
          label={technology.label}
        />
      </div>
    ));

    return (
      <form className={this.props.isShown ? 'chips-form' : 'hide'}>
        <CaInput />
        <div className='chips-form__checkboxes'>
          { checkboxes }
        </div>
      </form>
    );
  }
}
