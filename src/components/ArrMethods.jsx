import React from 'react'

export default function ArrMethods() {
    const myarr = [10, 22, 3, 1, 7, 90, 65]
    let text = ''
    const filtered = myarr.filter((item) => item > 15)
    console.log('FILTERED', filtered)
    const myfun = (total, value) => {
        return total + value
    }
    const reduced = myarr.reduce(myfun, 100)

    console.log("REDUCED", reduced)

    const findmethodvalue = myarr.find((item) => item > 77)
    console.log(findmethodvalue, "FINDMETHODVALUE")
    const included_or_not = myarr.includes(90)
    console.log(included_or_not, "INCLUDES")

    //Destructuring
    const person = {
        firstName: "Nick",
        lastName: "Anderson",
        age: 35,
        sex: "M",
        address: {
            city: 'Houston',
            state: 'Texas',
            country: 'USA'
        }
    }
    const { firstName, lastName, age, sex, address: { city, state, country } } = person
    console.log(firstName, lastName, age, sex, city, state, country, "PERSON")

    const [x, y, z] = myarr
    console.log(x, y, z)

    //spread Operator
    const arr2 = [12, 3, 0, 76, 4]
    const final_array = [...myarr, ...arr2]
    console.log(final_array, "FINAL_ARR")



    const person2 = {
        exp1:
        {
            firstName: "Nick",
            lastName: "Anderson",
            age: 35,
            sex: "M",
            address: {
                city: 'Houston',
                state: 'Texas',
                country: 'USA'
            }
        },
        exp2:
        {
            firstName: "Nick",
            lastName: "Anderson",
            age: 35,
            sex: "M",
            address: {
                city: 'Houston',
                state: 'Texas',
                country: 'USA'
            }
        }
    }

    const final_obj = { ...person2, exp3: { name: 'hello' } }
    console.log(final_obj, "FINAL_OBJ")


    console.log(Math.max([10, 22, 3, 1, 7, 90, 65]))//NaN
    console.log(Math.max(10, 22, 3, 1, 7, 90, 65))//90
    console.log(Math.min(10, 22, 3, 1, 7, 90, 65))//1
    return (

        <div>
            <h1>Array Methods</h1>
            <h3>Mapping</h3>
            {
                myarr.map((item) => {
                    return (
                        <span>{item * 2}{'  '}</span>
                    )
                })
            }
            <h3>ForEach</h3>
            {
                myarr.forEach((item) => {
                    text += item + ' '

                })
            }
            <h5>{text}</h5>


        </div>
    )
}
