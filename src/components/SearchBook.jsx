import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SearchBook = () => {
    const [data, changeData] = useState({
        "title": ""
        
    })
const[result,setResult]=useState([])

const deleteBook=(id)=>{
    let input ={"_id":id}
    axios.post("http://localhost:8080/delete",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success" ){
                alert("deleted successfully")
                
            } else {
                alert("error in deletion")
                
            }

        }
    ).catch().finally()


}
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })


    }
    const readValue = () => {
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                setResult(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)

            }
        ).finally()
    }
  return (
    <div>
        <Navbar/>
        <h1 align="center">Search Book</h1><br></br><br></br>
        <div className="container">

            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                            <label htmlFor="" className="form-label">Book Title</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                            <button className="btn btn-success" onClick={readValue}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">

<div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <table class="table">
<thead>
<tr>
<th scope="col">Title</th>
<th scope="col">category</th>           
<th scope="col">published Year</th>
<th scope="col">author</th>
<th scope="col">description</th>
<th scope="col">distributer </th>
<th scope="col">publisher </th>
<th scope="col">price </th>
</tr>
</thead>
<tbody>
{result.map(
(value,index)=>{
return  <tr>
<td>{value.title}</td>
<td>{value.category}</td>
<td>{value.publishedYear}</td>
<td>{value.author}</td>
<td>{value.description}</td>
<td>{value.publisher}</td>
<td>{value.price}</td>
<td><button className="btn btn-danger" onClick={()=>{deleteBook(value._id)}}>Delete</button></td>

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

export default SearchBook