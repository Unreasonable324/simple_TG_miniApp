import { iWebApp } from './types';

let webApp: iWebApp;
// @ts-ignore
console.log("tgInfo", Telegram.WebApp);
// @ts-ignore
webApp = Telegram.WebApp;
webApp.setHeaderColor("#f1f4fd");
webApp.setBackgroundColor("#fff");
webApp.isClosingConfirmationEnabled = true;
console.log(webApp.initData);
export { webApp };
