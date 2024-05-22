import React from 'react'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router } from '@inertiajs/react'
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP} from '@/constants'
import TasksTable from '../Task/TasksTable'

export default function Show({auth,task}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        { `Task "${task.name}" ` }</h2>}
      >
      <Head title={ `Task "${task.name}" ` }  />

      <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  {/* task image */}
                  <div>
                    <img
                      src={task.image_path}
                      alt=""
                      className='w-full h-64 object-cover' />
                  </div>

                  <div className="p-6 text-gray-900">


                    <div
                      className='grid gap-2 grid-cols-2 mt-2'>
                        {/* grid left */}
                        <div>
                          <div>
                            <label className='font-bold text-lg'>Task ID</label>
                            <p className='mt-1'>{task.id}</p>
                          </div>

                          <div className='mt-4'>
                            <label className='font-bold text-lg'>Task Name</label>
                            <p className='mt-1'>{task.name}</p>
                          </div>

                          <div className='mt-4'>
                            <label className='font-bold text-lg'>Task Status</label>
                            <p className='mt-1'>
                              <span className={"px-2 py-1 rounded text-white " +
                                TASK_STATUS_CLASS_MAP[task.status]
                                }>
                                { TASK_STATUS_TEXT_MAP[task.status] }
                              </span>
                            </p>
                          </div>

                          <div className='mt-4'>
                            <label className='font-bold text-lg'>Created By</label>
                            <p className='mt-1'>{task.createdBy.name}</p>
                          </div>

                        </div>

                        {/* grid right */}
                        <div>
                          <div className='mt-4'>
                            <label className='font-bold text-lg'>Create Date</label>
                            <p className='mt-1'>{task.created_at}</p>
                          </div>

                          <div className='mt-4'>
                            <label className='font-bold text-lg'>Due Date</label>
                            <p className='mt-1'>{task.due_date}</p>
                          </div>

                          <div className='mt-4'>
                            <label className='font-bold text-lg'>Project Name</label>
                            <p className='mt-1'>
                              <Link
                                href={route('project.show', task.project)}
                                className='hover:underline'
                               >{task.project.name}
                              </Link>
                            </p>
                          </div>

                          <div className='mt-4'>
                            <label className='font-bold text-lg'>Updated By</label>
                            <p className='mt-1'>{task.updatedBy.name}</p>
                          </div>

                        </div>

                    </div>

                    <div className='mt-4'>
                      <label className='font-bold text-lg'>Task Description</label>
                      <p className='mt-1'>{task.description}</p>
                    </div>


                  </div>
              </div>
          </div>
      </div>




    </AuthenticatedLayout>
  )
}
