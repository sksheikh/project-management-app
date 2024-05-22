import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head,Link, useForm } from '@inertiajs/react'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import TextAreaInput from '@/Components/TextAreaInput'
import SelectInput from '@/Components/SelectInput'

export default function Create({auth,projects,users}) {
  const {data, setData, post, errors, reset} = useForm({
    image: '',
    project_id: '',
    name: '',
    status: '',
    description: '',
    due_date: '',
    priority: '',
    assigned_user_id: ''
  })

  const onSubmit = (e) => {
    e.preventDefault();

    post(route('task.store'))
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className='flex justify-between items-center'>
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Create New Tasks
          </h2>

          <Link
            href={route('task.index')}
            className='bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emarald-600'>
            View All
          </Link>
        </div>
      }
    >
      <Head title="Create New Task" />

      <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <form
                    onSubmit={onSubmit}
                    className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">

                      {/* project name */}
                      <div >
                        <InputLabel
                          htmlFor="project_id"
                          value="Project Name"/>

                        <SelectInput
                          id="project_id"
                          name="project_id"
                          className="mt-1 block w-full"
                          isFocused={true}
                          onChange={ e => setData('project_id', e.target.value)}>
                          <option value="">Select Project</option>
                          {projects.data.map(project =>
                            <option value={project.id} key={project.id} >
                              {project.name}</option>
                          ) }

                        </SelectInput>

                        <InputError
                          message={errors.project_id}
                          className='mt-2' />
                      </div>

                      {/* task image */}
                      <div className='mt-4'>
                        <InputLabel
                          htmlFor="task_image_path"
                          value="Task Image"/>

                        <TextInput
                          id="task_image_path"
                          type="file"
                          name="image"
                          className="mt-1 block w-full"
                          onChange={ e => setData('image', e.target.files[0])}/>

                        <InputError
                          message={errors.image}
                          className='mt-2' />
                      </div>

                      {/* task name */}
                      <div className='mt-4'>
                        <InputLabel
                          htmlFor="task_name"
                          value="Task Name"/>

                        <TextInput
                          id="task_name"
                          type="text"
                          name="name"
                          value={data.name}
                          className="mt-1 block w-full"
                          isFocused={true}
                          onChange={ e => setData('name', e.target.value)}/>

                        <InputError
                          message={errors.name}
                          className='mt-2' />
                      </div>

                      {/* task description */}
                      <div className='mt-4'>
                        <InputLabel
                          htmlFor="task_description"
                          value="Task Description"/>

                        <TextAreaInput
                          id="task_description"
                          type="text"
                          name="description"
                          value={data.description}
                          className="mt-1 block w-full"
                          onChange={ e => setData('description', e.target.value)}/>

                        <InputError
                          message={errors.description}
                          className='mt-2' />
                      </div>

                      {/* task due date */}
                      <div className='mt-4'>
                        <InputLabel
                          htmlFor="task_due_date"
                          value="Task Deadline"/>

                        <TextInput
                          id="task_due_date"
                          type="date"
                          name="due_date"
                          value={data.due_date}
                          className="mt-1 block w-full"
                          onChange={ e => setData('due_date', e.target.value)}/>

                        <InputError
                          message={errors.due_date}
                          className='mt-2' />
                      </div>

                      {/* task status */}
                      <div className='mt-4'>
                        <InputLabel
                          htmlFor="task_status"
                          value="Task Status"/>

                        <SelectInput
                          id="task_status"
                          name="status"
                          className="mt-1 block w-full"
                          onChange={ e => setData('status', e.target.value)}>
                          <option value="">Select Status</option>
                          <option value="pending">Pending</option>
                          <option value="in_progress">In Progress</option>
                          <option value="completed">Completed</option>
                        </SelectInput>

                        <InputError
                          message={errors.status}
                          className='mt-2' />
                      </div>

                       {/* task priority */}
                       <div className='mt-4'>
                        <InputLabel
                          htmlFor="task_priority"
                          value="Task Priority"/>

                        <SelectInput
                          id="task_priority"
                          name="priority"
                          className="mt-1 block w-full"
                          onChange={ e => setData('priority', e.target.value)}>
                          <option value="">Select Priority</option>
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </SelectInput>

                        <InputError
                          message={errors.priority}
                          className='mt-2' />
                      </div>

                       {/* task assigned user */}
                       <div className='mt-4'>
                        <InputLabel
                          htmlFor="task_assigned_user_id"
                          value="Task Assigned user"/>

                        <SelectInput
                          id="task_assigned_user_id"
                          name="assigned_user_id"
                          className="mt-1 block w-full"
                          onChange={ e => setData('assigned_user_id', e.target.value)}>
                          <option value="">Select Status</option>
                          {users.data.map(user =>
                            <option value={user.id} key={user.id}>{user.name}</option>
                          )}
                        </SelectInput>

                        <InputError
                          message={errors.assigned_user_id}
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
