import { useState } from 'react'

function Form() {
    function enterUser(e) {
        e.preventDefault()
        console.log(`The user ${name} has been entered with the password: ${password}`)
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    return (
        <div>
            <h1>Register User:</h1>
                <form onSubmit={enterUser}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" name="name" placeholder="What's your name?" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" name="password" placeholder="Tell me your password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <input type="submit" placeholder="Enter" />
                    </div>
                </form>
        </div>
    )
}

export default Form