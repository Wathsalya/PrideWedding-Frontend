import React, { useState, useEffect } from 'react'
import Jweller from './Jweller'
import axios from "axios";

export default function JwellerList() {
    const [jwellerList, setJwellerList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshJwellerList();
    }, [])

    const prideweddingAPI = (url = 'https://prideweddingapi.azurewebsites.net/api/JwelVendors/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshJwellerList() {
        prideweddingAPI().fetchAll()
            .then(res => {
                setJwellerList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('companyID') == "0")
            prideweddingAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshJwellerList();
                })
                .catch(err => console.log(err))
        else
            prideweddingAPI().update(formData.get('companyID'), formData)
                .then(res => {
                    onSuccess();
                    refreshJwellerList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            prideweddingAPI().delete(id)
                .then(res => refreshJwellerList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card"onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top-responsive" width="170" height="170" />
            <div className="card-body ">
                <h5>{data.companyName}</h5>
             
            </div>
        </div>
    )


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                    <br></br>
                        <h1 className="display-4">Publish Jewellery Advertisements</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <Jweller
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </div>
            <div className="col-md-6">
            <h1 className="lead text-center">Available Advertisements</h1>
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(jwellerList.length / 2))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(jwellerList[2 * i])}</td>
                                    <td>{jwellerList[2 * i + 1] ? imageCard(jwellerList[2 * i + 1]) : null}</td>
                                  
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
