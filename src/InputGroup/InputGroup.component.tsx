import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export type Props = {
  /** the content of the input group  */
  // children?: React.ReactNode[] | Function;
  /** the label of the input group  */
  label?: string;
  /**
   * Set Input Size
   *
   * @default 'md'
   **/
  inputSize: 'sm' | 'md' | 'lg';
  /**
   * Set orientation of inputGroup as vertical
   *
   * @default false
   **/
  vertical?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const InputGroupWrapper = styled.div`
  overflow: hidden;
  border-radius: ${(props: Props) => props.theme.borders.radius};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  color: ${(props: Props) => props.theme.inputGroup.root.color};
  display: ${(props: Props) => props.theme.inputGroup.root.display};
  flex-wrap: ${(props: Props) => props.theme.inputGroup.root.flexWrap};
  flex-direction: ${(props: Props) => (props.vertical ? 'column' : 'row')};
  > *:not(:first-child) {
    flex-grow: 1;
  }
`;
const SLabel = styled.label`
  background: inherit;
  overflow: hidden;
  height: auto;
  padding: ${(props: Props) =>
    props.label ? props.theme.inputGroup.label.padding : '0'};
  font-weight: ${(props: Props) => props.theme.inputGroup.label.fontWeight};
  font-size: ${(props: Props) => props.theme.common[props.inputSize!].fontSize};
  color: ${(props: Props) => props.theme.body.color};
`;

export const InputGroup: React.FunctionComponent<Props> = ({
  inputSize,
  theme,
  children,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <InputGroupWrapper inputSize={inputSize} {...props}>
      <SLabel label={props.label} inputSize={inputSize}>
        {props.label}
      </SLabel>
      {children}
    </InputGroupWrapper>
  </ThemeProvider>
);
InputGroup.defaultProps = {
  inputSize: 'md',
  label: '',
  vertical: false,
  theme: Themes.defaultTheme,
};
