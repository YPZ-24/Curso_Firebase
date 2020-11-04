//03-11-2020

//----AGREGAR DATOS(C)
const user = new User("yepezaylin24@gmail.com", "yepez2425");

function signUp({email, password}){
    auth.createUserWithEmailAndPassword(email, password).then(()=>{
        alert("User created");
    }).catch((e)=>{
        alert("An error Ocurred");
        console.log(e);
    })
}

function signIn({email, password}){
    auth.signInWithEmailAndPassword(email, password).then(()=>{
        alert("Welcome...!");
    }).catch((e)=>{
        alert("An error Ocurred");
        console.log(e);
    })
}

function signOut(){
    auth.signOut().then(()=>{
        alert("Bye...!");
    }).catch((e)=>{
        alert("An error Ocurred");
        console.log(e);
    })
}

function sendEmailVerification(){
    //Envia el correo al usuario actual
    auth.currentUser.sendEmailVerification().then(()=>{
        alert("See your email")
    }).catch((e)=>{
        alert("An error Ocurred");
        console.log(e);
    })
}

function updatePassword(newPassword){
    auth.currentUser.updatePassword(newPassword).then(()=>{
        alert("Password updated")
    }).catch((e)=>{
        alert("An error Ocurred");
        console.log(e);
    })
}

function updateEmail(newEmail){
    auth.currentUser.updateEmail(newEmail).then(()=>{
        alert("Email updated")
    }).catch((e)=>{
        alert("An error Ocurred");
        console.log(e);
    })
}

function sendEmailUpdatePassword(email){
    auth.sendPasswordResetEmail(email).then(()=>{
        alert("See your email")
    }).catch((e)=>{
        alert("An error Ocurred");
        console.log(e);
    })
}

function deleteUser(){
    auth.currentUser.delete().then(()=>{
        alert("User deleted");
    }).catch((e)=>{
        alert("An error Ocurred");
        console.log(e);
    })
}

//Escuchador de authenticacion
//---Esta a la escucha de si un usuario esta autenticado o no
firebase.auth().onAuthStateChanged(function(user){
    console.log("--------------------------------------------");
    if(user){
        //Usuario activo
        console.log("Si hay usuario")
        console.log(`Email: ${user.email}`)
        console.log(`EmailVerified: ${user.emailVerified}`)
        console.log(`uid: ${user.uid}`)
    }else{
        //Usuario inactivo
        console.log("No hay usuario");
    }
    console.log("--------------------------------------------");
})

