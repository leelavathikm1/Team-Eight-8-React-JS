
import UsersEventHandler from "./UserEventHandler";
import UserObj from "./UserObject";
import UsersString from "./UserString";

export default function User(){
    return <div>
        <h1>I am from User component</h1>
        
        <UserObj/>
        <UsersString/>
        <UsersEventHandler/>

    </div>
}