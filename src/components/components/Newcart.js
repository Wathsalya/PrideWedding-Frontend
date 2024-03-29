import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const defaultImageSrc = '/img/giphy.gif'

const initialFieldValues = {
    companyID: 0,
    companyName: '',
    companyCategory:'',
    locatedDistrict: '',
    locatedProvince:'',
    discount_package:'',
    telephoneNumber:'',
	companyWebsite:'',
    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null
}

export default function Newcart(props) {

    const { addOrEdit, recordForEdit } = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})


    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit])

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            })
        }
    }

    const validate = () => {
        let temp = {}
        temp.companyName = values.companyName == "" ? false : true;
        temp.companyCategory = values.companyCategory == "" ? false : true;
        temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }

    const resetForm = () => {
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData()
            formData.append('companyID', values.companyID)
            formData.append('companyName', values.companyName)
            formData.append('companyCategory', values.companyCategory)
            formData.append('locatedDistrict', values.locatedDistrict)
            formData.append('locatedProvince', values.locatedProvince)
            formData.append('discount_package', values.discount_package)
      
            formData.append('telephoneNumber', values.telephoneNumber)
			formData.append('companyWebsite', values.companyWebsite)
        

            formData.append('imageFile', values.imageFile)
            addOrEdit(formData, resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')

    return (
     
        <>
          <div className="container text-center">
          <br></br>
                <p className="lead">Your CartItem</p>
           
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card">
                    <img src={values.imageSrc} className="card-img-top" />
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/x-png,image/gif,image/jpeg" className={"form-control-file" + applyErrorClass('imageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('companyName')} placeholder="Company Name" name="companyName"
                                value={values.companyName}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <select className={"form-control" + applyErrorClass('companyCategory')} placeholder="Company Category" name="companyCategory"
                                value={values.companyCategory}
                                onChange={handleInputChange} >


                                <option>Hotel & Catering</option>
                                <option>Saloon</option>
                                <option>Jewellers</option>
                                <option>Entertainers</option>
                                <option>Decorators</option>
                                <option>Photographers</option>
                                </select>
                        </div>

                        
                        <div className="form-group">
                            <select className={"form-control" + applyErrorClass('locatedDistrict')}  placeholder="Located District" name="locatedDistrict"
                                value={values.locatedDistrict}
                                onChange={handleInputChange} >
  
                                <option>Ampara</option>
                                <option>Anuradhapura</option>
                                <option>Badulla</option>
                                <option>Batticaloa</option>
                                <option>Colombo</option>
                                <option>Galle</option>
                                <option>Gampaha</option>
                                <option>Hambantota</option>
                                <option>Jaffna</option>
                                <option>Kalutara</option>
                                <option>Kandy</option>
                                <option>Kegalle</option>
                                <option>Kilinochchi</option>
                                <option>Kurunagala</option>
                                <option>Mannar</option>
                                <option>Matale</option>
                                <option>Matara</option>
                                <option>Monaragala</option>
                                <option>Mullaitivu</option>
                                <option>Nuwara Eliya</option>
                                <option>Polonnaruwa</option>
                                <option>Puttalam</option>
                                <option>Ratnapura</option>
                                <option>Trincomalee</option>
                                <option>Vavuniya</option>
                            </select>
        
                        </div>
                        <div className="form-group">
                            <select className={"form-control" + applyErrorClass('locatedProvince')} placeholder="Located Province" name="locatedProvince"
                                value={values.locatedProvince}
                                onChange={handleInputChange} >
                                <option>Central</option>
                                <option>Eastern</option>
                                <option> North Central</option>
                                <option>Northern</option>
                                <option> North Western</option>
                                <option>Sabaragamuwa</option>
                                <option>Southern</option>
                                <option>Uva</option>
                                <option> Western</option>

                                </select>
                        </div>

                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('discount_package')} placeholder=" Discount Package($)" name="discount_package"
                                value={values.discount_package}
                                onChange={handleInputChange} />
                        </div>


                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('telephoneNumber')} placeholder=" TelephoneNumber" name="telephoneNumber"
                                value={values.telephoneNumber}
                                onChange={handleInputChange} />
                        </div>
						 <div className="form-group">
                            <input className={"form-control" + applyErrorClass('companyWebsite')} placeholder="Web-URL" name="companyWebsite"
                                value={values.companyWebsite}
                                onChange={handleInputChange} />
                        </div>


                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-light">Submit</button>
                        </div>
                        <div>
                        <h4>Need to update your cartitem?</h4>
                        <Link to="contact-form">
                          <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Contact Us</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </>
       
    )
}
