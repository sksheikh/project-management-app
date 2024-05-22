import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head,Link, useForm } from '@inertiajs/react'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'

export default function Create({auth,user}) {
  const {data, setData, post, errors, reset} = useForm({
    name: user.name || '',
    email: user.email || '',
    password: '',
    password_confirmation: '',
    _method: "PUT"
  })

  const onSubmit = (e) => {
    e.preventDefault();
    post(route('user.update', user))
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className='flex justify-between items-center'>
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Edit  Users
          </h2>

          <Link
            href={route('user.index')}
            className='bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emarald-600'>
            View All
          </Link>
        </div>
      }
    >
      <Head title="Create New User" />

      <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <form
                    onSubmit={onSubmit}
                    className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                     {/* user name */}
                      <div className='mt-4'>
                        <InputLabel
                          htmlFor="user_name"
                          value="Name"/>

                        <TextInput
                          id="user_name"
                          type="text"
                          name="name"
                          value={data.name}
                          className="mt-1 block w-full"
                          isFocused={true}
                          onChange={ (e) => setData('name', e.target.value)}/>

                        <InputError
                          message={errors.name}
                          className='mt-2' />
                      </div>

                      {/* user email */}
                      <div className='mt-4'>
                        <InputLabel
                          htmlFor="user_email"
                          value="Email"/>

                        <TextInput
                          id="user_email"
                          type="email"
                          name="email"
                          value={data.email}
                          className="mt-1 block w-full"
                          onChange={ (e) => setData('email', e.target.value)}/>

                        <InputError
                          message={errors.email}
                          className='mt-2' />
                      </div>

                      {/* user password */}
                      <div className='mt-4'>
                        <InputLabel
                          htmlFor="user_password"
                          value="Password"/>

                        <TextInput
                          id="user_password"
                          type="password"
                          name="password"
                          value={data.password}
                          className="mt-1 block w-full"
                          onChange={ (e) => setData('password', e.target.value)}/>

                        <InputError
                          message={errors.password}
                          className='mt-2' />
                      </div>

                      {/* user password confirmation */}
                      <div className='mt-4'>
                        <InputLabel
                          htmlFor="user_password_confirmation"
                          value="Confirm password"/>

                        <TextInput
                          id="user_password_confirmation"
                          type="password"
                          name="password_confirmation"
                          value={data.password_confirmation}
                          className="mt-1 block w-full"
                          isFocused={true}
                          onChange={ (e) => setData('password_confirmation', e.target.value)}/>

                        <InputError
                          message={errors.password_confirmation}
                          className='mt-2' />
                      </div>

                      <div className='mt-4 text-right'>
                        <button
                          className='bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerals-600'>
                          Submit
                        </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>

    </AuthenticatedLayout>
  )
}
