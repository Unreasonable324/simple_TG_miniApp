import { iWebApp } from './types';

let webApp: iWebApp;
// @ts-ignore
webApp = window.Telegram.WebApp;
export { webApp };
