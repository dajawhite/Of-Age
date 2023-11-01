"use client"

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserValidation } from '@/lib/validations/user';
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
import * as z from "zod"
import Image from 'next/image';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { Textarea } from '../ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { updateUser } from '@/lib/actions/user.actions';
import { usePathname, useRouter } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { universities } from '@/constants/index'

interface Props{
  user: {
      id: string;
      objectId: string;
      name: string;
      university: string;
      number: string;
      iMessage: string;
      uniEmail: string;
      x: string;
      instagram: string;
  };
  btnTitle: string;
}

const socials = [
    {
        id: "x",
        label: "X"
    }, 
    {
        id: "instagram",
        label: "Instagram"
    }
]

// user & btnTitle are of type Props
const AccountProfile = ({user, btnTitle}: Props) => {

    const [showX, setX] = useState(false)
    const [showInsta, setInsta] = useState(false)
    
    

  const router = useRouter();
  const pathname = usePathname();

  // 1. define the form
  const form = useForm({
      // form data validation
      resolver: zodResolver(UserValidation),

      // default values for the form
      defaultValues: {
          name: user?.name || '',
          university: user?.university || '',
          number: user?.number || '',
          iMessage: user?.iMessage || '',
          uniEmail: user?.uniEmail || '',
          socials: [""],
          x: user?.x || '',
          instagram: user?.instagram || '',
      }
  })

  // 2. Define the submit handler
  // submit what's in UserValidation object
  // takes 1 paramter: 'values'
    const onSubmit = async (values: z.infer<typeof UserValidation>) => {
      // Do something with the form values.
      // ✅ This will be type-safe and validated -- values should already match schema
      
      // Update user profile
      // passing an object as opposed to list of parameters
      // prevents errors & having to order params correctly
      await updateUser({
          userId: user.id,
          name: values.name,
          university: values.university,
          number: values.number,
          iMessage: user.iMessage,
          uniEmail: values.uniEmail,
          x: values.x,
          instagram: values.instagram,
          path: pathname
      })

      if(pathname === '/profile/edit'){
          // Go back to previous page
          router.back();
      } else{
          router.push('/success');
      }
    }

  return(
      // spread syntax to pass down properties to React component
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} 
          className="flex flex-col justify-start gap-10">
              {/*Name*/}
              <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                  <FormItem className='flex flex-col gap-3 w-full'>
                      <FormLabel className='text-base-semibold text-black'>
                          Name
                      </FormLabel>
                      <FormControl >
                          <Input 
                              type="text"
                              className='caret-black text-black' 
                              {...field}
                          />
                      </FormControl>
                      <FormMessage/>

                  </FormItem>
              )}
              />
              {/*University*/}
              <FormField
              control={form.control}
              name="university"
              render={({ field }) => (
                  <FormItem className='flex flex-col gap-3 w-full text-black'>
                        <FormLabel className='text-base-semibold text-black'>
                            University
                        </FormLabel>
                        <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                        >
                            <FormControl className='text-black'>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your university" />
                                </SelectTrigger> 
                            </FormControl>
                            
                            <SelectContent>
                                {universities.map((university) => (
                                    <SelectItem value={university.name}>{university.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                      
                      <FormMessage/>

                  </FormItem>
              )}
              />
              {/*email*/}
              <FormField
              control={form.control}
              name="uniEmail"
              render={({ field }) => (
                  <FormItem className='flex flex-col gap-3 w-full'>
                      <FormLabel className='text-base-semibold text-black'>
                          University Email
                      </FormLabel>
                      <FormDescription>
                        Enter a university email adress ending in .edu
                      </FormDescription>
                      <FormControl >
                          <Input 
                              type="text"
                              className='caret-black text-black'
                              {...field}
                          />
                      </FormControl>
                      <FormMessage/>
                  </FormItem>
              )}
              />
              {/*Number*/}
              <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                  <FormItem className='flex flex-col gap-3 w-full'>
                      <FormLabel className='text-base-semibold text-black'>
                          Phone Number
                      </FormLabel>
                      <FormControl >
                          <Input 
                              type="text"
                              className='caret-black text-black'
                              {...field}
                          />
                      </FormControl>
                      <FormMessage/>
                  </FormItem>
              )}
              />
              {/*iMessage*/}
              <FormField
              control={form.control}
              name="iMessage"
              render={({ field }) => (
                  <FormItem className='flex flex-col gap-3 w-full'>
                      <FormLabel className='text-base-semibold text-black'>
                          iMessage?
                      </FormLabel>
                      <FormControl >
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={"No"}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0 text-black">
                              <FormControl>
                                <RadioGroupItem value="Yes" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Yes, add me to my university's iMessage group
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 text-black">
                              <FormControl>
                                <RadioGroupItem value="No" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                No, I'm good
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                      </FormControl>
                      <FormMessage/>
                  </FormItem>
              )}
              />
              {/* Socials? */}
              <FormField
              control={form.control}
              name="socials"
              render={({ field }) => (
                  <FormItem className='flex flex-col gap-3 w-full '>
                      <FormLabel className='text-base-semibold text-black'>
                        Socials
                      </FormLabel>
                      <FormDescription>
                        Select the socials you want to share.
                      </FormDescription>
                      {socials.map((social) => (
                        <FormField
                            key={social.id}
                            control={form.control}
                            name="socials"
                            render={({ field }) => {
                                return(
                                    <FormItem
                                        key={social.id}
                                        className='flex flex-row items-start space-x-3 space-y-0'
                                    >
                                        <FormControl >
                                            <Checkbox
                                                className='border-black'
                                                checked={field.value?.includes(social.id)}
                                                // an event handler for if box is checked 
                                                onCheckedChange={(checked) => {
                                                    if (checked) {
                                                        field.onChange([...field.value, social.id])
                                                        if (social.id === "x") {
                                                            setX(true)
                                                        }
                                                        else if (social.id === "instagram") {
                                                            setInsta(true)
                                                        }
                                                        
                                                    } else {
                                                        field.onChange(
                                                            // if field.value exists creates a new array that includes 
                                                            // all items from field.value except for social.id
                                                            field.value?.filter(
                                                                (value) => value !== social.id
                                                            )
                                                        )
                                                        if (social.id === "x") {
                                                            setX(false)
                                                        }
                                                        else if (social.id === "instagram") {
                                                            setInsta(false)
                                                        }
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                        <FormLabel className='font-normal text-black'>
                                            {social.label}
                                        </FormLabel>
                                    </FormItem>
                                )
                            }}
                        />
                      ))}
                      <FormMessage/>
                  </FormItem>
                )}
              />
              {/*X*/}
            {
                showX && (
                    <FormField
                        control={form.control}
                        name="x"
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-3 w-full'>
                                <FormLabel className='text-base-semibold text-black'>
                                    X
                                </FormLabel>
                                <FormControl >
                                    <Input 
                                        type="text"
                                        className='caret-black text-black'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                )
            }
            
              
              {/*Instagram*/}
              {
                showInsta && (
                    <FormField
                        control={form.control}
                        name="instagram"
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-3 w-full'>
                                <FormLabel className='text-base-semibold text-black'>
                                    Instagram
                                </FormLabel>
                                <FormControl >
                                    <Input 
                                        type="text"
                                        className='caret-black text-black'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                )
              }
              
              <Button type="submit" className='bg-black hover:bg-slate-800'>Submit</Button>
          </form>
      </Form>
  )
}

export default AccountProfile;
