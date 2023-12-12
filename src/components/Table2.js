import React, { useEffect, useState } from "react";
import axios from 'axios';

let url = 'https://jsonplaceholder.typicode.com/todos'

const Table2 = () => {
    const [count, setCount] = useState(0)

    //fake api data
    const [data, setData] = useState([])
    console.log(data, '7767')

    //axios
    const [axiosData, setAxiosData] = useState([])
    console.log(axiosData, '999')

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 2000)
    },[])


    //fake api
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(response => setData(response))
            .catch((err) => console.log(err))

    }, [])
    //axios 
    useEffect(() => {
        axios.get(url)
            .then((res) => setAxiosData(res.data))
            .catch((err) => console.log(err))



    }, [])

    return (
        <>
            <h2>React training</h2>
            <h3>I am rendered by useEffect for {count} times</h3>
            <h1>fetch method with fake api call</h1>
            <table>
                <thead>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>

                </thead>
                <tbody>
                    {
                        data.map((items,ind) => {
                            return (
                                <tr key={ind}>
                                    <td>{items.userId}</td>
                                    <td>{items.id}</td>
                                    <td>{items.title}</td>
                                    <td>{String(items.completed)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <h1>Axios with api call</h1>
            <table>
                <thead>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>

                </thead>
                <tbody>
                    {
                        axiosData.map((items) => {
                            return (
                                <tr>
                                    <td>{items.userId}</td>
                                    <td>{items.id}</td>
                                    <td>{items.title}</td>
                                    <td>{String(items.completed)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default Table2