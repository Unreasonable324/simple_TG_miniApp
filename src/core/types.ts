interface iBackButton {
  isVisible: boolean;
  onClick: Function;
}

interface iUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  language_code: string;
}

interface iInitDataUnsafe {
  auth_date: string;
  query_id: string;
  hash: string;
  user: iUser;
}

interface iMainButton {
  text: string;
  color: string;
  textColor: string;
  isVisible: boolean;
  isActive: boolean;
  show: Function;
  hide: Function;
  onClick: Function;
  offClick: Function;
  disable: Function;
  enable: Function;
}

interface iHapticFeedback {
  notificationOccurred: Function;
  selectionChanged: Function;
  impactOccurred: Function;
}

export interface iWebApp {
  initData: string;
  initDataUnsafe: iInitDataUnsafe;
  expand: Function;
  MainButton: iMainButton;
  BackButton: iBackButton;
  onEvent: Function;
  offEvent: Function;
  PopupButton: Function;
  showConfirm: Function;
  HapticFeedback: iHapticFeedback;
  setBackgroundColor: Function;
  setHeaderColor: Function;
  isClosingConfirmationEnabled: boolean;
  showAlert: Function;
  openLink: Function;
  openTelegramLink: Function;
  switchInlineQuery: Function;
  requestWriteAccess: Function;
  openInvoice: Function;
  sendData: Function;
  postEvent: Function;
  close: Function;
}
