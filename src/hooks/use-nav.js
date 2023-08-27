import NavigationContext from "../context/navigation";
import { useContext } from "react";

function useNav(){
    return useContext(NavigationContext);
}

export default useNav;