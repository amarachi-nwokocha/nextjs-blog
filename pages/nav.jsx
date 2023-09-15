import styles from "../styles/Home.module.css";
import NavigationIcon from "./NavigationIcon";
import IconSearch from "../Components/icons/iconSearch";
import IconNavMovie from '../Components/icons/iconMovie'
import categoryTv from '../Components/icons/iconMovie'
import IconNavHome from '../Components/icons/iconMovie'
import Link from 'next/link'
import AppIcon from "../Components/icons/AppLogo";
import ProfilePic from '../assets/image-avatar.png'
import Image from 'next/image'
export default function Nav() {
   return(
    <nav className='sticky top-0 z-50 flex items-center justify-between bg-app-semi-dark-blue p-5 md:mx-6 md:mt-6 md:mb-[33px] md:rounded-[10px] lg:fixed lg:left-0 lg:mr-0 lg:h-5/6 lg:flex-col lg:py-9'>
    <Link href='/' passHref>
    <AppIcon />  
    </Link>
    <div className='flex w-1/2 items-center justify-between lg:h-[200px] lg:flex-col 2xs:w-2/5'>
      <NavigationIcon href='/'>
        <IconNavHome />
      </NavigationIcon>
      <NavigationIcon href='/movie'>
        <IconNavMovie />
      </NavigationIcon>
      <NavigationIcon href='/tv'>
        <categoryTv />
      </NavigationIcon>
      {/* <NavigationIcon href="/bookmark">
        <IconNavBookmark />
      </NavigationIcon> */}
    </div>
    <div className='flex items-center justify-center rounded-full bg-app-pure-white p-px'>
      <Image
        className='rounded-full'
        src={ProfilePic}
        alt='user avatar'
        height={24}
        width={24}
        unoptimized
      />
    </div>
  </nav>
   )
}