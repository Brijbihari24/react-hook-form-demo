import React, { useState } from 'react'

function NormalForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        selectedCategory: "",
        tags: "",
        selectedFile: null,
        isPrivate: false

    })

    const handleChange = (e) => {
        //TODO: handle user input
        const { name, value, type, files, checked } = e.target

        setFormData((prev) => (
            {
                ...prev,
                [name]: type === 'checkbox' ? checked
                    : type === 'file' ? files[0]
                        : value,
            }
        ))
    }

    const handleSubmit = (e) => {
        // TODO: handle form submit 
        e.preventDefault();
        console.log("formdata ->", formData);
    }

    return (
        <section className='dynamic-react-form-sec mx-auto flex max-w-sm items-center gap-x-4 rounded-xl  p-6 shadow-lg outline mt-10'>
            <div className="dynamic-form-insidebox">
                <div className="dynamic-form-header text-3xl font-bold underline-none text-red-600">
                    <h2>Dynamic React Form</h2>
                </div>
                <div className="main-form-sec mt-3">
                    <form onSubmit={handleSubmit} className='dynamic-react-form'>
                        <div className='form-field'>
                            <label className='block text-sm/6 font-medium text-white'>Title</label>
                            <input
                                name="title"
                                type="text"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder='Enter Title'
                                className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6'
                            />
                        </div>
                        <div className='form-field'>
                            <label className='block text-sm/6 font-medium text-white'>Description</label>
                            <textarea
                                name='description'
                                type="textarea"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder='Enter Description'
                                className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6'
                            />
                        </div>
                        <div className='form-field'>
                            <label className='block text-sm/6 font-medium text-white'>Select Category</label>
                            <select
                                name="selectedCategory"
                                type="select"
                                value={formData.selectedCategory}
                                onChange={handleChange}
                                className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6'
                            >
                                <option value="SELECT">SELECT</option>
                                <option value="AUDIO">AUDIO</option>
                                <option value="VIDEO">VIDEO</option>
                                <option value="FILE">FILE</option>
                            </select>
                        </div>
                        <div className='form-field'>
                            <label className='block text-sm/6 font-medium text-white'>Tags</label>
                            <input
                                name="tags"
                                type="text"
                                value={formData.tags}
                                onChange={handleChange}
                                placeholder='Enter Tag'
                                className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6'
                            />
                        </div>
                        <div className='form-field'>
                            <label className='block text-sm/6 font-medium text-white'>File</label>
                            <input
                                name="selectedFile"
                                type="file"
                                // value={formData.selectedFile}
                                onChange={handleChange}
                                className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6'
                            />
                        </div>
                        <div className='form-field'>
                            <label className='font-medium text-white'>IsPrivate</label>
                            <input
                                name="isPrivate"
                                type="checkbox"
                                checked={formData.isPrivate}
                                onChange={handleChange}

                            />
                        </div>
                        <div className='text-center'>
                            <button
                                type='submit'
                                className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                            >Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default NormalForm