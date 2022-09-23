import { Component } from "react";

const TableHeader =()=>{
    return (<thead>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
    </thead>
    )
}

const TableBody =()=>{
    return ( 
        <tbody>
                        <tr>
                            <th>1</th>
                            <td>Pavan</td>
                            <td>Kumar</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Kalyan</td>
                            <td>Kumar</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Sai</td>
                            <td>Prakesh</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Jai</td>
                            <td>Krishna</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>KB</td>
                            <td>Harish</td>
                            <td>25</td>
                        </tr>
                    </tbody>
    )
}

class Tables extends Component {
    render() {
        return (
            <div className="container">
                <h1>Tables</h1>
                <table className="table">
                    <TableHeader/>
                    <TableBody/>
                    
                </table>
            </div>
        )
    }
}

export default Tables;
