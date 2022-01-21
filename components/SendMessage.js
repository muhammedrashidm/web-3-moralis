import { useState } from "react"
import { useMoralis, ByMoralis, useMoralisQuery } from "react-moralis"

function SendMessage({ endOfMessages }) {
    const { user, Moralis } = useMoralis()
    const [message, setMessage] = useState("")


    const sendMessage = (e) => {
        e.preventDefault()

        if (!message) return

        const Messages = Moralis.Object.extend("Messages")

        const messages = new Messages()

        messages.save({
            message,
            username: user.getUsername(),
            ethAdress: user.get("ethAddress"),
        }).then(
            (message) => {
                console.log("Message saved successfully." + message.toString());
            }, (error) => {
                console.log(error);

            })
        setMessage("")
        endOfMessages.current.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <form className=" flex  px-4 py-4  bg-black opacity-80 max-w-2xl rounded-full border-2 border-blue-400">
            <input className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5" type="text"
                placeholder={`Enter a message ${user.getUsername()}`}
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button onClick={sendMessage} className="font-bold text-pink-500">Send</button>

        </form>
    )
}

export default SendMessage
