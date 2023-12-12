import React, { useState } from "react";
import '../App.css'
import './Table.css'

const Table = () => {
    let [empInfo, setEmpInfo] = useState([
        { Id: 1, Name: "Sangeetha", Age: 22, Gender: "Female", Designation: "UI-Developer" },
        { Id: 2, Name: "Beem", Age: 25, Gender: "Male", Designation: "python-Developer" },
        { Id: 3, Name: "Samatha", Age: 20, Gender: "Female", Designation: "java-Developer" },
        { Id: 4, Name: "Ram", Age: 23, Gender: "Male", Designation: "UI-Developer" },
        { Id: 5, Name: "Mani", Age: 23, Gender: "Male", Designation: "UI-Developer" }
    ])




    const [Display, setDisplay] = useState(null)
    const [showContent, SetshowContent] = useState(empInfo.length !== 0 ? true : false)

    const DisplayData = (emp) => {
        setDisplay(emp)



    }


    const DeleteData = (id) => {
        let filtered_data = empInfo.filter(item => item.Id !== id)
        console.log(filtered_data)
        setEmpInfo(filtered_data)
        SetshowContent(filtered_data.length !== 0 ? true : false)


    }

    const onlyMale = () => {
        let male_data = empInfo.filter(item => item.Gender === 'Male')
        console.log(male_data)
        setEmpInfo(male_data)

    }


    return (
        <div className="App">
            <h1>React Training</h1>
            {
                showContent ?
                    <div>
                        <table>
                            <caption>Employees</caption>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    empInfo.length > 0 && empInfo.map((emp,ind) =>
                                        <>
                                            <tr onClick={() => DisplayData(emp)} key={ind}>
                                                <td>{emp.Id}</td>
                                                <td>{emp.Name}</td>
                                                <td>{emp.Age}</td>
                                                <td>{emp.Gender}</td>
                                                <td>{emp.Designation}</td>
                                            </tr>
                                            <td><button onClick={() => DeleteData(emp.Id)}>Delete</button></td>

                                        </>

                                    )

                                }


                            </tbody>
                        </table>

                        <div id="dis">
                            <h1>{Display?.Id}</h1>
                            <h1>{Display?.Name}</h1>
                            <h1>{Display?.Age}</h1>
                            <h1>{Display?.Gender}</h1>
                            <h1>{Display?.Designation}</h1>
                        </div>

                        <button onClick={onlyMale}>click it to display only male</button>

                    </div>
                    : 'Data not found'


            }



        </div>
    )
}
export default Table