import React, { useState, useEffect } from 'react'
import Saloon from './Saloon'
import axios from "axios";

export default function SaloonList() {
    const [saloonList, setSaloonList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshSaloonList();
    }, [])

    const prideweddingAPI = (url = 'https://prideweddingapi.azurewebsites.net/api/SaloonVendors/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshSaloonList() {
        prideweddingAPI().fetchAll()
            .then(res => {
                setSaloonList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('companyID') == "0")
            prideweddingAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshSaloonList();
                })
                .catch(err => console.log(err))
        else
            prideweddingAPI().update(formData.get('companyID'), formData)
                .then(res => {
                    onSuccess();
                    refreshSaloonList();
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
                .then(res => refreshSaloonList())
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
                        <h1 className="display-4">Publish Saloon Advertisements</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <Saloon
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </div>
            <div className="col-md-6">
            <h1 className="lead">Available Advertisements</h1>
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(saloonList.length / 2))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(saloonList[2 * i])}</td>
                                    <td>{saloonList[2 * i + 1] ? imageCard(saloonList[2 * i + 1]) : null}</td>
                                   
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
