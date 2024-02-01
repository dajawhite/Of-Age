"use client"

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { updateUser } from '@/lib/actions/user.actions';
import { usePathname, useRouter } from 'next/navigation';

import { universities } from '@/constants/index'
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from "lucide-react"
import { Textarea } from '../ui/textarea';
import { StartupValidation } from '@/lib/validations/startup';

interface Props{
  user: {
    firstName: string | null | undefined
    lastName: string | null | undefined
    id: string | null | undefined
    email: string | null | undefined
  }
  btnTitle: string
}

// user & btnTitle are of type Props
const StartupProfile = ({user, btnTitle}: Props) => {

  const router = useRouter();


  // 1. define the form
  const form = useForm({
      // form data validation
      resolver: zodResolver(StartupValidation),

      // default values for the form
      defaultValues: {
          founderName: `${user?.firstName} + ${user?.lastName}` || '',
          email: user?.email || '',
          startup: '',
          website: '',
          team: '',
          startupEmail: '',
          university: '',
          bio:''
      }
  })

  // 2. Define the submit handler
  // submit what's in UserValidation object
  // takes 1 paramter: 'values'
    const onSubmit = async (values: z.infer<typeof StartupValidation>) => {
      // Do something with the form values.
      // ✅ This will be type-safe and validated -- values should already match schema
        const body = {
            userId: user?.id,
            userEmail: user?.email,
            founderName: values.founderName,
            email: values.email,
            startup: values.startup,
            website: values.website,
            team: values.team,
            startupEmail: values.startupEmail,
            university: values.university,
            bio: values.bio
        }

          const response = await fetch('',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
          })
        


        
      

    }

  return(
    // spread syntax to pass down properties to React component
    <Form {...form}>
        <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="flex flex-col justify-start gap-10"
        >
            {/*Founder Name*/}
            <FormField
              control={form.control}
              name="founderName"
              render={({ field }) => (
                  <FormItem className='flex flex-col gap-3 w-full'>
                      <FormLabel className='text-base-semibold text-black'>
                          Founder name
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
            {/*Email*/}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                  <FormItem className='flex flex-col gap-3 w-full'>
                      <FormLabel className='text-base-semibold text-black'>
                          Founder email
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
            {/*Startup*/}
            <FormField
              control={form.control}
              name="startup"
              render={({ field }) => (
                  <FormItem className='flex flex-col gap-3 w-full'>
                      <FormLabel className='text-base-semibold text-black'>
                          Startup name
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
            {/*website*/}
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                  <FormItem className='flex flex-col gap-3 w-full'>
                      <FormLabel className='text-base-semibold text-black'>
                          Startup website
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
            {/*team members*/}
            <FormField
                control={form.control}
                name="team"
                render={({ field }) => (
                    <FormItem className='flex flex-col gap-3 w-full'>
                    <FormLabel className='text-base-semibold text-black'>Team Members</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="ex. John Doe, CTO, USC, johndoe@usc.edu"
                        className="resize-none caret-black text-black"
                        {...field}
                        />
                    </FormControl>
                    <FormDescription>
                        List the executive team members. Provide their full name, position, university if different, and email.
                    </FormDescription>
                    <FormMessage />
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
              {/*startup email*/}
              <FormField
              control={form.control}
              name="startupEmail"
              render={({ field }) => (
                  <FormItem className='flex flex-col gap-3 w-full'>
                      <FormLabel className='text-base-semibold text-black'>
                          Startup Email
                      </FormLabel>
                      <FormDescription>
                        Enter the contact email for your startup
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
              {/*bio*/}
            <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                    <FormItem className='flex flex-col gap-3 w-full'>
                    <FormLabel className='text-base-semibold text-black'>Tell us about your startup.</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder=""
                        className="resize-none caret-black text-black"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit" className='bg-black hover:bg-slate-800'>Submit</Button>
        </form>
      </Form>
  )
}

export default StartupProfile;
