"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { z } from "zod"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { signIn, signUp } from '@/lib/actions/user.actions'




const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const FormSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // onSubmit function
    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        setisLoading(true);
        try{
            if(type === 'sign-up'){
                const newUser = await signUp(data);
                setUser(newUser);
            }
            if(type === 'sign-in'){
                const response = await signIn({email: data.email,
                    password: data.password,}
                );
                if(response) router.push('/');
            }
        }catch(error){
            console.log(error);
        }finally{
            setisLoading(false);
        } // This should be inside the function scope
    }

    // Return statement starts here
    return (
        <section className='auth-form'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link href="/" className="cursor-pointer flex items-center gap-1 ">
                    <Image 
                      src="/icons/logo.svg"
                      width={34}
                      height={34}
                      alt="logo"
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Banky</h1>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                        {user ? 'Link Account'
                            : type === 'sign-in'
                            ? 'Sign In'
                            : 'Sign Up'
                        }
                    </h1>
                    <p className='text-16 font-normal text-gray-600'>
                        {user
                        ? 'Link your account please'
                        : 'Please enter your details'}
                    </p>
                </div>
            </header>
            {user ? (
                <div className='flex flex-col gap-4'>
                    {/* plaidLink */}
                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {type === 'sign-up' && (
                                
                                <>
                                        <div className='flex gap-4'>
                                        <CustomInput
                                        control={form.control}
                                        name='firstName'
                                        label='First Name'
                                        placeholder='Enter your First Name'
                                        formMessage=''
                                        type='text' /><CustomInput
                                            control={form.control}
                                            name='lastName'
                                            label='Last Name'
                                            placeholder='Enter your Last Name'
                                            formMessage=''
                                            type='text' />
                                             </div>
                                            <CustomInput
                                            control={form.control}
                                            name='address'
                                            label='Address'
                                            placeholder='Enter your Address'
                                            formMessage=''
                                            type='text' />
                                            <div className='flex gap-4'>
                                            <CustomInput
                                            control={form.control}
                                            name='city'
                                            label='City'
                                            placeholder='Enter your City'
                                            formMessage=''
                                            type='text' /><CustomInput
                                            control={form.control}
                                            name='postalCode'
                                            label='Postal Code'
                                            placeholder='Enter your city Postal Code'
                                            formMessage=''
                                            type='text' />
                                            </div>
                                            <div className='flex gap-4'>
                                            <CustomInput
                                            control={form.control}
                                            name='dateOfBirth'
                                            label='Date Of Birth'
                                            placeholder='yyyy-MM-dd'
                                            formMessage=''
                                            type='text' />
                                            <CustomInput
                                            control={form.control}
                                            name='NID'
                                            label='NID'
                                            placeholder='F******'
                                            formMessage=''
                                            type='text'
                                            />
                                            </div>
                                            </>
                            )}
                            <CustomInput
                                control={form.control}
                                name='email'
                                label='Email'
                                placeholder='Enter your Email'
                                formMessage=''
                                type='email'
                            />
                            <CustomInput
                                control={form.control}
                                name='password'
                                label='Password'
                                placeholder='Enter your password'
                                formMessage=''
                                type='password'
                            />
                            <div className='flex flex-col gap-4'>
                                <Button type="submit" disabled={isLoading} className='form-btn'>
                                {isLoading ? (
                                    <>
                                        <Loader2 size={20} className='animate-spin' />
                                        &nbsp; Loading
                                    </>
                                ) : type === 'sign-in'
                                    ? 'Sign In'
                                    : 'Sign Up'}
                            </Button>
                            </div>
                            
                        </form>
                    </Form>
                    <footer className='flex justify-center gap-1'>
    <Link href={`/${type === 'sign-in' ? 'sign-up' : 'sign-in'}`} legacyBehavior>
        <a className='text-16 font-medium text-gray-800'>
            {type === 'sign-in' ? 'Don\'t have an account?' : 'Already have an account?'}
            &nbsp;
            <span className='font-bold'>
                {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
            </span>
        </a>
    </Link>
</footer>


                </>
            )}
        </section>
    );
}

export default AuthForm;
