import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head,Link } from '@inertiajs/react'

export default function Create({auth}) {
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

    </AuthenticatedLayout>
  )
}
