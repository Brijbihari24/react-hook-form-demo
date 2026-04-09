import React from 'react'
import { useForm } from "react-hook-form"

function RHF() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log("formData ->", {
            ...data,
            selectedFile: data.selectedFile[0]
        });

    }
    return (
        <section className='dynamic-react-form-sec mx-auto flex max-w-sm items-center gap-x-4 rounded-xl  p-6 shadow-lg outline mt-10'>
            <div className="dynamic-form-insidebox">
                <div className="dynamic-form-header text-3xl font-bold underline-none text-red-600">
                    <h2>React Hook Form</h2>
                </div>
                <div className="main-form-sec mt-3">
                    <form onSubmit={handleSubmit(onSubmit)} className='dynamic-react-form'>
                        <div className='form-field'>
                            <label className='block text-sm/6 font-medium text-white'>Title</label>
                            <input
                                type="text"
                                placeholder='Enter Title'
                                {...register('title', { required: "Title is required!" })}
                                className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6'
                            />
                        </div>
                        <div className='form-field'>
                            <label className='block text-sm/6 font-medium text-white'>Description</label>
                            <textarea
                                type="textarea"
                                placeholder='Enter Description'
                                {...register('description')}
                                className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6'
                            />
                        </div>
                        <div className='form-field'>
                            <label className='block text-sm/6 font-medium text-white'>Select Category</label>
                            <select
                                type="select"
                                {...register('selectedCategory', { required: "Required field" })}
                                className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6'
                            >
                                <option value="">SELECT</option>
                                <option value="AUDIO">AUDIO</option>
                                <option value="VIDEO">VIDEO</option>
                                <option value="FILE">FILE</option>
                            </select>
                            {errors.selectedCategory && <p>{errors.selectedCategory.message}</p>}
                        </div>
                        <div className='form-field'>
                            <label className='block text-sm/6 font-medium text-white'>Tags</label>
                            <input
                                type="text"
                                placeholder='Enter Tag'
                                {...register('tags', { required: "Tags are required!" })}
                                className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6'
                            />
                        </div>
                        <div className='form-field'>
                            <label className='block text-sm/6 font-medium text-white'>File</label>
                            <input
                                type="file"
                                {...register('selectedFile', { required: "file is required!" })}
                                // value={formData.selectedFile}
                                className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6'
                            />
                            {errors.selectedFile && <p className='text-rose-600'>{errors.selectedFile.message}</p>}
                        </div>
                        <div className='form-field'>
                            <label className='font-medium text-white'>IsPrivate</label>
                            <input
                                type="checkbox"
                                {...register('isPrivate')}
                            // checked={formData.isPrivate}
                            // onChange={handleChange}

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

export default RHF