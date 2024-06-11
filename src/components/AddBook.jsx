import React, { useState } from 'react'
import Navbar from './Navbar'

const AddBook = () => {
    

    const[data,changeData]=useState(
        {

            "title":"",
            "category":"",
            "publishedYear":"",
            "author":"",
            "description":"",
            "distributer":"",
            "publisher":"",
            "price":""
            
        }

    )
const inputHandler=(event)=>
    {
        console.log(data)
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>
        {
            console.log(data)
        }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h1 align="center">Add Book</h1><br></br><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 vol-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Book Title</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Category</label>
                            <select  id="" className="form-control" name='category' value={data.category} onChange={inputHandler}>
                                <option value="Fiction">Fiction</option>
                                <option value="Novel">Novel</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"> Published Year</label>
                            <input type="text" className="form-control" name='publishedYear' value={data.publishedYear} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Author Name</label>
                            <input type="text" className="form-control" name='author' value={data.author} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea  id="" className="form-control" name='description' value={data.description} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Distributor Name</label>
                            <input type="text" className="form-control" name='distributer' value={data.distributer} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Publisher Name</label>
                            <input type="text" className="form-control" name='publisher' value={data.publisher} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler} />
                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Add Book</button>

                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBook