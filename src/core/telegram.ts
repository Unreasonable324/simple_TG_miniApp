import { iWebApp } from './types';

let webApp: iWebApp;
// @ts-ignore
console.log("tgInfo", Telegram.WebApp);
// @ts-ignore
webApp = Telegram.WebApp;
console.log(webApp.initData);
export { webApp };
