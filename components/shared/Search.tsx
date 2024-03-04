'use client';

import searchIcon from '@/public/searchIcon.svg'
import shortcutIcon from '@/public/shortcutIcon.svg'
import Image from 'next/image';

export default function Search() {
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div className="relative flex flex-1 items-center">
      <Image
        src={searchIcon}
        alt="Search Icon"
        className='ml-3 absolute pointer-events-none'
      />
      <input
        className="w-full rounded-md py-[9px] pl-10 text-sm placeholder:text-paragraph-4-medium placeholder:text-white-500 bg-black-700 focus:outline-none"
        placeholder="Search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <Image
        src={shortcutIcon}
        alt="Shortcut Icon"
        className='pointer-events-none flex -ml-8'
      />
    </div>
  );
}
