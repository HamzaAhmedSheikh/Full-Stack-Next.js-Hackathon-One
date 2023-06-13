import Image from 'next/image'
import HeroBanner from '../../components/HeroBanner'
import { StateContext } from '@/context/StateContext'
import Newletter from '@/components/Newsletter'
import Features from '@/components/Features'
import Promote from '@/components/Promote'
export default function Home() {
  return (
   <>
    <HeroBanner />
    {/* <Promote /> */}
    <Features />
    <Newletter />
   </>
  )
}
