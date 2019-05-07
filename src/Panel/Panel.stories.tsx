import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';

import { Panel, PanelHeader, PanelBody, Collapse } from '../';

type Props = {
  isOpen: boolean;
};

const initialState = {
  isOpen: true,
};

type State = Readonly<typeof initialState>;

class PanelWithCollapse extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.handleCollapse = this.handleCollapse.bind(this);
  }

  readonly state: State = initialState;

  handleCollapse() {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    const panelStyle = select(
      'panelStyle',
      ['success', 'default', 'primary', 'danger', 'warning'],
      'default',
    );
    return (
      <Panel name={text('Panel Name', 'Catchy Name')} panelStyle={panelStyle}>
        <PanelHeader
          panelStyle={panelStyle}
          headerColor={text('headerColor', 'lightGray')}
          headerBackgroundColor={text('headerBackgroundColor', 'lightGray')}
          headerBorderColor={text('headerBorderColor', 'lightGray')}
          name={text('Panel Name', 'Catchy Name')}
          title={text('Title', 'Catchy title')}
          toggleItem={this.handleCollapse}
          isCollapsed={this.state.isOpen}
        />
        <Collapse isOpen={this.state.isOpen}>
          <PanelBody
            panelStyle={panelStyle}
            noPadding={boolean('noPadding', false)}
            bodyBackgroundColor={text('bodyBackgroundColor', 'lightBackground')}
            bodyBorderColor={text('bodyBorderColor', 'lightGray')}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            beatae nostrum quo fuga iste reprehenderit ab fugit, soluta ea!
            Culpa, dignissimos dolores! Delectus fugiat numquam doloremque
            consequuntur tempora ipsam excepturi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe, reiciendis culpa incidunt
            corporis dolorem eum ullam totam cum iusto voluptate, maxime modi
            porro aperiam eveniet tempore ea? Quidem, at harum!
          </PanelBody>
        </Collapse>
      </Panel>
    );
  }
}

storiesOf('Panel', module).add(
  'Panel With Collapse',
  () => <PanelWithCollapse isOpen={true} />,
  {
    info: {
      text: `
        ### Notes

        
        `,
    },
  },
);
