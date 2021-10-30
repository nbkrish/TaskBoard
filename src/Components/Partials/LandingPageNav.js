import React from 'react';
import { BiMenu } from 'react-icons/bi';
import _ from 'lodash';

const Nav = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="lg:px-16 px-6 bg-surface flex flex-wrap items-center lg:py-0 py-5 text-onBackground">
      <BiMenu
        size="22"
        className="-ml-3 pointer-cursor lg:hidden block"
        onClick={() => setShowMenu(!showMenu)}
      ></BiMenu>
      <div className="absolute lg:transform-none transform -translate-x-1/2 lg:left-10 left-1/2 top-5 lg:top-7 font-semibold text-primary">
        <p>TASK BOARD</p>
      </div>
      <div
        className={
          'lg:flex lg:items-center lg:w-auto w-full ' +
          (showMenu ? ' ' : 'hidden')
        }
      >
        <div className="lg:pl-52 lg:mt-0 mt-6">
          <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0 gap-10">
            <li className="lg:py-7 py-2 block lg:border-b-2 border-surface hover:text-onSurface uppercase">
              product
            </li>
            <li className="lg:py-7 py-2 block lg:border-b-2 border-surface hover:text-onSurface uppercase">
              pricing
            </li>
            <li className="lg:py-7 py-2 block lg:border-b-2 border-surface hover:text-onSurface uppercase">
              download
            </li>
            <li className="lg:py-7 py-2 block lg:border-b-2 border-surface hover:text-onSurface uppercase">
              more
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
