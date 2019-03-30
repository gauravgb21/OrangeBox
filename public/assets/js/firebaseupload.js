// var mainBody= document.querySelector("body");
// mainBody.onload= function() {
// }
import firebase from 'firebase'
    var config = {
      apiKey: 'AIzaSyBiQFWX-K78Uj49N--rMF8z5piALyLWHXo',
      authDomain: 'ithink-fbc4c.firebaseapp.com',
      databaseURL: 'https://ithink-fbc4c.firebaseio.com',
      storageBucket: 'ithink-fbc4c.appspot.com'
    };
    firebase.initializeApp(config);
    var storage = firebase.storage();
