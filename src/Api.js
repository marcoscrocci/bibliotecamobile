//import firebase from 'firebase/app';
// import 'firebase/firebase-auth';
// import 'firebase/firebase-firestore';
import  firebase from "firebase"
import 'firebase/storage';
import b64 from 'base-64';
import { 
    REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_PROJECT_ID,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGING_SENDER_ID,
    REACT_APP_APP_ID,
    REACT_APP_MEASUREMENT_ID
} from '@env';

const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID,
    measurementId: REACT_APP_MEASUREMENT_ID
};

// console.log('apiKey: ' + firebaseConfig.apiKey);
// console.log('authDomain: ' + firebaseConfig.authDomain);
// console.log('projectId: ' + firebaseConfig.projectId);
// console.log('storageBucket: ' + firebaseConfig.storageBucket);
// console.log('messagingSenderId: ' + firebaseConfig.messagingSenderId);
// console.log('appId: ' + firebaseConfig.appId);
// console.log('measurementId: ' + firebaseConfig.measurementId);

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ experimentalForceLongPolling: true, merge: true });
// const db = firebaseApp.firestore();

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true });
const db = firebase.firestore();

const metodos = {

    listarColecao: (colecao, setLista) => {
        db.collection(colecao).where("ativo", "==", true).onSnapshot(query => {
            const lista = [];
            query.forEach(doc => {
                lista.push({...doc.data(), id: doc.id});
            });
            setLista(lista);
            //console.log('Lista:', list);
        });
    },

    excluirItemColecao: (colecao, objeto) => {
        objeto.ativo = false;
        //alert(`coleção: ${colecao} - id: ${JSON.stringify(objeto)}`);
        db.collection(colecao).doc(objeto.id).update(objeto)
        .then(() => {
            return objeto;
        })
        .catch((error) => {
            console.log(error.message);
            alert(`Código: ${error.code} - Mensagem: ${error.message}`);
        })
    },

    salvarItemColecao: (colecao, objeto) => {
        if (usuario.id) {
            // Alterar informações do item da coleção
            db.collection(colecao).doc(objeto.id).update(objeto)
            .then(() => {
                return objeto;
            })
            .catch((error) => {
                console.log(error.message);
                alert(`Código: ${error.code} - Mensagem: ${error.message}`);
            })
        } else {
            db.collection(colecao).add(objeto)
            .then(() => {
                return objeto;
            })
            .catch((error) => {
                console.log(error.message);
                alert(`Código: ${error.code} - Mensagem: ${error.message}`);
            });
        }
    }

//     autenticarUsuario: async ({ email, senha }) => {
//         const firebaseAuth = firebaseApp.auth();
//         return new Promise(function (resolve, reject) {
//             firebaseAuth.signInWithEmailAndPassword(email, senha)
//             .then(() => {
//                 const usuario = firebaseAuth.currentUser;
//                 //console.log(JSON.stringify(usuario.email));
//                 let emailB64 = b64.encode(usuario.email);
//                 //console.log('emailB64 =', emailB64);

//                 var usuarioInfo = db.collection("usuarios").doc(emailB64);
//                 usuarioInfo.get().then((doc) => {
//                     if (doc.exists) {
//                         let usuarioAutenticado = doc.data();
//                         usuarioAutenticado.id = emailB64; // id do documento
//                         usuarioAutenticado.uid = usuario.uid; // uid do usuário no firebase
//                         //console.log("Document data:", usuarioAutenticado);
//                         if (usuarioAutenticado.ativo) {
//                             resolve(usuarioAutenticado);
//                         } else {
//                             console.log("No such document!");
//                             const error = {
//                                 code: 'auth/user-disabled',
//                                 message: 'User disabled'
//                             } 
//                             reject(error);
//                         }
//                     } else {
//                         // doc.data() will be undefined in this case
//                         console.log("No such document!");
//                         const error = {
//                             code: 'auth/user-info-not-found',
//                             message: 'User information not found'
//                         } 
//                         reject(error);
//                     }
//                 }).catch((error) => {
//                     console.log(error.message);
//                     const customError = {
//                         code: 'auth/error-get-user-info',
//                         message: error.message
//                     }
//                     reject(customError);
//                 });                
//             })
//             .catch((error) => {
//                 reject(error);
//                 //alert(`Código: ${error.code} - Mensagem: ${error.message}`);
//             });

//         });

//     },

//     listarUsuarios: async (legenda) => {
//         return new Promise((resolve, reject) => {
//             const lista = [];
//             db.collection("usuarios").where("ativo", "==", true)
//             .get()
//             .then((querySnapshot) => {
//                 querySnapshot.forEach((doc) => {
//                     const usuario = doc.data();
//                     usuario.id = doc.id;
//                     usuario.administradorLegenda = usuario.administrador ? legenda.sim : legenda.nao;  
//                     lista.push(usuario);
//                     //console.log(doc.id, " => ", doc.data());
//                 });
//                 //console.log(lista);
//                 resolve(lista);
//             })
//             .catch((error) => {
//                 console.log(error.message);
//                 const customError = {
//                     code: 'auth/error-get-user-list',
//                     message: error.message
//                 }
//                 reject(customError);
//                 //alert(`Código: ${error.code} - Mensagem: ${error.message}`);
//             });
//         });
//     },

//     salvarUsuario: async (usuario) => {
//         return new Promise((resolve, reject) => {
//             if (usuario.id) {
//                 // Alterar informações do usuário
//                 const usuarioInfo = {
//                     administrador: usuario.administrador,
//                     ativo: usuario.ativo,
//                     email: usuario.email,
//                     id: usuario.id,
//                     nome: usuario.nome
//                 }
//                 db.collection("usuarios").doc(usuario.id).update(usuarioInfo)
//                 .then(() => {
//                     resolve(usuario);
//                 })
//                 .catch((error) => {
//                     console.log(error.message);
//                     const customError = {
//                         code: 'auth/error-update-user',
//                         message: error.message
//                     }
//                     reject(customError);
//                     //alert(`Código: ${error.code} - Mensagem: ${error.message}`);
//                 })
//             } else {
//                 // Adicionar um usuário novo
//                 const { email, senha } = usuario;
//                 const firebaseAuth = firebaseApp.auth();
//                 firebaseAuth.createUserWithEmailAndPassword(email, senha)
//                 .then(user => {
//                     let emailB64 = b64.encode(email);
//                     //console.log(emailB64);
//                     const usuarioInfo = {
//                         administrador: usuario.administrador,
//                         ativo: usuario.ativo,
//                         email: usuario.email,
//                         id: emailB64,
//                         nome: usuario.nome
//                     }
//                     db.collection("usuarios").doc(emailB64).set(usuarioInfo, {merge: true})
//                     .then(() => {
//                         resolve(usuario);
//                     })
//                     .catch((error) => {
//                         console.log(error.message);
//                         const customError = {
//                             code: 'auth/error-add-user',
//                             message: error.message
//                         }
//                         reject(customError);
//                         //alert(`Código: ${error.code} - Mensagem: ${error.message}`);
//                     });
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                     reject(error);
//                     //alert(`Código: ${error.code} - Mensagem: ${error.message}`);
//                 });
//             }
//         });
//     },

//     listarLivros: async () => {
//         return new Promise((resolve, reject) => {
//             const lista = [];
//             db.collection("livros").where("ativo", "==", true)
//             .get()
//             .then((querySnapshot) => {
//                 querySnapshot.forEach((doc) => {
//                     const item = doc.data();
//                     console.log('item =', item);
//                     item.id = doc.id;
//                     lista.push(item);
//                 });
//                 resolve(lista);
//             })
//             .catch((error) => {
//                 console.log(error.message);
//                 const customError = {
//                     code: 'book/error-get-book-list',
//                     message: error.message
//                 }
//                 reject(customError);
//             });
            
//             resolve(lista);
//         });
//     },

//     salvarLivro: async (livro) => {
//         return new Promise((resolve, reject) => {
//             if (livro.id) {
//                 db.collection("livros").doc(livro.id).update(livro)
//                 .then(() => {
//                     resolve(livro);
//                 })
//                 .catch((error) => {
//                     console.log(error.message);
//                     const customError = {
//                         code: 'book/error-update-book',
//                         message: error.message
//                     }
//                     reject(customError);
//                     //alert(`Código: ${error.code} - Mensagem: ${error.message}`);
//                 })
//             } else {
//                 db.collection("livros").add(livro)
//                 .then(() => {
//                     resolve(livro);
//                 })
//                 .catch((error) => {
//                     console.log(error.message);
//                     const customError = {
//                         code: 'book/error-add-book',
//                         message: error.message
//                     }
//                     reject(customError);
//                     //alert(`Código: ${error.code} - Mensagem: ${error.message}`);
//                 });
//             }
//         });
//     },

//     /*** TESTES ***/
//     verificarUsuarioAutenticado: async () => {
//         const firebaseAuth = firebaseApp.auth();
//         const usuario = firebaseAuth.currentUser;
//         if (usuario) {
//             alert(JSON.stringify(usuario));
//         } else {
//             alert("Não há usuários autenticados no Firebase!");
//         }
//     },
//     usuarioSair: async () => {
//         const usuario = firebaseApp.auth();
//         usuario.signOut();
//     },
//     adicionarTeste: async () => {
//         db.collection('teste').doc().set({
//             nome: "Teste da Silva",
//             idade: 33
//         })
//         .then((docRef) => {
//             console.log(docRef.id)
//         });
//         // db.collection('teste').add({
//         //     nome: "Teste da Silva",
//         //     idade: 33
//         // })
//         // .then((docRef) => {
//         //     console.log(docRef.id)
//         // });
//     },
//     obterListaLivros: async () => {
//         const querySnapshot = await db.collection("livros").where("ativo", "==", true).get();
//         console.log(querySnapshot);
        
//     }
}

export default metodos;
