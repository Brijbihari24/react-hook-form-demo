import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NormalForm from './NormalForm'
import ReactForm from './ReactForm'
import RHF from './RHF'
import RHFProductionForm from './RHFProductionForm'

function App() {
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
    <>
      <RHFProductionForm />
      {/* <RHF /> */}
      {/* <ReactForm />
      <NormalForm /> */}
    </>
  )
}

export default App
