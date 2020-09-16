import { defaultColors } from './default';

export { ThemeProvider } from 'styled-components';

export const umberColors = {
  white: '#ffffff',
  black: '#000000',
  highlight400: '#D5E9FD',
  highlight200: '#F3F9FF',
  drk800: '#303E47',
  drk600: '#687279',
  drk400: '#A7ADB1',
  drk200: '#C6CACC',
  lt800: '#DADCDE',
  lt600: '#E6E8EA',
  lt400: '#F0F2F4',
  lt200: '#F5F7F8',
  primary: '#3398FF',
  primaryHover: '#1F70D3',
  primaryFaded: '#94C8FD',
  primaryBackground: '#E2F0FD',
  success: '#1FBF42',
  successHover: '#14862D',
  successFaded: '#A4E8B3',
  successBackground: '#E8FFED',
  danger: '#FA320E',
  dangerHover: '#DD2301',
  dangerFaded: '#FD9380',
  dangerBackground: '#FFDFD9',
  warning: '#FF8833',
  warningHover: '#E65900',
  warningFaded: '#FFB07F',
  warningBackground: '#FEE8D7',
  secondary: '#A7ADB1',
  secondaryHover: '#687279',
  secondaryFaded: '#DADCDE',
  secondaryBackground: '#F5F7F8',
};

export const umberTheme = {
  name: 'umber',
  colors: umberColors,
  borders: {
    radius: '1px',
    radiusSm: '3.2px',
    radiusLg: '4.8px',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: umberColors.primary,
      flood: umberColors.primary,
      disabledFlood: umberColors.drk200,
      lightFlood: umberColors.primaryFaded,
      hoverlightFlood: umberColors.primaryFaded,
      text: umberColors.primary,
      reverseText: umberColors.white,
      hoverFlood: umberColors.primaryHover,
      selectedFlood: umberColors.primaryHover,
      badgeBackground: umberColors.primaryHover,
      badgeColor: umberColors.white,
      alertColor: umberColors.white,
      alertBackground: umberColors.primary,
      notificationColor: umberColors.white,
      notificationBackground: umberColors.primary,
      light: {
        alertColor: umberColors.drk800,
        alertBackground: umberColors.primaryBackground,
        notificationColor: umberColors.drk800,
        notificationBackground: umberColors.primaryBackground,
        badgeBackground: umberColors.primaryBackground,
        badgeColor: umberColors.primary,
      },
      cardTopBorderColor: umberColors.primary,
    },
    secondary: {
      borderColor: umberColors.secondary,
      flood: umberColors.secondary,
      disabledFlood: umberColors.drk200,
      lightFlood: umberColors.secondaryFaded,
      hoverlightFlood: umberColors.secondaryFaded,
      text: umberColors.primary,
      reverseText: umberColors.white,
      hoverFlood: umberColors.secondaryHover,
      selectedFlood: umberColors.secondaryHover,
      badgeBackground: umberColors.drk600,
      badgeColor: umberColors.white,
      alertColor: umberColors.white,
      alertBackground: umberColors.drk600,
      notificationColor: umberColors.white,
      notificationBackground: umberColors.drk600,
      light: {
        alertColor: umberColors.drk800,
        alertBackground: umberColors.secondaryBackground,
        notificationColor: umberColors.drk800,
        notificationBackground: umberColors.secondaryBackground,
        badgeBackground: umberColors.secondaryBackground,
        badgeColor: umberColors.secondary,
      },
      cardTopBorderColor: umberColors.secondary,
    },
    danger: {
      borderColor: umberColors.danger,
      flood: umberColors.danger,
      disabledFlood: umberColors.drk200,
      lightFlood: umberColors.dangerFaded,
      hoverlightFlood: umberColors.dangerFaded,
      text: umberColors.danger,
      reverseText: umberColors.white,
      hoverFlood: umberColors.dangerHover,
      selectedFlood: umberColors.dangerHover,
      badgeBackground: umberColors.danger,
      badgeColor: umberColors.white,
      alertColor: umberColors.white,
      alertBackground: umberColors.danger,
      notificationColor: umberColors.white,
      notificationBackground: umberColors.danger,
      light: {
        alertColor: umberColors.drk800,
        alertBackground: umberColors.dangerBackground,
        notificationColor: umberColors.drk800,
        notificationBackground: umberColors.dangerBackground,
        badgeBackground: umberColors.dangerBackground,
        badgeColor: umberColors.danger,
      },
      cardTopBorderColor: umberColors.danger,
    },
    warning: {
      borderColor: umberColors.warning,
      flood: umberColors.warning,
      disabledFlood: umberColors.drk200,
      lightFlood: umberColors.warningFaded,
      hoverlightFlood: umberColors.warningFaded,
      text: umberColors.warning,
      reverseText: umberColors.white,
      hoverFlood: umberColors.warningHover,
      selectedFlood: umberColors.warningHover,
      badgeBackground: umberColors.warning,
      badgeColor: umberColors.white,
      alertColor: umberColors.white,
      alertBackground: umberColors.warning,
      notificationColor: umberColors.white,
      notificationBackground: umberColors.warning,
      light: {
        alertColor: umberColors.drk800,
        alertBackground: umberColors.warningBackground,
        notificationColor: umberColors.drk800,
        notificationBackground: umberColors.warningBackground,
        badgeBackground: umberColors.warningBackground,
        badgeColor: umberColors.warning,
      },
      cardTopBorderColor: umberColors.warning,
    },
    success: {
      borderColor: umberColors.success,
      flood: umberColors.success,
      disabledFlood: umberColors.drk200,
      lightFlood: umberColors.successFaded,
      hoverlightFlood: umberColors.successFaded,
      text: umberColors.success,
      reverseText: umberColors.white,
      hoverFlood: umberColors.successHover,
      selectedFlood: umberColors.successHover,
      badgeBackground: umberColors.successHover,
      badgeColor: umberColors.white,
      alertColor: umberColors.white,
      alertBackground: umberColors.success,
      notificationColor: umberColors.white,
      notificationBackground: umberColors.success,
      light: {
        alertColor: umberColors.drk800,
        alertBackground: umberColors.successBackground,
        notificationColor: umberColors.drk800,
        notificationBackground: umberColors.successBackground,
        badgeBackground: umberColors.successBackground,
        badgeColor: umberColors.success,
      },
      cardTopBorderColor: umberColors.success,
    },
  },
  pagination: {
    text: umberColors.drk800,
    fontWeight: 'normal',
    padding: '4px 0',
    background: umberColors.white,

    activeText: umberColors.primary,
    activeFontWeight: 'bold',
    activeBackground: umberColors.white,
    disabledText: umberColors.secondaryHover,
    disabledBackground: umberColors.white,
    hoverTextColor: umberColors.primary,
    hoverBackground: umberColors.white,
    hoverFontWeight: 'bold',

    button: {
      width: '24px',
      height: '24px',
      fontWeight: 'normal',
      padding: '3px 3px 4px',
      borderColor: umberColors.white,
      activeBorderColor: umberColors.primary,
      disabledBorderColor: umberColors.white,
      disabledText: umberColors.lt600,
      hoverBorderColor: umberColors.white,
      hoverBackground: umberColors.lt400,
    },
  },

  body: {
    fontFamily: 'Roboto, Helvetica, arial, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '18px',
    color: umberColors.drk800,
    backgroundColor: umberColors.white,
  },
  button: {
    outlineBackgroundColor: umberColors.white,
    sm: {
      fontSize: '11px',
      padding: '7px 8px',
      lineHeight: '12px',
    },
    md: {
      fontSize: '14px',
      padding: '8px 14px',
      lineHeight: '14px',
    },
    lg: {
      fontSize: '16px',
      padding: '10px 16px',
      lineHeight: '18px',
    },
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, arial, sans-serif',
    secondaryFontFamily: '',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '160%',
    color: umberColors.drk800,
    caption: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '10px',
        lineHeight: '100%',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '100%',
      },
    },
    bodyText: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '100%',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '160%',
      },
    },
    code: {
      background: umberColors.lt200,
      fontFamily:
        '"Roboto Mono", Consolas, "Andale Mono", "DejaVu Sans Mono", monospace',
      fontSize: '95%',
      lineHeight: '140%',
    },
    digits: {
      fontWeight: '700',
      fontSize: '18px',
    },
    display: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '27px',
        lineHeight: '125%',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '37px',
        lineHeight: '120%',
      },
    },
    header: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '175%',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '175%',
      },
    },
    link: {
      fontWeight: '500',
      fontSize: '14px',
      color: umberColors.primary,
      textDecoration: 'none',
      disabled: {
        color: umberColors.drk400,
      },
      visited: {
        color: umberColors.primary,
        textDecoration: 'underline',
      },
      hover: {
        color: umberColors.primaryHover,
        textDecoration: 'underline',
      },
    },
    pre: {
      background: umberColors.lt200,
      fontFamily: '"Roboto Mono", Courier, monospace',
      fontSize: '100%',
      lineHeight: '100%',
    },
    sectionHeader: {
      fontWeight: '500',
      fontSize: '16px',
      borderWidth: '1px',
      borderColor: '#8D9599',
      borderStyle: 'solid',
    },
    subHeading: {
      fontWeight: '500',
      fontSize: '16px',
    },
    subTitle: {
      fontWeight: '300',
      fontSize: '18px',
      lineHeight: '135%',
    },
    title: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '130%',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '135%',
      },
    },
  },
  input: {
    background: umberColors.white,
    border: `1px solid ${umberColors.drk400}`,
    color: umberColors.drk800,
    fontSize: '14px',
    placeholderColor: umberColors.drk400,
    disabled: {
      background: umberColors.lt600,
      border: `1px solid ${umberColors.lt600}`,
      addonTextColor: umberColors.drk400,
    },
    sm: {
      height: '26px',
      padding: '4px 7px',
      iconTop: '0px',
    },
    md: {
      height: '30px',
      padding: '8px 10px',
      iconTop: '0px',
    },
    lg: {
      height: '38px',
      padding: '11px 16px 13px',
      iconTop: '0px',
    },
  },
  inputGroup: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      color: umberColors.drk800,
      horizontalMargin: '12px 0',
    },
    label: {
      padding: '8px 16px 4px 0',
      fontWeight: 500,
      horizontalWidth: '300px',
    },
  },
  radioButton: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: umberColors.primary,
    disabledText: umberColors.drk200,
    unselectedColor: umberColors.white,
    stackedSpacing: '10px',
    inlineSpacing: '20px',
    sm: {
      size: '6px',
    },
    md: {
      size: '10px',
    },
    lg: {
      size: '14px',
    },
  },
  checkbox: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: umberColors.primary,
    disabledText: umberColors.drk200,
    unselectedColor: umberColors.white,
    selectedColor: umberColors.primary,
    stackedSpacing: '10px',
    inlineSpacing: '20px',
    sm: {
      height: '28px',
      squareSize: '6px',
      squareMargin: '7px 0',
      indeterminateTopPosition: '3px',
      checkedTopPosition: '7px',
      marginLeft: '4px',
    },
    md: {
      height: '32px',
      squareSize: '10px',
      squareMargin: '7px 0',
      indeterminateTopPosition: '5px',
      checkedTopPosition: '9px',
      marginLeft: '6px',
    },
    lg: {
      height: '40px',
      squareSize: '14px',
      squareMargin: '8px 0',
      indeterminateTopPosition: '7px',
      checkedTopPosition: '11px',
      marginLeft: '6.5px',
    },
  },
  toggle: {
    background: {
      inactiveColor: umberColors.lt800,
      inactiveBorderColor: umberColors.lt800,
      activeColor: umberColors.lt800,
      activeBorderColor: umberColors.lt800,
      disabled: umberColors.lt400,
      disabledBorderColor: umberColors.lt400,
    },
    inactiveColor: umberColors.drk600,
    inactiveBorderColor: umberColors.drk600,
    activeColor: umberColors.primary,
    activeBorderColor: umberColors.primary,
    activeDisabledColor: umberColors.drk200,
    activeDisabledBorderColor: umberColors.drk200,
    inactiveDisabledColor: umberColors.drk200,
    inactiveDisabledBorderColor: umberColors.drk200,
    sm: {
      toggleSize: '20px',
      toggleOffsetTop: '-3px',
      toggleOffsetLeft: '0px',
      activeOffset: '0px',
      backgroundHeight: '15px',
      backgroundWidth: '35px',
    },
    md: {
      toggleSize: '25px',
      toggleOffsetTop: '-5px',
      toggleOffsetLeft: '0px',
      activeOffset: '0px',
      backgroundHeight: '15px',
      backgroundWidth: '45px',
    },
    lg: {
      toggleSize: '30px',
      toggleOffsetTop: '-5px',
      toggleOffsetLeft: '0px',
      activeOffset: '0px',
      backgroundHeight: '20px',
      backgroundWidth: '55px',
    },
  },
  label: {
    padding: '9px 8px',
  },
  listGroup: {
    theme: {
      light: {
        color: umberColors.drk800,
        backgroundColor: umberColors.white,
        chevronColor: defaultColors.primary,
      },
      dark: {
        color: umberColors.drk800,
        backgroundColor: umberColors.highlight200,
        chevronColor: defaultColors.primary,
      },
    },
  },
  modal: {
    header: {
      minHeight: '0',
      backgroundColor: umberColors.white,
      borderColor: umberColors.lt800,
      padding: '15px',
      fontSize: '16px',
      color: umberColors.drk800,
    },
    body: {
      minHeight: '0',
      backgroundColor: umberColors.white,
      borderBottom: umberColors.lt800,
      padding: '15px',
      color: umberColors.drk800,
    },
    footer: {
      minHeight: '0',
      backgroundColor: umberColors.white,
      borderColor: umberColors.lt800,
      padding: '15px',
    },
    overlay: {
      zIndex: '999999',
    },
    sm: {
      width: '300px',
    },
    md: {
      width: '745px',
    },
    lg: {
      width: '1220px',
    },
  },
  textarea: {
    background: umberColors.white,
    backgroundDisabled: umberColors.secondaryBackground,
    borderColor: umberColors.secondary,
    color: umberColors.drk800,
    padding: '6px 12px',
    placeholderColor: umberColors.drk400,
    disabled: {
      background: umberColors.lt600,
      borderColor: umberColors.secondaryFaded,
    },
  },
  panel: {
    header: {
      padding: '14px 16px',
    },
    body: {
      padding: '30px 30px',
    },
    borderWidth: '1px',
    headerBorderColor: umberColors.drk400,
    bodyBackgroundColor: umberColors.lt200,
    bodyBorderColor: umberColors.drk400,
    headerColor: umberColors.primary,
    headerBackgroundColor: umberColors.white,
  },
  badge: {
    borderRadius: '4px',
    fontSize: '15px',
    padding: '4px 3px 3px',
    sm: {
      borderRadius: '4px',
      fontSize: '12px',
      padding: '4px 3px 3px',
    },
    md: {
      borderRadius: '4px',
      fontSize: '15px',
      padding: '4px 3px 3px',
    },
    lg: {
      borderRadius: '4px',
      fontSize: '18px',
      padding: '4px 3px 3px',
    },
  },
  alert: {
    borderRadius: '1px',
    fontSize: '14px',
    padding: '8px 16px',
    fontWeight: '400',
    lightFontWeight: 'bold',
    lineHeight: '18px',
  },
  notification: {
    borderRadius: '1px',
    fontSize: '14px',
    padding: '8px 16px',
    fontWeight: 'bold',
    lineHeight: '18px',
  },
  card: {
    borderRadius: '2px',
    borderColor: umberColors.lt800,
    fontSize: '14px',
    padding: '8px 16px',
    background: umberColors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,.075) !important;',
    highlightAllBorderWidth: '1px',
    highlightedBorderWidth: '5px',
  },
  popover: {
    withArrowDistance: 10,
    withoutArrowDistance: 9,
    background: umberColors.white,
    color: umberColors.drk800,
    borderRadius: '1px',
    borderColor: umberColors.lt800,
    boxShadow: `0 0 5px ${umberColors.lt800}`,
  },
  tooltip: {
    background: umberColors.drk800,
    borderRadius: '1px',
  },
  common: {
    sm: {
      borderRadius: '1px',
      fontSize: '11px',
      padding: '4px 8px',
      tableCellPadding: '5px 0',
      inputIconSize: '14px',
    },
    md: {
      borderRadius: '1px',
      fontSize: '14px',
      padding: '8px 16px',
      tableCellPadding: '9px 0',
      inputIconSize: '20px',
    },
    lg: {
      borderRadius: '1px',
      fontSize: '16px',
      padding: '10px 16px',
      tableCellPadding: '11px 0',
      inputIconSize: '24px',
    },
  },
  validation: {
    borderColor: umberColors.danger,
    color: umberColors.drk800,
    fontSize: '11px',
    fontStyle: 'italic',
    padding: '4px',
  },
  table: {
    fontSize: '14px',
    border: `1px solid ${umberColors.lt800}`,
    header: {
      borderBottomColor: umberColors.drk800,
      color: umberColors.drk800,
      fontWeight: 'bold',
    },
    row: {
      borderBottomColor: umberColors.drk400,
      highlightColor: umberColors.highlight200,
      hoverColor: umberColors.lt200,
      readonlyColor: umberColors.lt200,
    },
    column: {
      highlightColor: umberColors.highlight200,
      readonlyColor: umberColors.lt200,
    },
  },
  datepicker: {
    zIndex: 99,
  },
  tabs: {
    color: umberColors.drk800,
    borderColor: umberColors.primary,
    hoverColor: umberColors.primaryFaded,
    borderRadius: '0px',
    bottomBorderWidth: '4px',

    fontSize: '14px',
    padding: '0 0 4px 0',
    margin: '16px 16px 0 16px',
  },
  copyToClipboard: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: umberColors.drk800,
    background: umberColors.lt200,
    copiedColor: umberColors.drk400,
    padding: '16px',
    button: {
      textTransform: 'uppercase',
      height: '20px',
      fontWeight: 600,
      primaryColor: umberColors.primary,
      successColor: umberColors.success,
      margin: '0 4px',
    },
  },
  navbar: {
    height: '64px',
    background: umberColors.white,
    padding: '0 45px ',
    borderTop: '',
    borderBottom: '',
    color: umberColors.drk800,
  },
  tabnav: {
    background: umberColors.highlight200,
    padding: '0 32px',
    borderTop: 'none',
    borderBottom: `1px solid ${umberColors.lt800}`,
    color: umberColors.drk800,
    tab: {
      padding: '4px 0 8px',
      margin: '0 56px 0 0',
      color: 'inherit',
      fontWeight: 'inherit',
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      bottomBorderWidth: '0',
      bottomBorderColor: 'transparent',
      transition: 'opacity 0.15s',
      iconColor: umberColors.primary,
    },
    activetab: {
      color: umberColors.drk800,
      fontWeight: 700,
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      bottomBorderWidth: '4px',
      bottomBorderColor: umberColors.primary,
      iconColor: umberColors.primary,
    },
    tabDropdown: {
      color: umberColors.drk800,
      background: umberColors.white,
      padding: '8px 16px',
      hoverColor: umberColors.primary,
      hoverBackground: umberColors.lt200,
    },
  },
  sidenav: {
    fontSize: '14px',
    color: umberColors.primary,
    height: '',
    width: '50px',
    openWidth: '220px',
    background: umberColors.lt200,
    padding: '',
    margin: '',
    zIndex: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 'auto',
    borderLeft: '',
    borderRight: `1px solid ${umberColors.lt800}`,
    transition: 'min-width 0.15s',
    secondaryNavbar: {
      width: '0px',
      openWidth: '170px',
      background: umberColors.white,
      padding: '80px 0 16px',
      margin: '',
      zIndex: 4,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 'auto',
      borderLeft: '',
      borderRight: `1px solid ${umberColors.lt800}`,
      transition: 'left 0.15s',
    },
    nav: {
      padding: '',
      margin: '',
    },
    toggle: {
      height: '80px',
      cursor: 'pointer',
      padding: '0 12px',
      borderBottom: `1px solid ${umberColors.lt800}`,
      display: 'grid',
    },
    navItem: {
      color: 'inherit',
      fontWeight: 'inherit',
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      leftBorderWidth: '0',
      leftBorderColor: 'transparent',
      topNavBorderBottom: `1px solid ${umberColors.lt800}`,
      bottonNavBorderBottom: '',
      transition: 'opacity 0.15s',
    },
    activenavItem: {
      color: umberColors.primary,
      fontWeight: 700,
      cursor: 'pointer',
      background: umberColors.white,
      opacity: '1',
      leftBorderWidth: '4px',
      leftBorderColor: umberColors.primary,
      topNavBorderBottom: `1px solid ${umberColors.lt800}`,
      bottonNavBorderBottom: '',
    },
    activeSecnavItem: {
      color: umberColors.primary,
      fontWeight: 700,
      background: umberColors.lt200,
    },
    itemToggle: {
      position: 'absolute',
      right: '0',
      background: umberColors.lt200,
      height: '100%',
      width: '30px',
      display: 'flex',
    },
    navIcon: {
      padding: '8px 0 8px 12px',
    },
    navText: {
      padding: '8px 0 8px 12px',
    },
  },
  spinner: {
    backgroundColor: umberColors.lt800,
    borderColor: umberColors.primary,
  },
  itemContainer: {
    borderColor: umberColors.lt800,
  },
  select: {
    color: umberColors.drk800,
    dropdownColor: umberColors.drk800,
    optionBackgroundColor: umberColors.white,
    hoverOptionBackgroundColor: umberColors.lt200,
    hoverOptionColor: umberColors.primary,
    selectedOptionColor: umberColors.primary,
    selectedOptionBackgroundColor: umberColors.white,
    borderColor: umberColors.secondary,
    width: '100%',
    disabled: {
      color: umberColors.drk800,
      dropdownColor: umberColors.drk400,
      borderColor: umberColors.lt600,
      backgroundColor: umberColors.lt600,
      placeholderColor: umberColors.drk400,
    },
    sm: {
      height: '28px',
      padding: '2px 10px',
    },
    md: {
      height: '32px',
      padding: '3px 10px 2px',
    },
    lg: {
      height: '40px',
      padding: '6px 13px',
    },
    multiSelect: {
      badgeBackgroundColor: umberColors.lt600,
      disabled: {
        badgeBackgroundColor: umberColors.drk200,
      },
      sm: {
        height: '26px',
        padding: '0px 10px',
        valueMargin: '2px 8px 2px 0',
        labelHeight: '20px',
        borderRadius: '4px',
        indicatorsPosition: '0px',
      },
      md: {
        height: '28px',
        padding: '2px 10px 0 10px',
        valueMargin: '0 8px 2px 0',
        labelHeight: '24px',
        borderRadius: '4px',
        indicatorsPosition: '0px',
      },
      lg: {
        height: '33px',
        padding: '5px 13px 0 13px',
        valueMargin: '0 8px 5px 0',
        labelHeight: '28px',
        borderRadius: '4px',
        indicatorsPosition: '0px',
      },
    },
  },
  fileUpload: {
    fontSize: '14px',
    dropZone: {
      color: umberColors.secondaryHover,
      border: `1px dashed ${umberColors.lt800}`,
      draggingBorder: `1px dashed ${umberColors.drk400}`,
      borderRadius: '1px',
      textAlign: 'center',
      padding: '16px',
      margin: '0 0 16px',
      ctaColor: umberColors.primary,
      background: umberColors.white,
      draggingBackground: umberColors.lt200,
    },
    file: {
      defaultColor: umberColors.drk800,
      primaryColor: umberColors.primary,
      dangerColor: umberColors.danger,
      background: umberColors.lt200,
      borderRadius: '1px',
      textAlign: 'left',
      padding: '16px',
      margin: '3px 0',
    },
  },
  progressBar: {
    height: '8px',
    borderRadius: '6px',
    background: umberColors.lt800,
    progressBackground: umberColors.primary,
    transition: 'width .2s ease-in',
  },
  toast: {
    position: {
      top: '20px',
      left: '20px',
      right: '20px',
      bottom: '20px',
    },
  },
};
