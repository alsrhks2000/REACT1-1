import { useStatus, useEffect} from "react";

export default function UserStatus (props) {
    const isOnlone = useUserStatus(props.user.id)
    if (isOnlone ===null){
        return '대기중...'
    }
    return isOnlone ? '온라인' : '오프라인'
}