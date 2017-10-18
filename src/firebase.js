import * as firebase from "firebase";

class Firebase {
  constructor() {

    let config = {
      apiKey: 'AIzaSyCzhuaNc9cWsMr8lEWrrL-jPwVuauiwxC0',
      authDomain: 'demoanemia.firebaseapp.com',
      databaseURL: 'https://demoanemia.firebaseio.com',
      projectId: 'demoanemia',
      storageBucket: 'demoanemia.appspot.com',
      messagingSenderId: '997152978162'
   };
   firebase.initializeApp(config);
  }
  
  componentWillMount() {
		const userMon = firebase.database().ref().child("usuarioMom");
		  userMon.on("value",snapshot => {
				console.log(snapshot.val());
			})
  }
  
}
