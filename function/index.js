//Generate function with firebase-functions packages
const functions = require('firebase-functions');

//to access firestore with functions
const admin=require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//generate a function indicating a message
exports.firstFunction = functions.https.onRequest((req, res) => {
 res.send("Hello steemit!");
});

//Adds documents to the collection
const createNotification=(notification)=>{

    //We are adding data to the notifications collection.
    return admin.firestore().collection('notifications').add(notification)
    .then(doc=>console.log('notification added',doc));
};

//function that controls projects collection
exports.projectCreated=functions.firestore.document('projects/{projectId}')
.onCreate(doc=>{

    //Access the added project.
    const project=doc.data();
    //Create the notification object
    const notify={
        content:'Added a new project',
        user:`${project.authorName} ${project.authorLastName}`,
        time:admin.firestore.FieldValue.serverTimestamp()
    };

    //add notification object
    return createNotification(notify);
});

//function that controls authenticaiton
exports.userJoined=functions.auth.user().onCreate(user=>{

    return admin.firestore().collection('users').doc(user.uid).get().then(doc=>{

        const newUser=doc.data();
        const notify={
            content:'Joined the application',
            user:`${firstName} ${lastName}`,
            time:admin.firestore.FieldValue.serverTimestamp()
        }

         //add notification object
        return createNotification(notify);


    })
});


