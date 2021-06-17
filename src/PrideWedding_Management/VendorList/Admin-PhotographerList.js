import React, { useState, useEffect } from 'react'

import axios from "axios";

export default function PhotographerList() {
    const [photographerList, setPhotographerList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshPhotographerList();
    }, [])

    const adminAPI = (url = 'https://prideweddingapi.azurewebsites.net/api/PhotographyVendors/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshPhotographerList() {
        adminAPI().fetchAll()
            .then(res => {
                setPhotographerList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('companyID') == "0")
            adminAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshPhotographerList();
                })
                .catch(err => console.log(err))
        else
            adminAPI().update(formData.get('companyID'), formData)
                .then(res => {
                    onSuccess();
                    refreshPhotographerList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            adminAPI().delete(id)
                .then(res => refreshPhotographerList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card"onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top-responsive" width="170" height="170" />
            <div className="card-body ">
            <h5>{data.companyCategory}</h5>
                <h6>{data.companyName}</h6>
                <span> District-{data.locatedDistrict}</span> <br />
                <span>{data.telephoneNumber}</span> <br />
        
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.companyID))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                    <br></br>
                        <h1 className="display-4">Hotel Vendors</h1>
                    </div>
                </div>
            </div>
          
            <div>
            <h1 className="lead">Available Advertisements</h1>
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(photographerList.length / 4))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(photographerList[4 * i])}</td>
                                    <td>{photographerList[4 * i + 1] ? imageCard(photographerList[4 * i + 1]) : null}</td>
                                    <td>{photographerList[4 * i + 2] ? imageCard(photographerList[4 * i + 2]) : null}</td>
                                    <td>{photographerList[4 * i + 3] ? imageCard(photographerList[4 * i + 3]) : null}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
