function getAdmins(map){
    let admins =[];
    for([key,value] of map){
        if(value ==='Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuario.set('Luiz','Admin');
usuario.set('Stephany','Admin');
usuario.set('Jorge','User');
usuario.set('Nalália','Admin');

console.log(getAdmins(usuarios));