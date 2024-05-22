import React from 'react'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import TasksTable from './TasksTable'

export default function Index({auth,tasks, queryParams = null, success}) {

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className='flex justify-between items-center'>
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            All Tasks
          </h2>

          <Link
            href={route('task.create')}
            className='bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emarald-600'>
            Add new
          </Link>
      </div>
      }
    >
      <Head title="Task" />


      <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            { success && (<div className='bg-emerald-500 p-2 px-3 mb-4 rounded text-white'>
                {success}
              </div>)
            }

              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 text-gray-900">
                  <TasksTable
                    tasks={tasks}
                    queryParams={queryParams} />

                  </div>
              </div>
          </div>
      </div>
    </AuthenticatedLayout>
  )
}
