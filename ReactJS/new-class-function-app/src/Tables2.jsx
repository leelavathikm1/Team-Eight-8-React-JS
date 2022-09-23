import React, { Component } from 'react'

const TableHeader =()=>{
    return(
        <thead>
                        <tr>
                            <th>ID</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Email</th>
                        </tr>
                    </thead>
    )
}

const TableBody =()=>{
    return(
        <tbody>
                        <tr>
                            <th>1</th>
                            <td>sai</td>
                            <td>prakesh</td>
                            <td>saiprakesh@gmail.com</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>kalyan</td>
                            <td>kumar</td>
                            <td>kalyan@gmail.com</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Pavan</td>
                            <td>kumar</td>
                            <td>pavan@gmail.com</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>KB</td>
                            <td>Harish</td>
                            <td>harish@gmail.com</td>
                        </tr>
                    </tbody>
    )
}
export default class Tables2 extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Tables</h1>
                <table className="table">
                    <TableHeader/>
                    <TableBody/>
                </table>
            </div>
        )
    }
}
