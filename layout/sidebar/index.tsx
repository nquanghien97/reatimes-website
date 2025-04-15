'use client'

import { MenuSidebarType } from '@/types/MenuSidebarTypes'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import SidebarItem from './SidebarItem';
import { ButtonIcon } from '@/components/ui/ButtonIcon';
import CloseIcon from '@/assets/icons/CloseIcon';

function Sidebar({ menuSidebar, open, setOpen }: { menuSidebar?: MenuSidebarType[], open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {

  const backdropRef = useRef<HTMLDivElement>(null);

  const onClose = () => {
    setOpen(false);
  }
  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === backdropRef.current) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay background when sidebar is open */}
      <div
        className={`fixed inset-0 bg-transparent bg-opacity-60 z-50 transition-opacity duration-300 lg:hidden ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />
      <div
        className={`lg:hidden fixed h-screen border-r border-[#ccc] z-[888] text-white duration-300 w-2/3 lg:w-[240px] ${open ? 'max-lg:translate-x-[0px]' : 'max-lg:-translate-x-full'}`}
        ref={backdropRef}
        onClick={clickHandler}
      >
        <div className="relative h-full bg-[#ec658d]">
          <div className="absolute top-2 right-2 lg:hidden" onClick={onClose}>
            <ButtonIcon>
              <CloseIcon />
            </ButtonIcon>
          </div>
          <div className="h-full overflow-x-hidden overflow-y-auto flex flex-col py-8">
            <div className="py-2 flex-1">
              {menuSidebar?.map(menu => (
                <SidebarItem key={menu.title} menu={menu} onClose={() => setOpen(false)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar