import * as React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import { CurrentEvents } from 'components/CurrentEvents';
import { EventsArchive } from 'components/EventsArchive';

import './CaEventsTabs.scss';
import { EventsTabsProps } from './CaEventsTabs.model';

const TabContainer = (props: any): JSX.Element => {
  return (
    <Typography component='div'>
      {props.children}
    </Typography>
  );
};

export class CaEventsTabs extends React.Component<EventsTabsProps> {
  public state = {
    currentTab: 0,
  };

  public handleChange = (event: any, currentTab: any) => {
    this.setState({currentTab});
  }

  public render(): JSX.Element {
    const { currentTab } = this.state;

    return (
      <React.Fragment>
        <Tabs className='tabs' value={currentTab} onChange={this.handleChange}>
          <Tab className='tab' label='Current & Future Events' />
          <Tab className='tab' label='Archive Reports' />
        </Tabs>

        {currentTab === 0 && <TabContainer>{<CurrentEvents {...this.props} />}</TabContainer>}
        {currentTab === 1 && <TabContainer>{<EventsArchive {...this.props} />}</TabContainer>}
      </React.Fragment>
    );
  }
}
