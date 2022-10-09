import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3BottomLeftIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Services', href: '#', current: false},
  { name: 'Resume', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

// current_tab(value) {
//   // navigation.map(nav => (
//   //     // If condition
//   //     // nav.current = value.name === nav.name ? true : false;  //Condition checking if value.type = nav.type 
//   //     ));
  
//       console.log('hello world')
// }

function tabsactive(value) {
  navigation.forEach(nav => {
    // If condition
    nav.current = value.current === nav.current ? true : false;  //Condition checking if value.type = nav.type
    console.log(nav.current)
})
}


  export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [tabscheck, tabsactive] = useState(navigation)

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-800">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 pt-2 -mr-12">
                      <button
                        type="button"
                        className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="w-6 h-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-1 h-0 mt-5 overflow-y-auto">
                    <nav className="px-2 space-y-1 ">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md self-center justify-center'
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-1 min-h-0 bg-gray-800">
            <div data-aos="fade-right" data-aos-duration="2000" className="flex items-center flex-shrink-0 p-2 m-10 bg-gray-900 rounded-full">
              <img
                className="rounded-full" 
                src="https://avatars.githubusercontent.com/u/82492018?v=4"
                alt="Your Company"
              />
            </div>
            <div className="overflow-x-hidden overflow-y-auto first-letter:">
              <nav className="flex flex-col items-center px-2 py-4">
                {navigation.map((item) => (
                  <a
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  // onClick={tabsactive(item)}
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-10 py-2 text-sm font-medium rounded-md animate__backInDown'
                    )}
                  >
                  
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white shadow">
            <button
              type="button"
              className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="w-6 h-6" aria-hidden="true" />
            </button>
            <div className="flex justify-between flex-1 px-4">
              <div className="flex flex-1">
                <form className="flex w-full md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  </div>
                </form>
              </div>
            </div>
          </div>

          <main className="flex-1">
            <div className="py-6">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                  <div className="border-4 border-gray-200 border-dashed rounded-lg h-96" />
                </div>
                {/* <p class=""> hello world </p> */}
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

