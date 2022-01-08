import Router from 'next/router';
import React, { useEffect } from "react";
import LayoutOne from '../component/layouts/page-design-one';

export default function Home() {

  useEffect(() => {
    const {pathname} = Router
  });
  
  return (
    <LayoutOne title={'Home'}>
      Hi  
    </LayoutOne>
  )
}
