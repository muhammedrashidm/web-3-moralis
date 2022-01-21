import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header'
import Messages from '../components/Messages'
export default function Home() {

  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-800 overflow-hidden">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="max-w-screen-xl mx-auto">
          {/* head */}
          <Header />
          {/* mesage */}
          <Messages />

        </div>



      </div>
    </div>
  )
}
