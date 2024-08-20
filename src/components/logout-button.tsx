import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'

const LogoutButton = () => {
  return (
    <LogoutLink className='flex justify-end items-center gap-3'>
        <Image src="/logout.svg" alt='Logout Button' width={20} height={20} />
        <span>Logout</span>
    </LogoutLink>
  )
}

export default LogoutButton