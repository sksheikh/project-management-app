import React from 'react'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router } from '@inertiajs/react'
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP} from '@/constants'
import TasksTable from '../Task/TasksTable'

export default function Show({auth,project,tasks,queryParams}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        { `Project "${project.name}" ` }</h2>}
      >
      <Head title={ `Project "${project.name}" ` }  />

      <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  {/* project image */}
                  <div>
                    <img
                      src={project.image_path}
                      alt=""
                      className='w-full h-64 object-cover' />
                  </div>

                  <div className="p-6 text-gray-900">


                    <div
                      className='grid gap-2 grid-cols-2 mt-2'>
                        {/* grid left */}
                        <div>
                          <div>
                            <label className='font-bold text-lg'>Project ID</label>
                            <p className='mt-1'>{project.id}</p>
                          </div>

                          <div className='mt-4'>
                            <label className='font-bold text-lg'>Project Name</label>
                            <p className='mt-1'>{project.name}</p>
                          </div>

                          <div className='mt-4'>
                            <label className='font-bold text-lg'>Project Status</label>
                            <p className='mt-1'>
                              <span className={"px-2 py-1 rounded text-white " +
                                PROJECT_STATUS_CLASS_MAP[project.status]
                                }>
                                { PROJECT_STATUS_TEXT_MAP[project.status] }
                              </span>
                            </p>
                          </div>

                          <div className='mt-4'>
                            <label className='font-bold text-lg'>Created By</label>
                            <p className='mt-1'>{project.createdBy.name}</p>
                          </div>

                        </div>

                        {/* grid right */}
                        <div>
                          <div className='mt-4'>
                            <label className='font-bold text-lg'>Create Date</label>
                            <p className='mt-1'>{project.created_at}</p>
                          </div>

                          <div className='mt-4'>
                            <label className='font-bold text-lg'>Due Date</label>
                            <p className='mt-1'>{project.due_date}</p>
                          </div>

                          <div className='mt-4'>
                            <label className='font-bold text-lg'>Updated By</label>
                            <p className='mt-1'>{project.updatedBy.name}</p>
                          </div>

                        </div>

                    </div>

                    <div className='mt-4'>
                      <label className='font-bold text-lg'>Project Description</label>
                      <p className='mt-1'>{project.description}</p>
                    </div>


                  </div>
              </div>
          </div>
      </div>

      <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <TasksTable
                    tasks={tasks}
                    queryParams={queryParams}
                    hideProjectColumn={true}
                    />
              </div>
          </div>
      </div>


    </AuthenticatedLayout>
  )
}
