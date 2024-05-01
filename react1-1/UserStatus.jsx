import { useStatus, useEffect} from "react";

export default function UserStatus (props) {
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
    if (isOnlone ===null){
        return '대기중...'
    }
    return isOnlone ? '온라인' : '오프라인'
}