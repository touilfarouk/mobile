import { render } from "react-dom";
import App from "./components/App";



const APP = {
  isOnline: 'onLine' in navigator && navigator.onLine,
  //attempt to set the isOnline value
  
  init() {
    //show online status somewhere
    document.querySelector('.isOnOff').textContent = APP.probably();

    //listen for online and offline
    window.addEventListener('online', APP.goneOnline);
    window.addEventListener('offline', APP.goneOffline);

    

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
          console.log('SW registered: ', registration);
        }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
      });
  

      //listen for messages
      navigator.serviceWorker.addEventListener('message', ({ data }) => {
        //received a message from the service worker
        console.log(data, 'from service worker');
        //do something with the response from the service worker
        if ('isOnline' in data) {
          APP.isOnline = data.isOnline;
          let span = document.querySelector('.isOnOff');
          span.textContent = APP.isOnline
            ? 'Confirmed ONLINE'
            : 'Confirmed OFFLINE';
          if (APP.isOnline) {
            console.log('try to load another image');
            document.body.click();
          }
        }
      });
    }
  },
  goneOnline(ev) {
    APP.isOnline = true;
    document.querySelector('.isOnOff').textContent = 'ONLINE';
  },
  goneOffline(ev) {
    APP.isOffline = false;
    document.querySelector('.isOnOff').textContent = 'OFFLINE';
  },
  probably() {
    return APP.isOnline ? 'Probably Online' : 'Probably Offline';
  },
 
};
document.addEventListener('DOMContentLoaded', APP.init);


render(<App />, document.getElementById("root"));
