import firebase, {database} from '../../firebase';

export const registerUserAPI =  (data) => (dispatch) => {
	dispatch({type: 'CHANGE_LOADING', value:true})
 return (
 		firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
		.then (res => {
  		console.log('succes: ', res);
		dispatch ({type: 'CHANGE_LOADING', value:false})
		})
		.catch(function(error) {
		 var errorCode = error.code;
		 var errorMessage = error.message;
		 console.log(errorCode, errorMessage)
		 dispatch ({type: 'CHANGE_LOADING', value:false})
		})
 	)
}

export const loginUserAPI =  (data) => (dispatch) => {
 return new Promise ((resolve, reject) => {
		dispatch({type: 'CHANGE_LOADING', value:true})
 		firebase.auth().signInWithEmailAndPassword(data.email, data.password)
		.then (res => {
  		console.log('succes: ', res);
  		const datauser = {
  			email: res.user.email,
  			uid: res.user.uid,
  			emailVerified: res.user.emailVerified
  		}
		dispatch ({type: 'CHANGE_LOADING', value:false})
		dispatch ({type: 'CHANGE_ISLOGIN', value:true})
		dispatch ({type: 'CHANGE_AUTH', value:false})
		dispatch ({type: 'CHANGE_USER', value: datauser})
		resolve(datauser)
		})
		.catch(function(error) {
		 var errorCode = error.code;
		 var errorMessage = error.message;
		 console.log(errorCode, errorMessage)
		 dispatch ({type: 'CHANGE_LOADING', value:false})
		 dispatch ({type: 'CHANGE_ISLOGIN', value:false})
		 dispatch ({type: 'CHANGE_AUTH', value:false})
		reject(false)
		})
	})
}

export const addDataApi = (data) => (dispatch) => {
	database.ref('notes/' + data.userId).push({
		judul: data.judul,
		solusi: data.solusi,
		date: data.date

	})
}
