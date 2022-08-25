export const ChildComp = (props) => {
    return <div>
        <button onClick={props.ChangeData}>Change Data</button>
        <p>{props.Data}</p> <hr />

        <button onClick={props.ChangeName}>Change Name</button>
        <li>{props.Name.fname}</li>
        <li>{props.Name.lname}</li> 
        <hr />

        <button onClick={props.ChangeBike}>Change Bike</button>
        <ul>
            {props.Bike.map((val) => {
                return <li>{val}</li>
            })}
        </ul>
    </div>
}