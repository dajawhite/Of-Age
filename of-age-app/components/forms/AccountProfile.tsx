"use client"

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserValidation } from '@/lib/validations/user';
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
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
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { updateUser } from '@/lib/actions/user.actions';
import { usePathname, useRouter } from 'next/navigation';

import { universities } from '@/constants/index'
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from "lucide-react"

type IMessageOption = "No, I'm good" | "Yes, add me"

interface Props{
  user: {
      id: string;
      objectId: string;
      name: string;
      university: string;
      number: string;
      iMessage: IMessageOption;
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
          iMessage: user?.iMessage || 'No, I\'m good',
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
          iMessage: values.iMessage,
          uniEmail: values.uniEmail,
          x: values.x,
          instagram: values.instagram,
          path: pathname
      })
      

      if(pathname === '/onboarding'){
          // Go back to previous page
          router.push('/success');
      } else{
          router.push('/success');
      }
    }

  return(
    // spread syntax to pass down properties to React component
    <Form {...form}>
        <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="flex flex-col justify-start gap-10"
        >
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
                    <FormItem className='flex flex-col text-black'>
                        <FormLabel className=''>
                            University
                        </FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        role='combobox'
                                        className={cn(
                                            "w-[200px] justify-between",
                                            !field.value && "text-muted-foreground"
                                        )}
                                    >
                                        {field.value?
                                            universities.find(
                                                (university) => university.name === field.value
                                            )?.name
                                            : "Select your university"}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className='w-[200px] p-0'>
                                <Command>
                                    <CommandInput placeholder='Search university...'/>
                                    <CommandEmpty>No university found.</CommandEmpty>
                                    <CommandGroup>
                                        {universities.map((university) => (
                                            <CommandItem
                                                value={university.name}
                                                key={university.name}
                                                onSelect={() => {
                                                    form.setValue("university", university.name)
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        university.name === field.value
                                                          ? "opacity-100"
                                                          : "opacity-0"
                                                      )}
                                                />
                                                {university.name}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>      
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
                            defaultValue={"No, I'm good"}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0 text-black">
                              <FormControl>
                                <RadioGroupItem value="Yes, add me" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Yes, add me
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 text-black">
                              <FormControl>
                                <RadioGroupItem value="No, I'm good" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                No, I&apos;m good
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
