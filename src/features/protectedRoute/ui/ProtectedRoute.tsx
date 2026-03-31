import { useUserStore } from "@/entities/user"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({children}:React.PropsWithChildren)=>{
     const {token}  = useUserStore()
     if(!token){
        return <Navigate to={'/login'}/>
     }

     return(
        <>
        {children}
        </>
     )
}