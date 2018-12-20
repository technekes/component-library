import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /** the content of the panel  */
  children?: React.ReactNode;
  /** the title of the panel  */
  title?: string;
  /** 'default', 'primary', 'success', 'warning', 'danger'
   *  @default 'default'
   */
  panelStyle: string;
  /** whether the panel can be collapsed
   *  @default 'false'
   */
  collapsible?: boolean;
  /** whether the panel is collapsed or not
   *  @default 'false'
   */
  isCollapsed?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
const PanelWrapper = styled.div`
  border: ${(props: Props) =>
    `${props.theme.borders.width} solid ${props.theme.styles[props.panelStyle]
      .borderColor || '#eee'}`};
  overflow: hidden;
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  border-radius: ${(props: Props) => props.theme.borders.radius};
`;
const PanelHeader = styled.div`
  background: ${(props: Props) =>
    props.theme.styles[props.panelStyle].lightFlood};
  padding: 5px 8px;
  border-bottom: 1px solid
    ${(props: Props) => props.theme.styles[props.panelStyle].borderColor};
  font-size: 20px;
  color: ${(props: Props) => props.theme.styles[props.panelStyle].text};
  &:hover {
    background: ${(props: Props) =>
      props.collapsible
        ? props.theme.styles[props.panelStyle].hoverLightFlood
        : 'auto'};
    cursor: ${(props: Props) => (props.collapsible ? 'pointer' : 'auto')};
  }
`;
const PanelBody = styled.div`
  background: white;
  overflow: hidden;
  height: auto;
  padding: ${(props: Props) => '5px 8px'};
  font-size: 16px;
  opacity: ${(props: Props) => 1};
  transition: all 300ms ease-in-out;
`;

const initialState = {
  isCollapsed: false,
};
type State = Readonly<typeof initialState>;

export class Panel extends React.Component<Props, State> {
  static Header: React.Component;
  static Body: React.Component;
  private bodyRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.bodyRef = React.createRef();
    this.handleToggleCollapse.bind(this);
  }

  readonly state: State = initialState;
  localIsCollapsed: boolean = false;

  componentWillReceiveProps(nextProps: Props) {
    this.localIsCollapsed = !!nextProps.isCollapsed;
    this.handleToggleCollapse();
  }

  handleToggleCollapse() {
    if (this.bodyRef.current) {
      this.localIsCollapsed
        ? collapseSection(this.bodyRef.current)
        : expandSection(this.bodyRef.current);
    }

    this.setState({
      isCollapsed: this.localIsCollapsed,
    });
  }

  toggleItem() {
    this.localIsCollapsed = !this.localIsCollapsed;
    this.handleToggleCollapse();
  }

  render() {
    return (
      <PanelWrapper panelStyle={this.props.panelStyle}>
        <PanelHeader
          panelStyle={this.props.panelStyle || 'default'}
          collapsible={this.props.collapsible}
          onClick={() => {
            this.toggleItem();
          }}
        >
          {this.props.title} {this.props.isCollapsed}
        </PanelHeader>
        <PanelBody
          panelStyle={this.props.panelStyle || 'default'}
          isCollapsed={this.localIsCollapsed}
          ref={this.bodyRef}
        >
          {this.props.children}
        </PanelBody>
      </PanelWrapper>
    );
  }
}

const collapseSection = (element: HTMLElement | null) => {
  if (element !== null) {
    const sectionHeight = element.scrollHeight;
    const elementTransition = element.style.transition;
    element.style.transition = '';
    requestAnimationFrame(() => {
      element.style.height = `${sectionHeight}px`;
      element.style.transition = elementTransition;
      requestAnimationFrame(() => {
        element.style.height = '0px';
        element.style.padding = '0 8px';
        element.style.opacity = '0';
      });
    });
  }
};

const expandSection = (element: HTMLElement) => {
  const sectionHeight = element.scrollHeight;
  element.style.height = `${sectionHeight}px`;
  element.style.padding = '5px 8px';
  element.style.opacity = '1';
};
