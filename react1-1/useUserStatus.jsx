import { useStatus, useEffect} from "react";

function useUserStatus(userID){
    const[isOnlone, setIsOnline]=useStatus(null)
    
    useEffect(()=>{
        function handleStatusChange(status){
            setIsOnline(status.isOnlone)
        }

        ServerAPI.subscribeUserStatus(props.user.id,handleStatusChange)
        return()=>{
            ServerAPI.unsubscribeUserStatus(props.user.id,handleStatusChange)
        }
    })
    return isOnlone
}