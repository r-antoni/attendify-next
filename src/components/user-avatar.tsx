import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'

const UserAvatar = () => {
    const {user} = useKindeBrowserClient()

  return (
    <div className='flex items-center gap-3 text-xs pb-3'>
        <Image src={user?.picture} alt='User Picture' width={35} height={35} className='rounded-full'/>
        <div className='flex flex-col'>
            <p>{user?.given_name} {user?.family_name}</p>
            <p>{user?.email}</p>
        </div>    
    </div>
  )
}

export default UserAvatar