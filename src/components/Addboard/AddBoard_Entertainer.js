
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";


export default function AddBoard_Entertainer() {
    const [entertainerList, setEntertainerList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshEntertainerList();
    }, [])

    const employeeAPI = (url = 'https://prideweddingapi.azurewebsites.net/api/EntertainmentVendors/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshEntertainerList() {
        employeeAPI().fetchAll()
            .then(res => {
                setEntertainerList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('companyID') == "0")
            employeeAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshEntertainerList();
                })
                .catch(err => console.log(err))
        else
            employeeAPI().update(formData.get('companyID'), formData)
                .then(res => {
                    onSuccess();
                    refreshEntertainerList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    

    const imageCard = data => (
        <div className="card text-center" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top-responsive-center" width="250" height="250" />
            <div className="card-body">

            <h2><span class="badge badge-danger">{data.companyName}</span></h2>
 
                <span>{data.locatedDistrict} District</span> <br />
                <span>{data.locatedProvince} Province</span> <br />
                <span className="center">Min Package - {data.min_package}$</span> <br />
                <span>Max Package -{data.max_package}$</span> <br />
                <span>Telephone-{data.telephoneNumber}</span> <br />
                <span>See Our Website-{data.companyWebsite}</span> <br />
            </div>
        </div>
    )









  
    return (
    
        <div className="row">
        <div className="col-md-12">
            <div className="jumbotron jumbotron-fluid py-4">
                <div className="container text-center">
                    <h1 className="display-4">Entertainment Advertisements</h1>
                    <Link to="/table6">
                        <button  class="magenta">SEARCH</button>
                      </Link>
                </div>
            </div>
        </div>
        <div >
            <table>
                <tbody>
                    {
                        //tr > 3 td
                        [...Array(Math.ceil(entertainerList.length / 3))].map((e, i) =>
                            <tr key={i}>
                                <td>{imageCard(entertainerList[3 * i])}</td>
                                <td>{entertainerList[3 * i + 1] ? imageCard(entertainerList[3 * i + 1]) : null}</td>
                                <td>{entertainerList[3 * i + 2] ? imageCard(entertainerList[3 * i + 2]) : null}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
                 
                
    


)
}


