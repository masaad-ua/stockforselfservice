import firebase from 'firebase'

export const appName = "stockforselfservice"
export const firebaseConfig = {
    apiKey: "AIzaSyCX2DjAwszeV8E7ClzjN_pDXbfh5RcH33U",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "983314935501",
    appId: "1:983314935501:web:1d92433817140ec18d0384",
    measurementId: "G-NC5H2YGK4J"
}

firebase.initializeApp(firebaseConfig)
firebase.analytics();