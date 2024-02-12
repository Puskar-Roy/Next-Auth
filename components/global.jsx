'use client'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from "next/navigation";

const Global = ({ children }) => {
  const  session = useSession();

  useEffect(() => {
    if (session && session.status === 'unauthenticated') {
      // return ()=>redirect('/login');
    }
  }, [session]);

  return (
    <div>{children}</div>
  );
}

export default Global;
