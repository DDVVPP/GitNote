/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

const NavSection = ({children, title}: {children: React.ReactNode, title: string}) => {
  return (
    <div className='border-white-500 border-b pt-4'>
          <div className='group m-auto mb-2 flex flex-col justify-start gap-4 rounded-md p-2'>
            <h3 className='caption text-white-500 group-hover:text-white'>{title}</h3>
            {children}
          </div>
        </div>
  )
}

export default NavSection;
