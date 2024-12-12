import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Electronics - Dashboard </title>
        <link rel='canonical' href={window.location.href} />
        <meta name='description' content='Dashboard' />
      </Helmet>

      <main className='h-full overflow-y-auto'>
        <div className='container px-6 mx-auto grid'>
          <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>
            Dashboard
          </h2>
          <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
            {/* Card */}
            <div className='flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800'>
              <div className='p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z'></path>
                </svg>
              </div>
              <div>
                <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>
                  Total clients
                </p>
                <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
                  6389
                </p>
              </div>
            </div>

            {/* Card */}
            <div className='flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800'>
              <div className='p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
              <div>
                <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>
                  Account balance
                </p>
                <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
                  $ 46,760.89
                </p>
              </div>
            </div>

            {/* Card */}
            <div className='flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800'>
              <div className='p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
                </svg>
              </div>
              <div>
                <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>
                  New sales
                </p>
                <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
                  376
                </p>
              </div>
            </div>

            {/* Card */}
            <div className='flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800'>
              <div className='p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
              <div>
                <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>
                  Pending contacts
                </p>
                <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
                  35
                </p>
              </div>
            </div>
          </div>
          <div className='w-full overflow-hidden rounded-lg shadow-xs'>
            <div className='w-full overflow-x-auto'>
              <table className='w-full whitespace-no-wrap'>
                <thead>
                  <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'>
                    <th className='px-4 py-3'>Client</th>
                    <th className='px-4 py-3'>Amount</th>
                    <th className='px-4 py-3'>Status</th>
                    <th className='px-4 py-3'>Date</th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'>
                  <tr className='text-gray-700 dark:text-gray-400'>
                    <td className='px-4 py-3'>
                      <div className='flex items-center text-sm'>
                        <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
                          <img
                            className='object-cover w-full h-full rounded-full'
                            src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                            alt='Hans Burger'
                            loading='lazy'
                          />
                          <div
                            className='absolute inset-0 rounded-full shadow-inner'
                            aria-hidden='true'
                          ></div>
                        </div>
                        <div>
                          <p className='font-semibold'>Hans Burger</p>
                          <p className='text-xs text-gray-600 dark:text-gray-400'>
                            10x Developer
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='px-4 py-3 text-sm'>$ 863.45</td>
                    <td className='px-4 py-3 text-xs'>
                      <span className='px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100'>
                        Approved
                      </span>
                    </td>
                    <td className='px-4 py-3 text-sm'>6/10/2020</td>
                  </tr>
                  <tr className='text-gray-700 dark:text-gray-400'>
                    <td className='px-4 py-3'>
                      <div className='flex items-center text-sm'>
                        <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
                          <img
                            className='object-cover w-full h-full rounded-full'
                            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6'
                            alt='Jolina Angelie'
                            loading='lazy'
                          />
                          <div
                            className='absolute inset-0 rounded-full shadow-inner'
                            aria-hidden='true'
                          ></div>
                        </div>
                        <div>
                          <p className='font-semibold'>Jolina Angelie</p>
                          <p className='text-xs text-gray-600 dark:text-gray-400'>
                            Unemployed
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='px-4 py-3 text-sm'>$ 369.95</td>
                    <td className='px-4 py-3 text-xs'>
                      <span className='px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:bg-orange-600 dark:text-orange-100'>
                        Pending
                      </span>
                    </td>
                    <td className='px-4 py-3 text-sm'>6/10/2020</td>
                  </tr>
                  <tr className='text-gray-700 dark:text-gray-400'>
                    <td className='px-4 py-3'>
                      <div className='flex items-center text-sm'>
                        <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
                          <img
                            className='object-cover w-full h-full rounded-full'
                            src='https://images.unsplash.com/photo-1502720705749-3c36ad7931f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                            alt='Sarah Curry'
                            loading='lazy'
                          />
                          <div
                            className='absolute inset-0 rounded-full shadow-inner'
                            aria-hidden='true'
                          ></div>
                        </div>
                        <div>
                          <p className='font-semibold'>Sarah Curry</p>
                          <p className='text-xs text-gray-600 dark:text-gray-400'>
                            Designer
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='px-4 py-3 text-sm'>$ 86.00</td>
                    <td className='px-4 py-3 text-xs'>
                      <span className='px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-red-100'>
                        Denied
                      </span>
                    </td>
                    <td className='px-4 py-3 text-sm'>6/10/2020</td>
                  </tr>
                  <tr className='text-gray-700 dark:text-gray-400'>
                    <td className='px-4 py-3'>
                      <div className='flex items-center text-sm'>
                        <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
                          <img
                            className='object-cover w-full h-full rounded-full'
                            src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3Nzg0fQ&auto=format&fit=crop&w=200&q=80'
                            alt='Joseph Garth'
                            loading='lazy'
                          />
                          <div
                            className='absolute inset-0 rounded-full shadow-inner'
                            aria-hidden='true'
                          ></div>
                        </div>
                        <div>
                          <p className='font-semibold'>Joseph Garth</p>
                          <p className='text-xs text-gray-600 dark:text-gray-400'>
                            Actor
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='px-4 py-3 text-sm'>$ 369.95</td>
                    <td className='px-4 py-3 text-xs'>
                      <span className='px-2 py-1 font-semibold leading-tight text-purple-700 bg-purple-100 rounded-full dark:bg-purple-700 dark:text-purple-100'>
                        Expired
                      </span>
                    </td>
                    <td className='px-4 py-3 text-sm'>6/10/2020</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800'>
              <span className='flex items-center col-span-3'>
                Showing 21-30 of 100
              </span>
              <span className='col-span-2'></span>
              <span className='flex col-span-4 mt-2 sm:mt-auto sm:justify-end'>
                <nav aria-label='Table navigation'>
                  <ul className='inline-flex items-center'>
                    <li>
                      <button
                        className='px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple'
                        aria-label='Previous'
                      >
                        <svg
                          aria-hidden='true'
                          className='w-4 h-4 fill-current'
                          viewBox='0 0 20 20'
                        >
                          <path
                            d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                            clipRule='evenodd'
                            fillRule='evenodd'
                          ></path>
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                        1
                      </button>
                    </li>
                    <li>
                      <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                        2
                      </button>
                    </li>
                    <li>
                      <button className='px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple'>
                        3
                      </button>
                    </li>
                    <li>
                      <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                        4
                      </button>
                    </li>
                    <li>
                      <span className='px-3 py-1'>...</span>
                    </li>
                    <li>
                      <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                        8
                      </button>
                    </li>
                    <li>
                      <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                        9
                      </button>
                    </li>
                    <li>
                      <button
                        className='px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple'
                        aria-label='Next'
                      >
                        <svg
                          className='w-4 h-4 fill-current'
                          aria-hidden='true'
                          viewBox='0 0 20 20'
                        >
                          <path
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                            fillRule='evenodd'
                          ></path>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </nav>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
