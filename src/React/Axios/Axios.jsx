import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {


    const [userData, setUserData] = useState([])







    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUserData(res.data)
                console.log(userData);

            }).catch((err) => console.log(err))

    }, [])


    let filteredArr = userData.splice(0, 2)


    return (
        <div className='flex'>
            <p>Axios Example</p>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>compnay</th>
                    </tr>
                </thead>

                {
                    filteredArr.map((value, index) => {
                        return (
                            <>

                                <tbody>
                                    <tr>
                                        <td>{value.name}</td>
                                        <td>{value.username}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.website}</td>
                                        <td>{value.company.name}</td>

                                    </tr>

                                </tbody>

                            </>
                        );
                    })
                }
                </table >

        </div>
    )
}

export default Axios
