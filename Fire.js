import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0kA2ws17f5BgGm1PAlwl-Iv3a9hOFSTU",
  authDomain: "chat1-7ae1d.firebaseapp.com",
  databaseURL: "https://chat1-7ae1d-default-rtdb.firebaseio.com",
  projectId: "chat1-7ae1d",
  storageBucket: "chat1-7ae1d.appspot.com",
  messagingSenderId: "772813514414",
  appId: "1:772813514414:web:f77a3419ffd93f6f93af3f",
  measurementId: "G-3QEFPYDC4H",
};

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({firebaseConfig});
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
