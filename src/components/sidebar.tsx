"use client"
import { GraduationCap, Hand, LayoutDashboardIcon, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import UserAvatar from './user-avatar'

const links = [
    {
        id: 1,
        name: "Dashboard",
        icon: LayoutDashboardIcon,
        path: "/dashboard"
    },
    {
        id: 2,
        name: "Attendance",
        icon: Hand,
        path: "/attendance"
    },
    {
        id: 3,
        name: "Students",
        icon: GraduationCap,
        path: "/students"
    },
    {
        id: 4,
        name: "Settings",
        icon: Settings,
        path: "/settings"
    }
]

const Sidebar = () => {
    const pathname = usePathname()

  return (
    <section className='flex flex-col justify-between border-2 h-screen p-5'>
        <div className='flex flex-col gap-5'>
            <div className='flex items-center border-b-2 pl-5 pb-3'>
                <Image src="/attendify.png" alt='Logo' width={60} height={60}/>
                <span className='text-3xl text-primary'>ttendify</span>
            </div>
            <nav className='flex flex-col gap-5 text-sm font-medium'>
                {links.map((link, index) =>{
                    return (
                        <Link className={`${link.path === pathname && "bg-primary/50"} flex items-center gap-3 px-5 py-4 rounded-lg cursor-pointer`} href={link.path} key={index}>
                            <link.icon />
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </div>
       <UserAvatar />
    </section>
  )
}

export default Sidebar