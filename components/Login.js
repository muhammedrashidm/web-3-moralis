import Image from "next/image"
import { useMoralis } from "react-moralis"
function Login() {
    const { authenticate, isInitializing } = useMoralis()
    return (
        <div className="bg-black relative text-white">
            <h1>Logi</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">

                <Image className="object-cover rounded-full" src="https://links.papareact.com/3pi" width={200} height={200} />
                <button onClick={authenticate} className="bg-purple-500 p-5 rounded-lg ">Login to Metaverse</button>
            </div>

            <div className="w-full h-screen ">
                <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default Login
