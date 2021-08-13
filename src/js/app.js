

const APP = {
    isOnline: 'onLine' in navigator && navigator.onLine,
    //attempt to set the isOnline value
    
    init() {
      
      //show online status somewhere
      document.querySelector('.isOnOff').textContent = APP.probably();
  
      //listen for online and offline
      window.addEventListener('online', APP.goneOnline);
      window.addEventListener('offline', APP.goneOffline);
  
      
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