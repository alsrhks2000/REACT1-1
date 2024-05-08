export default function Greeting(props){
    if(props.isLoggedin){
        return<p>환영합니다</p>
    }else{
    return<p>로그인해주세여</p>
    }
}
