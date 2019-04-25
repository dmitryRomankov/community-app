import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// import { CaEvents } from 'scenes';
import { ControlPanel } from 'components/ControlPanel';
// import { EventsArchive } from 'components/EventsArchive';

function TabContainer(props: any): JSX.Element {
  return (
    <Typography component='div'>
      {props.children}
    </Typography>
  );
}

export class CaEventsTabs extends React.Component {
  state = {
    currentTab: 0,
  };

  handleChange = (event: any, currentTab: any) => {
    this.setState({currentTab});
  }

  public render(): JSX.Element {
    const { currentTab } = this.state;
    // const { events } = this.props;

    return (
      <React.Fragment>
        <Tabs value={currentTab} onChange={this.handleChange}>
          <Tab label='Current & Future Events' />
          <Tab label='Archive Reports' />
        </Tabs>
        {/* {currentTab === 0 && <TabContainer>{<EventsArchive {...events} />}</TabContainer>}
        {currentTab === 1 && <TabContainer>{<CaEvents {...events} />}</TabContainer>} */}
        {currentTab === 0 && <TabContainer>{<ControlPanel />}</TabContainer>}
      </React.Fragment>
    );
  }
}
