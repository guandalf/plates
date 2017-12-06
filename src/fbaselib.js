import * as firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBxV5fi2avHNNfqooVzCdafwzUoJsPFF0Q',
  authDomain: 'scorching-heat-9667.firebaseapp.com',
  databaseURL: 'https://scorching-heat-9667.firebaseio.com',
  projectId: 'scorching-heat-9667',
  storageBucket: 'scorching-heat-9667.appspot.com',
  messagingSenderId: '629992007676'
}

let firebaseApp = firebase.initializeApp(config)
export const db = firebaseApp.database()
