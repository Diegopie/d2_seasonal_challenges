import { useEffect, useRef } from 'react';

const useComponentDidUpdate = () => {
   
      const firstRender = useRef(false);
    
      useEffect(() => {
        firstRender.current = true;
      }, []);
    
      return firstRender.current;
    }

export default useComponentDidUpdate;