import { useMoralis } from "react-moralis"

function ChangeUsername() {
    const { setUserData, isUserUpdating, userError, user } = useMoralis()

    const setUsername = () => {
        const username = prompt(`Enter your new username, Current username is ${user.getUsername()}`)
        if (!username) return
        setUserData({ username })
    }
    return (
        <div className="text-small absolute top-5 right-5">
            <button onClick={setUsername} disabled={isUserUpdating} className="bg-fuchsia-900 p-2 text-white  rounded-md hover:text-pink-700">Change username</button>
        </div>
    )
}

export default ChangeUsername
