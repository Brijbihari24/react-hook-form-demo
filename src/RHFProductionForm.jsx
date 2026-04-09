import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

const uploadSchema = z.object({
    //TODO: add validationa                                                                                                                       
    title: z.string()
        .min(3, 'Title should be more than 3 characters')
        .max(50, 'Title should be less than 50 characters'),
    description: z.string()
        .min(10, 'Description should be more than 3 characters'),
    selectedCategory: z.enum(['AUDIO', 'VIDEO', 'FILE'], {
        errorMap: () => ({ message: "Select File" })
    }),
    tag: z.string()
        .min(3, 'tag should be more than 3 characters')
        .max(20, 'tag should be less than 20 characters'),
    selectedFile: z.any()
        .refine((files) => files?.[0], 'File required hai')
        .refine((files) => files?.[0]?.size <= 5 * 1024 * 1024, 'Max 5MB allowed')
        .refine(
            (files) => ['image/jpeg', 'image/png', 'video/mp4'].includes(files?.[0]?.type),
            'Only jpg, png, mp4 allowed'
        )
    ,
    isPrivate: z.boolean().optional()

})

function RHFProductionForm() {


    const {
        handleSubmit,
        register,
        setError,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(uploadSchema),
        defaultValues: {
            isPrivate: false
        }
    })

    const onSubmit = async (data) => {
        console.log("formData -> ", {
            ...data, selectedFile: data.selectedFile[0]
        }
        )
        try {
            //API Call
        } catch (error) {
            console.log("error ->", error);
            setError('root', { message: error.response?.data?.message })
        }
    }

    return (
        <>
            <section className='dynamic-react-form-sec'>
                <div className='dynamic-form-insidebox'>
                    <div className="dynamic-form-header">
                        <h2>RHFProductionForm</h2>
                    </div>
                    <div className='main-form-sec mt-3'>
                        <form onSubmit={handleSubmit(onSubmit)} className='dynamic-react-form'>
                            <div className='form-field'>
                                <label className='form-label'>Title</label>
                                <input
                                    type="text"
                                    placeholder='Enter Title'
                                    {...register('title')}
                                    className='form-input-field'
                                />
                                {errors.title && <p className='error-message'>{errors.title.message}</p>}
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>Description</label>
                                <input
                                    type="text"
                                    placeholder='Enter Description'
                                    {...register('description')}
                                    className='form-input-field'
                                />
                                {errors.description && <p className='error-message'>{errors.description.message}</p>}
                            </div>

                            <div className='form-field'>
                                <label className='form-label'>Category</label>
                                <select
                                    type='select'
                                    {...register('selectedCategory')}
                                    className='form-input-field'
                                >
                                    <option value="">SELECT</option>
                                    <option value="AUDIO">AUDIO</option>
                                    <option value="VIDEO">VIDEO</option>
                                    <option value="FILE">FILE</option>
                                </select>
                                {errors.selectedCategory && <p className='error-message'>{errors.selectedCategory.message}</p>}
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>Tag</label>
                                <input
                                    type="text"
                                    placeholder='Enter Tag'
                                    {...register('tag')}
                                    className='form-input-field'
                                />
                                {errors.tag && <p className='error-message'>{errors.tag.message}</p>}
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>File</label>
                                <input
                                    type="file"
                                    {...register('selectedFile')}
                                    className='form-input-field'
                                />
                                {errors.selectedFile && <p className='error-message'>{errors.selectedFile.message}</p>}
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>IsPrivate</label>
                                <input
                                    type="checkbox"
                                    {...register('isPrivate')}
                                    className='form-input-field'
                                />
                                {errors.isPrivate && <p className='error-message'>{errors.isPrivate.message}</p>}
                            </div>

                            <button type='submit' className='form-submit-btn'>
                                {isSubmitting ? "Submitting" : "Submit"}
                            </button>

                            {errors.root && <p className='error-message'>{errors.root.message}</p>}
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RHFProductionForm