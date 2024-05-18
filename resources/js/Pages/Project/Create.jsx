import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head,Link, useForm } from '@inertiajs/react'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import TextAreaInput from '@/Components/TextAreaInput'
import SelectInput from '@/Components/SelectInput'

export default function Create({auth}) {
  const {data, setData, post, errors, reset} = useForm({
    image: '',
    name: '',
    status: '',
    description: '',
    due_date: ''
  })

  const onSubmit = (e) => {
    e.preventDefault();

    post(route('project.store'))
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className='flex justify-between items-center'>
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Create New Projects
          </h2>

          <Link
            href={route('project.index')}
            className='bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emarald-600'>
            View All
          </Link>
        </div>
      }
    >
      <Head title="Create New Project" />

      <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <form
                    onSubmit={onSubmit}
                    className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                      {/* project image */}
                      <div>
                        <InputLabel
                          htmlFor="project_image_path"
                          value="Project Image"/>

                        <TextInput
                          id="project_image_path"
                          type="file"
                          name="image"
                          className="mt-1 block w-full"
                          onChange={ e => setData('image', e.target.files[0])}/>

                        <InputError
                          message={errors.image}
                          className='mt-2' />
                      </div>

                      {/* project name */}
                      <div className='mt-4'>
                        <InputLabel
                          htmlFor="project_name"
                          value="Project Name"/>

                        <TextInput
                          id="project_name"
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

                      {/* project description */}
                      <div className='mt-4'>
                        <InputLabel
                          htmlFor="project_description"
                          value="Project Description"/>

                        <TextAreaInput
                          id="project_description"
                          type="text"
                          name="description"
                          value={data.description}
                          className="mt-1 block w-full"
                          isFocused={true}
                          onChange={ e => setData('description', e.target.value)}/>

                        <InputError
                          message={errors.description}
                          className='mt-2' />
                      </div>

                      {/* project due date */}
                      <div className='mt-4'>
                        <InputLabel
                          htmlFor="project_due_date"
                          value="Project Deadline"/>

                        <TextInput
                          id="project_due_date"
                          type="date"
                          name="due_date"
                          value={data.due_date}
                          className="mt-1 block w-full"
                          isFocused={true}
                          onChange={ e => setData('due_date', e.target.value)}/>

                        <InputError
                          message={errors.due_date}
                          className='mt-2' />
                      </div>

                      {/* project status */}
                      <div className='mt-4'>
                        <InputLabel
                          htmlFor="project_status"
                          value="Project Status"/>

                        <SelectInput
                          id="project_status"
                          name="status"
                          value={data.status}
                          className="mt-1 block w-full"
                          isFocused={true}
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
