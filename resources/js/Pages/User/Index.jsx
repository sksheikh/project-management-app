import React from 'react'
import Pagination from '@/Components/Pagination'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router } from '@inertiajs/react'
import TableHeader from '@/Components/TableHeader'

export default function Index({auth,users, queryParams = null, success}) {
  queryParams = queryParams || {}

  const searchFieldChanged = (name, value) => {
    if(value){
      queryParams[name] = value
    }else{
      delete queryParams['name']
    }

    router.get(route('user.index', queryParams))
  }

  const onKeyPress = (name, e) => {
    if(e.key !== "Enter") return;

    searchFieldChanged(name, e.target.value);
  }

  const sortChanged = (name) => {
    if(name === queryParams.sort_field){
      if(queryParams.sort_direction === "asc"){
        queryParams.sort_direction = "desc"
      }else{
        queryParams.sort_direction = "asc"
      }

    }else{
      queryParams.sort_field = name
      queryParams.sort_direction = "asc"
    }

    router.get(route('user.index', queryParams))
  }

  const deleteUser = (user) => {
    if(!window.confirm("Are you sure to delete the user?")){
      return;
    }

    router.delete(route('user.destroy', user))
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className='flex justify-between items-center'>
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            All Users
          </h2>

          <Link
            href={route('user.create')}
            className='bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emarald-600'>
            Add new
           </Link>
        </div>
      }
    >
      <Head title="User" />

      <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            { success && (<div className='bg-emerald-500 p-2 px-3 mb-4 rounded text-white'>
                {success}
              </div>)
            }
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 text-gray-900">

                    <div className='overflow-auto'>
                      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dar:text-gray-400'>
                        {/* thead::start */}
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500'>
                          <tr className='text-nowrap'>
                            {/* ID */}
                            <TableHeader
                              name="id"
                              sort_field={queryParams.sort_field}
                              sort_direction={queryParams.sort_direction}
                              sortChanged={sortChanged}
                              >
                              ID
                            </TableHeader>

                            {/* Name */}
                            <TableHeader
                              name="name"
                              sort_field={queryParams.sort_field}
                              sort_direction={queryParams.sort_direction}
                              sortChanged={sortChanged}
                              >
                              Name
                            </TableHeader>

                            {/* Email */}
                            <TableHeader
                              name="email"
                              sort_field={queryParams.sort_field}
                              sort_direction={queryParams.sort_direction}
                              sortChanged={sortChanged}
                              >
                              Email
                            </TableHeader>

                            {/* Create Date */}
                            <TableHeader
                              name="created_at"
                              sort_field={queryParams.sort_field}
                              sort_direction={queryParams.sort_direction}
                              sortChanged={sortChanged}
                              >
                              Create Date
                            </TableHeader>

                            <th className='px-3 py-2'>Actions</th>
                          </tr>
                        </thead>

                        {/* filtering header */}
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500'>
                          <tr className='text-nowrap'>
                            <th className='px-3 py-2'></th>
                            <th className='px-3 py-2'>
                              <TextInput
                                className="w-full"
                                defaultValue={queryParams.name}
                                placeholder="User Name"
                                onBlur={(e) => searchFieldChanged("name", e.target.value)}
                                onKeyPress={(e) => onKeyPress("name", e)}
                              />
                            </th>

                            <th className='px-3 py-2'>
                              <TextInput
                                className="w-full"
                                defaultValue={queryParams.email}
                                placeholder="User Email"
                                onBlur={(e) => searchFieldChanged("email", e.target.value)}
                                onKeyPress={(e) => onKeyPress("email", e)}
                              />
                            </th>
                            <th className='px-3 py-2'></th>
                            <th className='px-3 py-2'></th>
                          </tr>
                        </thead>
                        {/* thead::end */}


                        {/* tbody::start */}
                        <tbody>
                          {users.data.map(user => (
                            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                              key={user.id}>
                              <td className='px-3 py-2'>{ user.id }</td>

                              <td className='px-3 py-2'>
                                { user.name }
                              </td>

                              <td className='px-3 py-2'>
                                  { user.email }
                              </td>

                              <td className='px-3 py-2'>{ user.created_at }</td>
                              <td className='px-3 py-2 text-nowrap'>
                                <Link href={route('user.edit', user.id)}
                                className='font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1'>
                                  Edit
                                </Link>

                                <Link
                                  onClick={ e => deleteUser(user) }
                                  as='button'
                                  className='font-medium text-red-600 dark:text-red-500 hover:underline mx-1'>
                                  Delete
                                </Link>
                              </td>

                            </tr>
                          ))}
                        </tbody>
                        {/* tbody::end */}
                      </table>
                    </div>


                    <Pagination links={users.meta.links} />
                  </div>
              </div>
          </div>
      </div>
    </AuthenticatedLayout>
  )
}
