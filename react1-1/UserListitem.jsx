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
    return (
        <li stle={{color:isOnlone ? 'green', 'black'}}>
            {props.user.name}
        </li>
    )
}