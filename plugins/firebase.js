import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyB8Zfh7iofLQT1qMBjMlYS_CJrTuwTDrL0",
      authDomain: "fir-test-ad4b2.firebaseapp.com",
      projectId: "fir-test-ad4b2",
      storageBucket: "fir-test-ad4b2.appspot.com",
      messagingSenderId: "762639663574",
      appId: "1:762639663574:web:47816483ae00fef2e16477",
      measurementId: "G-SPNPXKXD3G"
    }
  )
}
  
export default firebase