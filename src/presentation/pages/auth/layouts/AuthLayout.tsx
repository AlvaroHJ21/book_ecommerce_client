import React from 'react'
import { loginHero } from '../../../../assets';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const AuthLayout = ({children}: Props) => {
  return (
      <div className="bg-secondary  h-screen flex justify-center items-center">
          <div className="max-w-5xl bg-white rounded-md shadow-md flex">
              <div className="flex-1 flex relative">
                  <div className='w-[90%] max-w-[18rem] m-auto '>{children}</div>
              </div>

              <div className="flex-1 h-[30rem] bg-red-50">
                  <img className="h-full object-cover" src={loginHero} alt="" />
              </div>
          </div>
      </div>
  );
}
