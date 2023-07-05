// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCEQeQm2o0azKNRugdYAZ_kl6L2APMmA3M',
	authDomain: 'fir-nextjs-fb5b8.firebaseapp.com',
	projectId: 'fir-nextjs-fb5b8',
	storageBucket: 'fir-nextjs-fb5b8.appspot.com',
	messagingSenderId: '119410119136',
	appId: '1:119410119136:web:068c98478ba0cd69c99b85',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
