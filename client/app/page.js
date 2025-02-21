import Body from '@/components/Body'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <div className='flex w-full h-[calc(100vh-80px)'>
        <Sidebar />
        <Body />
      </div>
    </div>
  )
}
