import { useRef } from "react"
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis"
import Message from "./Message"
import SendMessage from "./SendMessage"
const MINS_DURATION = 15

function Messages() {
    const { user } = useMoralis()
    const endOfMessages = useRef(null)
    const { data, loading, error } = useMoralisQuery(
        "Messages",
        (query) =>
            query.ascending('createdAt')
                .greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * MINS_DURATION)
                ),
        [],
        {
            live: true,
        }

    )
    return (
        <>

            <div className=" w-full">

                <div className="my-5">
                    <ByMoralis
                        variant="dark"
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                    />
                </div>

                <div className="space-y-10 p-4">
                    {
                        data.map(message => {
                            return <Message key={message.id} message={message} />

                        })
                    }
                </div>




                <div ref={endOfMessages} className="text-center text-gray-400 mt-5">
                    <p>You're up to date {user.getUsername()}</p>
                </div>
            </div>
            <div className="absolute  bottom-10  w-full   px-auto">
                <SendMessage endOfMessages={endOfMessages} />
            </div>

        </>
    )
}

export default Messages
