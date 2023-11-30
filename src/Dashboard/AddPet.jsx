
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios'

const img_bb_hosting_key = "6f5c067f3e15b76d9db487b5755167d6"
const hosting_api = `https://api.imgbb.com/1/upload?key=${img_bb_hosting_key}`;

const AddPet = () => {
    const { user } = useContext(AuthContext)


    const categories = [
        { value: 'Dog', label: 'Dog' },
        { value: 'Cat', label: 'Cat' },
        { value: 'Rabbit', label: 'Rabbit' },
        { value: 'Bird', label: 'Bird' },
    ];

    const formik = useFormik({
        initialValues: {
            petImage: null,
            petName: '',
            petAge: '',
            petCategory: '',
            petLocation: '',
            shortDescription: '',
            longDescription: '',
        },
        validationSchema: Yup.object({
            petName: Yup.string().required('Required'),
            petAge: Yup.number().required('Required').positive('Must be a positive number'),
            petCategory: Yup.string().required('Required'),
            petLocation: Yup.string().required('Required'),
            shortDescription: Yup.string().required('Required'),
            longDescription: Yup.string().required('Required'),
        }),

        onSubmit: async (values) => {
            // Upload image to ImgBB
            const formData = new FormData();
            formData.append('image', values.petImage);
            try {
                const imgbbResponse = await axios.post(hosting_api, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // Extract the image URL from the ImgBB response
                const imageUrl = imgbbResponse.data.data.url;

                // Continue with the rest of the form data
                const formattedPetAddedDate = new Date().toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                });

                const AddPetInfo = {
                    ...values,
                    petImage: imageUrl, // Update the petImage field with the ImgBB URL
                    adopted: false,
                    addedDate: formattedPetAddedDate,
                    addedBy: user.email,
                };

                console.log(AddPetInfo);



                    fetch('https://petco-server.vercel.app/addPet', {
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(AddPetInfo)
                })
                .then(res=>res.json())
                .then(data=>{
                    // console.log(data)
                    if(data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "You Successfully added A pet",
                            showConfirmButton: false,
                            timer: 1500
                          });}

                })
            } catch (error) {
                console.error('Error uploading image to ImgBB:', error)
            }
        },
    });

    return (
        <div className=" mx-auto mt-8 p-4 lg:w-4/5  bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add a Pet</h2>
            <form onSubmit={formik.handleSubmit}>

                {/* img */}
                <div className="mb-4">
                    <label htmlFor="petImage" className="block text-sm font-semibold mb-1">Pet Image</label>
                    <input
                        type="file"
                        id="petImage"
                        name="petImage"
                        onChange={(event) => formik.setFieldValue('petImage', event.currentTarget.files[0])}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md"
                    />
                    {formik.touched.petImage && formik.errors.petImage && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.petImage}</div>
                    )}
                </div>

                {/* Name */}

                <div className="mb-4">
                    <label htmlFor="petName" className="block text-sm font-semibold mb-1">Pet Name</label>
                    <input
                        type="text"
                        id="petName"
                        name="petName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.petName}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md"
                    />
                    {formik.touched.petName && formik.errors.petName && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.petName}</div>
                    )}
                </div>

                {/* age */}
                <div className="mb-4">
                    <label htmlFor="petAge" className="block text-sm font-semibold mb-1">Pet Age</label>
                    <input
                        type="number"
                        id="petAge"
                        name="petAge"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.petAge}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md"
                    />
                    {formik.touched.petAge && formik.errors.petAge && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.petAge}</div>
                    )}
                </div>


                {/* Category */}
                <div className="mb-4">
                    <label htmlFor="petCategory" className="block text-sm font-semibold mb-1">Pet Category</label>
                    <Select
                        id="petCategory"
                        name="petCategory"
                        options={categories}
                        value={categories.find((c) => c.value === formik.values.petCategory)}
                        onChange={(option) => formik.setFieldValue('petCategory', option.value)}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.petCategory && formik.errors.petCategory && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.petCategory}</div>
                    )}
                </div>
                {/* location */}
                <div className="mb-4">
                    <label htmlFor="petLocation" className="block text-sm font-semibold mb-1">Pet Location</label>
                    <input
                        type="text"
                        id="petLocation"
                        name="petLocation"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.petLocation}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md"
                    />
                    {formik.touched.petLocation && formik.errors.petLocation && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.petLocation}</div>
                    )}
                </div>
                {/* short description */}
                <div className="mb-4">
                    <label htmlFor="shortDescription" className="block text-sm font-semibold mb-1">Short Description</label>
                    <textarea
                        type="text"
                        id="shortDescription"
                        name="shortDescription"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.shortDescription}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md"
                    />
                    {formik.touched.shortDescription && formik.errors.shortDescription && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.shortDescription}</div>
                    )}
                </div>

                {/* Long description */}
                <div className="mb-4">
                    <label htmlFor="longDescription" className="block text-sm font-semibold mb-1">Long Description</label>
                    <textarea
                        type="text"
                        id="longDescription"
                        name="longDescription"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.longDescription}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md"
                    />
                    {formik.touched.longDescription && formik.errors.longDescription && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.longDescription}</div>
                    )}
                </div>

                <div>
                    <button type="submit"
                        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPet;
