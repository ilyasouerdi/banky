
"use client"
import Link from 'next/link'

import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import { Control, FieldPath, useForm } from "react-hook-form"
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
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'
const FormSchema = authFormSchema('sign-up');
interface CustomInput {
    control: Control <z.infer<typeof FormSchema>>,
    name: FieldPath<z.infer<typeof FormSchema>>,
    label: string,
    placeholder: string,
    formMessage: string,
    type: 'text' | 'email' | 'password' | 'number',
}
const CustomInput = ({control,name, label, placeholder,formMessage,type}:CustomInput) => {
  return (
    
                         <FormField
                                control={control}
                                name={name}
                                render={({ field }) => (
                                    <div className='form-item'>
                                        <FormLabel className='form-label'>
                                            {label}
                                        </FormLabel>
                                        <div className='flex w-full flex-col'>
                                            <FormControl className=''>
                                                <Input placeholder={placeholder}
                                                className='input-class'
                                                type={type}
                                                {...field}/>
                                            </FormControl>
                                            <FormMessage className='form-message mt-2'>{formMessage}</FormMessage>
                                        </div>
                                    </div>
          )}
        />
        
  )
}

export default CustomInput