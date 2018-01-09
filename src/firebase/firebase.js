import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};


// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });




// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.id,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: "Rent",
//     note: '',
//     amount: 109500,
//     createdAt: 93939192
// });

// database.ref('expenses').push({
//     description: "Food",
//     note: '',
//     amount: 109500,
//     createdAt: 93939192
// });

// database.ref('expenses').push({
//     description: "test",
//     note: '',
//     amount: 109500,
//     createdAt: 93939192
// });


// database.ref().on('value',(snapshot) => {
//     const val = snapshot.val();

//     console.log(`${val.name} is a ${val.job} at ${val.job.company}`);
// });

// database.ref().once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('fetch failed', e);
// });

// database.ref().set({
//     name: "Chris Lam",
//     age: 28, 
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//         title: "Software Developer",
//         company: 'Google'
//     },
//     location: {
//         city: "SF",
//         country: "US"
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('this failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': "Seattle"
// });

// database.ref('attributes').set({
//     height: 73,
//     weight: 150
// }).then(() => {
//     console.log('worked');
// }).catch((e) => {
//     console.log('didnt work');
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('isSingle removed');
// }).catch((e) => {
//     console.log('isSingle did not remove');
// });