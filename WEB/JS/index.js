//03-11-2020

//----AGREGAR DATOS(C)
const user = new User("ALDA", "alda@gmail", "123alda");


function createUser(user){
    //ADD te pondrá un id predeterminado
    db.collection("users").add({...user}).then(function(doc){
        alert("Document created with id "+ doc.id);
    }).catch(function(error){
        alert("Ocurrio un error");
        console.log(error);
    })
}

function createUserWithId(user){
    //SET debes especificar un ID para el documento
    //Si el documento ya existe, lo actualizará
    db.collection("users").doc(user.nickName).set({...user});
    alert("Document created/updated")
}

//----LEER DATOS(R)
function getUsers(){
    db.collection("users").get().then(snapshot => {
        snapshot.forEach(sp => {
            console.log("------------------------------------------------------------")
            console.log(`ID: \t ${sp.id}`)
            console.log(sp.data())
        });
    })
}

function getUser({nickName}){
    db.collection("users").doc(nickName).get().then((doc)=>{
        if(doc.exists){
            console.log("Document exists")
            console.log(doc.data());
        }else{
            console.log("Any document exists with nickName: "+nickName)
        }
    }).catch((e)=>{
        alert("An error Ocurred");
        console.log(e);
    })
}


//----ACTUALIZAR DATOS(U)
function updatePassword({nickName, newPassword}){
    db.collection('users').doc(nickName).update({
        "password": newPassword
    }).then(()=>{
        alert("Password Updated")
    }).catch((e)=>{
        alert("An error Ocurred");
        console.log(e);
    })
}

//----ELIMINAR DATOS(D)
function deleteUser({nickName}){
    //DELETE: Eliminará todos los documentos y subdocumentos del mismo
    db.collection('users').doc(nickName).delete();
    console.log("Elemento borrado");
}


