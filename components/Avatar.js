import Image from "next/image"
import { useMoralis } from "react-moralis"

function Avatar({ username, logOutOnpress }) {
    const { user, logout } = useMoralis()
    return (
        <div>
            <Image
                src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`}
                className="rounded-full bg-black cursor-pointer hover:opacity-75"

                layout="fill"
                onClick={() => logOutOnpress && logout()}

            />
        </div>
    )
}

export default Avatar
