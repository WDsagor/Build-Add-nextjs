import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../config/filebase.init';
import { useRouter } from 'next/router';
import Loading from './Loading';





const RequireAuth =  ({children}) => { 
    const [user, loading] =  useAuthState(auth);
    const router = useRouter()
        useEffect(()=>{
          if (!user?.emailVerified) {
            router.push('/login', router.asPath)};

        },[router, user])
        if(loading)<Loading></Loading>
   
  return <>{user?.emailVerified ? children : null}</>


    }

export default RequireAuth;