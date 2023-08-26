import { Children, Context, createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  //THIS USESTATE FUNCTION INTERSEPTS THE NOMRMAL NAVIGATION BY LISTING TO THE POPSTATE AND SETS THE CURRENTPATH STATE TO WINDOWS.LOCATION.CURRENTPATH

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) =>{
    window.history.pushState({},'',to);
    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{currentPath,navigate}}>
      {children}
    </NavigationContext.Provider> 
  );
}

export { NavigationProvider };
export default NavigationContext;
