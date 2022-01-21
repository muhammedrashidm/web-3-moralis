import Image from "next/image"
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar"
import ChangeUsername from "./ChangeUsername"

function Header() {

    const { isAuthenticated, user, logout } = useMoralis()
    return (
        <div className="sticky top-0 shadow-sm border-b-purple-700 text-pink-500 bg-black py-4">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center ">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image objectFit="cover" className="rounded-full" layout="fill" src="https://links.papareact.com/3pi" />
                </div>

                <div className="col-span-4 text-left lg:text-center">
                    <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
                        <Avatar />

                    </div>
                    <h1 className="text-3xl">Welcome to Metaverse</h1>

                    <h2 className="text-5xl font-bold truncate" > {user.getUsername()}</h2>

                    <ChangeUsername />
                </div>


                <button className="bg-fuchsia-900 p-4 text-white  rounded-md absolute right-5 top-16 lg:top-5 lg:left-5 hover:text-pink-700" onClick={logout}>LogOut</button>
            </div>
        </div>
    )
}

export default Header
