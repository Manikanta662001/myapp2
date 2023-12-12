import React,{useEffect,useState} from "react";
import axios from "axios";
const url='https://jsonplaceholder.typicode.com/photos'
const Fetching=()=>{
    const [data,setData]=useState([])
    const [loader, setloader] = useState(false)

    const [axiosdata,setAxiosData]=useState([])

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then((res)=>res.json())
            .then((response)=>setData(response))
            .catch((err)=>console.log(err))
            setloader(true)
        },5000)
        

    },[])

    useEffect(()=>{
        axios.get(url)
        .then((response)=>setAxiosData(response.data))
        .catch((err)=>console.log(err))

    },[])
    return(
        
        <>
        <h1>React</h1>
        <h2>fake api</h2>
        {
            loader?
            <table>
            <thead>
                <th>albumId</th>
                <th>id</th>
                <th>title</th>
                <th>url</th>
                <th>thumbnailUrl</th>
            </thead>
            <tbody>
                {
                    data.map((item)=>{
                        return(
                            <tr>
                            <td>{item.albumId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.url}</td>
                            <td>{item.thumbnailUrl}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
        :'data loading..............'
        }

        <h2>axios</h2>
        <table>
            <thead>
                <th>albumId</th>
                <th>id</th>
                <th>title</th>
                <th>url</th>
                <th>thumbnailUrl</th>
            </thead>
            <tbody>
                {
                    axiosdata.map((item)=>{
                        return(
                            <tr>
                            <td>{item.albumId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.url}</td>
                            <td>{item.thumbnailUrl}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}
export default Fetching