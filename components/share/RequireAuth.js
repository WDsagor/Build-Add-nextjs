import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../config/filebase.init';
import { useRouter } from 'next/router';
import Loading from './Loading';




const RequireAuth = ({children}) => { 
    const [user, loading] = useAuthState(auth);
    const router = useRouter()
        
    if(loading){
      return <Loading></Loading>
    }
    if (!user) {
      router.push('/login', router.asPath)};
  return <>{user ? children : null}</>
    
};

export default RequireAuth;