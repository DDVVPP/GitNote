import SideNavbar from '@/components/shared/side-navbar/SideNavbar'
import RightSidebar from '@/components/shared/rightSidebar/RightSidebar'
import React from 'react'

const Layout = ({children}: { children: React.ReactNode}) => {
  return (
    <main >
      <div className='flex h-screen flex-row justify-start'>
        <SideNavbar/>
        <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
          <div className='mx-auto w-full max-w-5xl'>
            {children}
          </div>
        </section>
        <RightSidebar/>
      </div>
    </main>
  )
}

export default Layout
