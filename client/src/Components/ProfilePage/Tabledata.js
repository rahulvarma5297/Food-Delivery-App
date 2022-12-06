import React from 'react'

function Tabledata(props) {
    return (
        <tr>
            <th>{props.heading}</th>
            <td>{props.data}</td>
        </tr>
    )
}

export default Tabledata;