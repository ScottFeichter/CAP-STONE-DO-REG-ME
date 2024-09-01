import './CreateNewEmployeeForm.css';
// const BASE_CLASS_NAME = "CreateNewEmployeeForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import * as employeesActions from '../../employees'
// import * as imagesActions from '../../images';
// import * as reviewsActions from '../../reviews';


// const testNewEmployee = {

//     description: "All work and no play makes jack a dull boy. All work and no play makes jack a dull boy. All work and no play makes jack a dull boy. All work and no play makes jack a dull boy. All work and no play makes jack a dull boy. All work and no play makes jack a dull boy. All work and no play makes jack a dull boy. All work and no play makes jack a dull boy. All work and no play makes jack a dull boy. All work and no play makes jack a dull boy. All work and no play makes jack a dull boy."
// }


function CreateNewEmployeeForm() {

        const dispatch = useDispatch();
        const navigate = useNavigate();


        const [errors, setErrors] = useState({});
        // const [isDisabled, setIsDisabled] = useState(false);

// states form section 1----------------------------------------------------------
        const [country, setCountry] = useState("");
        const [streetAddress, setStreetAddress] = useState("");
        const [city, setCity] = useState("");
        const [state, setState] = useState("");
        const [latitude, setLatitude] = useState("");
        const [longitude, setLongitude] = useState("");

// states form section 2----------------------------------------------------------

        const [description, setDescription] = useState("")

// states form section 3----------------------------------------------------------

        const [title, setTitle] = useState("")

// states form section 4----------------------------------------------------------

        const [basePrice, setBasePrice] = useState("")

// states form section 5----------------------------------------------------------

        const [previewImg, setPreviewImg] = useState("")
        const [img1, setImg1] = useState("")
        const [img2, setImg2] = useState("")
        const [img3, setImg3] = useState("")
        const [img4, setImg4] = useState("")

// CreateNewEmployee Button Disabled------------------------------------------------------------------------


    // const checkDisabled = () => {
    //     if(
    //     (country.length === 0 || !country) ||
    //     (streetAddress.length === 0 || !streetAddress) ||
    //     (city.length === 0 || !city) ||
    //     (state.length === 0 || !state) ||
    //     (latitude.length === 0 || !latitude) ||
    //     (longitude.length === 0 || !longitude) ||
    //     (state.length < 4) ||
    //     (latitude.length < 6)
    //     )
    //     {setIsDisabled(true) } else {setIsDisabled(false)}

    //    }

    //    useEffect(()=> {
    //     checkDisabled();
    //    });



// CreateNewEmployee Button handler------------------------------------------------------------------------



        const handleSubmit = async (e) => {
            e.preventDefault();
            // console.log('HANDLE SUBMIT NEW SPOT IS RUNNING');

            if(!country) {
                setErrors({country: "Country is required"})
                return;
            }

            if(!description) {
                setErrors({description: "You must provide a description"})
                return;
            }

            if(description.length < 10){
                setErrors({description: "Please provide a longer description"})
                return;
            }

            if(!title){
                setErrors({title: "Please provide a title"})
                return;
            }

            if(!basePrice){
                setErrors({price: "Please provide a price"})
                return;
            }

            if(!previewImg) {
                setErrors({previewImg: "A preview image is required"});
                return;
            }

            const newEmployee = {
                "address": streetAddress,
                "city": city,
                "state": state,
                "country": country,
                "lat": +latitude,
                "lng": +longitude,
                "name": title,
                "description": description,
                "price": +basePrice,
            }

            let employeeId;

            await dispatch(employeesActions.createEmployee(newEmployee))
            .then(response => {
                // console.log('CREATENEWSPOT RESPONSE: ', response, 'CREATENEWSPOT THENEWSPOT: ')
                return response
            })
            .then(response => {
                // console.log(`NEW SPOT CREATED`, response);
                employeeId = response.payload.id;
                return response;
            })
            .then(response =>  {
                const prevImageInfo = {employeeId: response.payload.id, url: previewImg, preview: true};
                return dispatch(imagesActions.addImageToEmployee(prevImageInfo));
            }).then(response =>  {
                // console.log('RESPONSE++++++++++++++++++++++++++++110', response)
                if(img1) {
                    const img1Info = {employeeId: employeeId, url: img1, preview: false};
                    return dispatch(imagesActions.addImageToEmployee(img1Info));
                }
                return response;
            }).then(response =>  {
                // console.log('RESPONSE++++++++++++++++++++++++++++117', response)
                if(img2) {
                    const img2Info = {employeeId: employeeId, url: img2, preview: false};
                    return dispatch(imagesActions.addImageToEmployee(img2Info));
                }
                return response;
            }).then(response =>  {
                // console.log('RESPONSE++++++++++++++++++++++++++++124', response)
                if(img3) {
                    const img3Info = {employeeId: employeeId, url: img1, preview: false};
                    return dispatch(imagesActions.addImageToEmployee(img3Info));
                }
                return response;
            }).then(async response =>  {
                // console.log('RESPONSE++++++++++++++++++++++++++++131', response)
                if(img4) {
                    const img4Info = {employeeId: employeeId, url: img1, preview: false};
                    return dispatch(imagesActions.addImageToEmployee(img4Info));
                }
                return response;
            }).then(response => {
                // console.log(`NEW SPOT IMAGES ADDED`);
                // console.log('RESPONSE++++++++++++++++++++++++++++139', response)
                return response;
            }).then(response => {
                // console.log('RESPONSE++++++++++++++++++++++++++++142', response)
                response
                return dispatch(reviewsActions.getReviewsByEmployeeId(employeeId));
            }).then(response => {
                // console.log('RESPONSE++++++++++++++++++++++++++++145', response)
                response
                return dispatch(employeesActions.getEmployeeDetailsById(employeeId))
            }).then(response => {
                // console.log('RESPONSE++++++++++++++++++++++++++++148', response)
                response
                return dispatch(employeesActions.search());
            }).then(response => {
                // console.log('RESPONSE++++++++++++++++++++++++++++154', response, response.payload)
                response
                navigate(`/employees/${employeeId}`)
            }).catch(
                async (res) => {
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )


            // console.log('HANDLE SUBMIT NEW SPOT HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

        }




        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     if (longitude === latitude) {
        //         setErrors({});
        //         // // console.log('HANDLE SUBMIT RAN - SIGNUP INFO', country, streetAddress, city, state, latitude);
        //         return dispatch(employeesActions.signup({country, streetAddress, city, state, latitude}))
        //         .then(closeModal)
        //         .catch(
        //             async (res) => {
        //                 const data = await res.json();
        //                 if (data?.errors) setErrors(data.errors);
        //                 // // console.log('CATCH DISPATCH RAN', data);
        //             }
        //         )
        //     }

        //     return setErrors({
        //         longitude: "Confirm Password field must be the same as the Password field"
        //     })
        // };


// return-----------------------------------
        return (
          <main id="CreateNewEmployeeMain">

            <h1>Create A New Employee</h1>


                    <form id='CreateNewEmployeeForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="CreateNewEmployeeFormSection1">

                            <h4 id="CreateNewEmployeeFormSection1H4">Where&apos;s your place located?</h4>

                            <p id="CreateNewEmployeeFormSection1P">
                                Guests will only get your exact address once they booked a reservation.
                            </p>

                            <div id='countryContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Country:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="country"
                                            name="country"
                                            type="text"
                                            placeholder='Country'
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            required
                                            />
                                        </label>
                                    </div>
                                    {errors.country && <p className='CreateNewEmployeeErrors'>{errors.country}</p>}

                                <div id='streetAddressContainer' className='CreateNewEmployeeFormLabelInputContainer'>
                                        <label className='CreateNewEmployeeFormLabel'>
                                            Street Address:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="streetAddress"
                                            name="streetAddress"
                                            placeholder='Address'
                                            value={streetAddress}
                                            type="text"
                                            onChange={(e) => setStreetAddress(e.target.value)}
                                            required
                                            />
                                        </label>
                                    </div>
                                    {errors.address && <p className='CreateNewEmployeeErrors'>{errors.address}</p>}

                                <div id='cityContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                                City:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="city"
                                            name="city"
                                            placeholder='City'
                                            value={city}
                                            type="text"
                                            onChange={(e) => setCity(e.target.value)}
                                            required
                                            />
                                        </label>
                                    </div>
                                    {errors.city && <p className='CreateNewEmployeeErrors'>{errors.city}</p>}

                                <div id='stateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                            <label className='CreateNewEmployeeFormLabel'>
                                                State:
                                                <input
                                                className='CreateNewEmployeeFormInput'
                                                id="state"
                                                name="state"
                                                placeholder='STATE'
                                                value={state}
                                                type="state"
                                                onChange={(e) => setState(e.target.value)}
                                                required
                                                />
                                            </label>
                                        </div>
                                        {errors.state && <p className='CreateNewEmployeeErrors'>{errors.state}</p>}


                                    <div id='latitudeContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                            <label className='CreateNewEmployeeFormLabel'>
                                                Latitude:
                                                <input
                                                className='CreateNewEmployeeFormInput'
                                                id="latitude"
                                                name="latitude"
                                                placeholder='Latitude'
                                                value={latitude}
                                                type="latitude"
                                                onChange={(e) => setLatitude(e.target.value)}
                                                required
                                                />
                                            </label>
                                        </div>
                                        {errors.latitude && <p>{errors.latitude}</p>}


                                    <div id='longitudeContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                            <label className='CreateNewEmployeeFormLabel'>
                                                Longitude:
                                                <input
                                                className='CreateNewEmployeeFormInput'
                                                id="longitude"
                                                name="longitude"
                                                placeholder='Longitude'
                                                value={longitude}
                                                type="latitude"
                                                onChange={(e) => setLongitude(e.target.value)}
                                                required
                                                />
                                            </label>
                                        </div>
                                        {errors.longitude && <p>{errors.longitude}</p>}

                        </section>

                        <hr className='CreateNewEmployeeHr'></hr>
{/* form section 2---------------------------------------------------------- */}

                        <section id="CreateNewEmployeeFormSection2">

                        <h4 id="CreateNewEmployeeFormSection2H4">Describe your place to guests</h4>

                            <p id="CreateNewEmployeeFormSection2P">
                                Mention the best features of your space, any special amentities like fast wifi or parking, and what you love about the neighborhood.
                            </p>

                            <div id='descriptionContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>

                                            <textarea
                                            className='CreateNewEmployeeFormInput'
                                            id="description"
                                            name="description"
                                            rows={8}
                                            cols={40}
                                            type="text-area"
                                            placeholder="Please write at least 30 characters"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                            />
                                        </label>
                            </div>
                            {errors.description && <p className='CreateNewEmployeeErrors'>{errors.description}</p>}





                        </section>

                        <hr className='CreateNewEmployeeHr'></hr>

{/* form section 3---------------------------------------------------------- */}

                        <section id="CreateNewEmployeeFormSection3">

                        <h4 id="CreateNewEmployeeFormSection3H4">Create a title for your employee</h4>

                            <p id="CreateNewEmployeeFormSection3P">
                                Catch guests&apos; attention with a employee title that highlights what makes your place special.
                            </p>

                            <div id='titleContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>

                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="title"
                                            name="title"
                                            type="text"
                                            placeholder='Name of your employee'
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                            />
                                        </label>
                            </div>
                            {errors.title && <p className='CreateNewEmployeeErrors'>{errors.title}</p>}



                        </section>

                        <hr className='CreateNewEmployeeHr'></hr>


{/* form section 4---------------------------------------------------------- */}

                        <section id="CreateNewEmployeeFormSection4">

                        <h4 id="CreateNewEmployeeFormSection4H4">Set a base price for your employee</h4>

                            <p id="CreateNewEmployeeFormSection4P">
                                Competitive pricing can help your listing stand out and rank higher in search results.
                            </p>

                            <div id='basePriceContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel' id="basePriceLabel">

                                            <p>$</p>
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="basePrice"
                                            name="basePrice"
                                            type="text"
                                            placeholder='Price per night (USD)'
                                            value={basePrice}
                                            onChange={(e) => setBasePrice(e.target.value)}
                                            required
                                            />
                                        </label>
                            </div>
                            {errors.price && <p className='CreateNewEmployeeErrors'>{errors.price}</p>}



                        </section>

                        <hr className='CreateNewEmployeeHr'></hr>


{/* form section 5---------------------------------------------------------- */}

                        <section id="CreateNewEmployeeFormSection5">

                            <h4 id="CreateNewEmployeeFormSection5H4">Liven up your employee with photos</h4>

                            <p id="CreateNewEmployeeFormSection5P">
                                Submit a link to at least one photo to publish your employee.
                            </p>

                            <div id='previewImgContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="previewImg"
                                            name="previewImg"
                                            type="text"
                                            placeholder='Preview Image URL'
                                            value={previewImg}
                                            onChange={(e) => setPreviewImg(e.target.value)}
                                            required
                                            />
                                        </label>
                            </div>
                            {errors.previewImg && <p className='CreateNewEmployeeErrors'>{errors.previewImg}</p>}

                            <div id='img1Container' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>

                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="img1"
                                            name="img1"
                                            type="text"
                                            placeholder='Image URL'
                                            value={img1}
                                            onChange={(e) => setImg1(e.target.value)}

                                            />
                                        </label>
                            </div>
                            {errors.img1 && <p className='CreateNewEmployeeErrors'>{errors.img1}</p>}

                            <div id='img2Container' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>

                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="img2"
                                            name="img2"
                                            type="text"
                                            placeholder='Image URL'
                                            value={img2}
                                            onChange={(e) => setImg2(e.target.value)}

                                            />
                                        </label>
                            </div>
                            {errors.img2 && <p className='CreateNewEmployeeErrors'>{errors.img2}</p>}

                            <div id='img3Container' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>

                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="img3"
                                            name="img3"
                                            type="text"
                                            placeholder='Image URL'
                                            value={img3}
                                            onChange={(e) => setImg3(e.target.value)}

                                            />
                                        </label>
                            </div>
                            {errors.img3 && <p>{errors.img3}</p>}

                            <div id='img4Container' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>

                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="img4"
                                            name="img4"
                                            type="text"
                                            placeholder='Image URL'
                                            value={img4}
                                            onChange={(e) => setImg4(e.target.value)}

                                            />
                                        </label>
                            </div>
                            {errors.img4 && <p className='CreateNewEmployeeErrors'>{errors.img4}</p>}



                        </section>

                        <hr className='CreateNewEmployeeHr'></hr>



{/* form button---------------------------------------------------------- */}

                        <div id="buttonContainer">
                            <button
                                id="CreateNewEmployeeButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Create Employee
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default CreateNewEmployeeForm;
