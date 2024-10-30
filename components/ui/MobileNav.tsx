"use client";
import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Link } from 'lucide-react'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
  
const MobileNav = ({user }:MobileNavProps ) => {
    const pathName = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
            <Image src="/icons/hamburger.svg"  width={30} height={30} alt='menu'
            className='cursor-pointer'
            />
        </SheetTrigger>
        <SheetContent side="left">
        <Link href='/' className='mb-12 cursor-pointer flex items-center gap-2'>
                
                <Image src='/icons/logo.svg' width={34} height={34} alt=' banky logo' className='size-[24px] max-xl: size-14'/>
                <h1 className='sidebar-logo'>Banky</h1>
            </Link>

            {sidebarLinks.map((item)=>{
                const isActive =  pathName === item.route || pathName.startsWith('${item.route}/')
                return (
                    <Link key={item.label} href={item.route} className={cn('sidebar-link',{'bg-bank-gradient': isActive})}>
                        <div className='relative size-6'>
                            <Image src={item.imgURL} alt={item.label} fill 
                            className={cn({
                                'brightness-[3] invert-0':isActive
                            })}
                            />
                        </div>
                        <p className={cn('sidebar-label',{
                            '!text-white': isActive
                        })}>
                            {item.label}
                        </p>
                    </Link>
                )
            })}
        </SheetContent>
      </Sheet>
  
    </section>
  )
}

export default MobileNav