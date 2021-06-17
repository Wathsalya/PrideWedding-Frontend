import React, { useState, useEffect } from 'react'
import Cart from './Cart'
import axios from "axios";

export default function CartList() {
    const [cartList, setCartList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshCartList();
    }, [])

    const prideweddingAPI = (url = 'https://prideweddingapi.azurewebsites.net/api/AddingCarts/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshCartList() {
        prideweddingAPI().fetchAll()
            .then(res => {
                setCartList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('companyID') == "0")
            prideweddingAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshCartList();
                })
                .catch(err => console.log(err))
        else
            prideweddingAPI().update(formData.get('companyID'), formData)
                .then(res => {
                    onSuccess();
                    refreshCartList();
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
                .then(res => refreshCartList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card"onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top-responsive" width="170" height="170" />
            <div className="card-body ">
                <h5>{data.companyName}</h5>
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
                        <h1 className="display-4">Adding packages to cart</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <Cart
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </div>
            <div className="col-md-6">
            <h1 className="lead">Packages</h1>
                <table >
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(cartList.length / 3))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(cartList[3 * i])}</td>
                                    <td>{cartList[3 * i + 1] ? imageCard(cartList[3 * i + 1]) : null}</td>
                                   
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
