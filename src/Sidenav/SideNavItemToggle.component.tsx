import * as React from 'react';
import styled from 'styled-components';
import { SideNavContext } from './context';

export type Props = {
  /**
   * Show/Hide toggle button
   *
   * @default 'false'
   **/
  isToggleVisible?: boolean;
  /**
   * Is it the current item?
   *
   * @default 'false'
   **/
  isToggleOpen?: boolean;
  /**
   * Open toggle Button content
   *
   * @default '>'
   **/
  openContent?: JSX.Element | React.Component | string;
  /**
   * Close toggle Button content
   *
   * @default '<'
   **/
  closeContent?: JSX.Element | React.Component | string;
  /**
   * Click the Toggle Button
   *
   * @default 'void'
   **/
  onClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
const SSideNavItemToggle = styled.div`
  position: ${(props: Props) => props.theme.sidenav.itemToggle.position};
  right: ${(props: Props) => props.theme.sidenav.itemToggle.right};
  background: ${(props: Props) => props.theme.sidenav.itemToggle.background};
  height: ${(props: Props) => props.theme.sidenav.itemToggle.height};
  width: ${(props: Props) => props.theme.sidenav.itemToggle.width};
  display: ${(props: Props) => props.theme.sidenav.itemToggle.display};
  align-items: center;
  justify-content: center;
`;

export const SideNavItemToggle: React.FunctionComponent<Props> = ({
  isToggleVisible,
  isToggleOpen,
  onClick = () => {},
  openContent,
  closeContent,
  children,
  ...props
}) => {
  const {
    // baseProps: { isOpen },
  } = React.useContext(SideNavContext);

  const handleClick = (e: any) => {
    onClick(e);
  };
  return isToggleVisible ? (
    <SSideNavItemToggle
      role="side-nav-toggle"
      {...props}
      onClick={(e: any) => handleClick(e)}
    >
      {children}
      {!isToggleOpen && (openContent || <div>{'>'}</div>)}
      {isToggleOpen && (closeContent || <div>{'<'}</div>)}
    </SSideNavItemToggle>
  ) : null;
};

SideNavItemToggle.defaultProps = {
  isToggleVisible: false,
  isToggleOpen: false,
  openContent: '',
  closeContent: '',
};