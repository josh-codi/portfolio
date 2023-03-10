// import { useState } from "react";

// const [nam, setNam] = useState('Josh')
let nam = 'Josh'
const AuthService = {
    name: () => {
        return localStorage.getItem('newName') ?? 'Josh'
    },
    setName: (newName) => {
        localStorage.setItem('newName', newName)
    }
}

export default AuthService;