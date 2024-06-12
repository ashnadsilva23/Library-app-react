import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewBooks = () => {
    const[data,changeData]=useState(
        [{

            "title":"",
            "category":"",
            "publishedYear":"",
            "author":"",
            "description":"",
            "distributer":"",
            "publisher":"",
            "price":""
            
        }]

    )
    const fetchData = () => {
        axios.post("http://localhost:8080/view").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()

    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar/>
            <div className="container">
            <h1 align="center">View Book</h1><br></br><br></br>

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-dark table-striped">
                            
                                <thead>
                                    <tr>
                                        <th scope="col">sl no</th>
                                        <th scope="col">Book Title</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Published Year</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Distributer Name</th>
                                        <th scope="col">Publisher </th>
                                        <th scope="col"> price</th>

                                    </tr>
                                </thead>
                                <tbody>
                                   
                                  
                                   
                               {data.map(
                                (value,index)=>{
                                    return <tr>
                                    <td> {index+1}</td>
                                    <td> {value.title}</td>
                                    <td> {value.category}</td>
                                    <td> {value.publishedYear}</td>
                                    <td> {value.author}</td>
                                    <td> {value.description}</td>
                                    <td> {value.distributer}</td>
                                    <td> {value.publisher}</td>
                                    <td> {value.price}</td>
                                   
                                </tr>
                                }
                               )}
                                  
                                    
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBooks