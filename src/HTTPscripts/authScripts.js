import axios from 'axios'

const defaultURL = "http://localhost:5000/api/"

export function signUp(setIsRegistered, setAlertMessage, userToRegister){
    axios.post(`${defaultURL}auth/signup`, userToRegister)
    .then(response => {
        console.log(response.data)
        setIsRegistered(true)
    })
    .catch(mes =>{
        if(mes.response && mes.response.data){
            console.log(mes.response.data.message)
            setAlertMessage(mes.response.data.message)
        }
        
    }
    )
}

export function signIn(setAuthorized, setAlertMessage, userToRegister){
    axios.post(`${defaultURL}auth/signin`, userToRegister)
    .then(response => {
        console.log(response.data)
        setAuthorized(true)
    })
    .catch(mes =>{
        if(mes.response && mes.response.data){
            console.log(mes.response.data.message)
            setAlertMessage(mes.response.data.message)
        }
        
    }
    )
}