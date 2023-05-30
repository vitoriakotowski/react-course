import {useState} from 'react'

function Conditional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function submitEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function cleanEmail() {
        setUserEmail()
    }

    return (
        <div>
            <h2>Enter your e-mail:</h2>
            <form>
                <input type='email' placeholder='Type your e-mail...' onChange={(e) => setEmail(e.target.value)} />
                <button type='submit' onClick={submitEmail}>Submit e-mail</button>
                {userEmail && (
                    <div>
                        <p>The user's e-mail is {userEmail}</p>
                        <button onClick={cleanEmail}>Clean e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Conditional