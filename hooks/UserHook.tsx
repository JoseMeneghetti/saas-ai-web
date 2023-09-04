import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useUserHook = () => useContext(AuthContext);

export default useUserHook;