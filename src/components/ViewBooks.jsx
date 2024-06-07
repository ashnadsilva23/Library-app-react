import React from 'react'
import Navbar from './Navbar'

const ViewBooks = () => {
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
                                        <th scope="col">Author</th>
                                        <th scope="col">Published Year</th>
                                        <th scope="col"> price</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Harry Potter</td>
                                        <td>John </td>
                                        <td>1980</td>
                                        <td>300</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jane Eyre</td>
                                        <td>charlo Bontee qouilo</td>
                                        <td>1988</td>
                                        <td>250</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>In Cold Blood</td>
                                        <td> Trumen Captte</td>
                                        <td>1917</td>
                                        <td>150</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Vanity Fair</td>
                                        <td> william</td>
                                        <td>1907</td>
                                        <td>400</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Drakula</td>
                                        <td>Bram Stoker</td>
                                        <td>1976</td>
                                        <td>320</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Lolita</td>
                                        <td> Wladimir</td>
                                        <td>1967</td>
                                        <td>320</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>To kill a monging bird</td>
                                        <td> Harpe</td>
                                        <td>1960</td>
                                        <td>200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>Alchemist</td>
                                        <td>Paulo qouilo</td>
                                        <td>2007</td>
                                        <td>200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>Currious incident</td>
                                        <td> Haddon</td>
                                        <td>2007</td>
                                        <td>200</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBooks