import './Header.css';
import {  Head  } from "./Head";
import React from 'react'
import { Search } from './Search';
import { Navi } from './Navi';

export const Header = () => {
  return (
    <>
      <Head />
      <Search />
      <Navi />
    </>
  )
}