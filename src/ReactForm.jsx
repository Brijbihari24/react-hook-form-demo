import React, { useState } from 'react'

function ReactForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [tags, setTags] = useState('')
    const [selectedFile, setSelectedFile] = useState([])
    const [isPrivate, setIsPrivate] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, selectedCategory, tags, selectedFile, isPrivate })
    }


    return (
        <section id="center">
            <form onSubmit={handleSubmit} className='display-flex m-3'>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='title'
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='title'
                />
                <select
                    type="select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="VIDEO">VIDEO</option>
                    <option value="AUDIO">AUDIO</option>
                    <option value="IMAGE">IMAGE</option>
                </select>
                <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder='tags'

                />
                <input
                    type="file"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                />
                <label>IsPrivate</label>
                <input
                    type="checkbox"
                    checked={isPrivate}
                    onChange={(e) => setIsPrivate(e.target.checked)}
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ReactForm