import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from '@/constants';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({
  auth,
  totalPendingTasks,
  myPendingTasks,
  totalInProgressTasks,
  myInProgressTasks,
  totalCompletedTasks,
  myCompletedTasks,
  myActiveTasks
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-4">
                    <div className="bg-black overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                          <h3 className='text-amber-500 text-xl font-semibold'>Pending Tasks</h3>
                          <p className='text-white text-lg mt-2'>
                            <span className='me-2'>{myPendingTasks}</span>
                            /
                            <span className='ms-2'>{totalPendingTasks}</span>
                          </p>
                        </div>
                    </div>

                    <div className="bg-black overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                          <h3 className='text-blue-500 text-xl font-semibold'>In Progress Tasks</h3>
                          <p className='text-white text-lg mt-2'>
                            <span className='me-2'>{myInProgressTasks}</span>
                            /
                            <span className='ms-2'>{totalInProgressTasks}</span>
                          </p>
                        </div>
                    </div>

                    <div className="bg-black overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                          <h3 className='text-green-500 text-xl font-semibold'>Completed Tasks</h3>
                          <p className='text-white text-lg mt-2'>
                            <span className='me-2'>{myCompletedTasks}</span>
                            /
                            <span className='ms-2'>{totalCompletedTasks}</span>
                          </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                    <div className="bg-black overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                          <h3 className='text-amber-500 text-xl font-semibold'>My Active Tasks</h3>

                          <div className='overflow-auto mt-4'>
                            <table className='w-full text-sm text-left rtl:text-right text-white'>
                              {/* thead::start */}
                              <thead className='text-xs bg-gray-700 text-white uppercase   border-b-2 border-gray-500'>
                                <tr className='text-nowrap'>
                                  <th className='px-3 py-2'>ID</th>
                                  <th className='px-3 py-2'>Project Name</th>
                                  <th className='px-3 py-2'>Task Name</th>
                                  <th className='px-3 py-2'>Status</th>
                                  <th className='px-3 py-2'>Deadline</th>
                                </tr>
                              </thead>

                              {/* tbody::start */}
                              <tbody>
                                {myActiveTasks.data.map(task => (
                                  <tr className='border-b '
                                    key={task.id}>
                                    <td className='px-3 py-2'>{ task.id }</td>

                                    <td className='px-3 py-2'>
                                      <Link
                                        href={route('project.show', task.project)}
                                        className='hover:underline'>
                                        {task.project.name}
                                      </Link>
                                    </td>

                                    <td className='px-3 py-2'>
                                      <Link
                                        href={route('task.show', task)}
                                        className='hover:underline'>
                                        {task.name}
                                      </Link>
                                    </td>
                                    <td className='px-3 py-2'>
                                      <span className={"px-2 py-1 rounded text-white text-nowrap " +
                                        TASK_STATUS_CLASS_MAP[task.status] }>
                                        { TASK_STATUS_TEXT_MAP[task.status] }
                                      </span>
                                    </td>
                                    <td className='px-3 py-2'>{ task.due_date }</td>

                                  </tr>
                                ))}
                              </tbody>
                              {/* tbody::end */}
                            </table>
                          </div>
                        </div>
                    </div>

                </div>


            </div>

        </AuthenticatedLayout>
    );
}
