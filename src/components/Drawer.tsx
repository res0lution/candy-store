import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Drawer = ({ setActive, active }: any ) => {

  useEffect(() => {
    if (active) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }

    window.addEventListener('resize', () => {
      const MOBILE_BREAK_POINT = 728

      if (window.innerWidth > MOBILE_BREAK_POINT) {
        setActive(false)
      }
    }, [active, setActive])
  })
  
  return (
    <>
      <div
        className={ 
          active ? 
            `
              md:hidden 
              fixed z-50 
              h-screen p-3 
              w-1/2 
              bg-white 
              transition-all 
              easy-in-out 
              duration-300 
              top-0 
              left-0
            ` 
          : `
            md:hidden 
            fixed z-50 
            h-screen p-3 
            w-1/2 
            bg-white 
            transition-all 
            easy-in-out 
            duration-300 
            top-0 
            -left-full
          `
        }      
      >
        <div className='flex flex-col h-full'>
          <button
            type='button'
            className='
              text-gray-400
              bg-transparent
              hover-bg-gray-200
              rounded-lg
              text-sm
              p-1.5
              inline-flex
              items-center
              dark:hover:bg-gray-600
              dark:hover:text-white
            '
            onClick={() => setActive(false)}
          >
            <Image src='/cross.svg' alt='cross' width={18} height={18} />
            <span className='sr-only'>Close menu</span>
          </button>
          <div className="text-black h-auto flex flex-col gap-6 pt-5 font-bold">

          </div>
        </div>
      </div>
    </>
  )
}

export default Drawer