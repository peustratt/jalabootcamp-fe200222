import React, { useState } from 'react'
import { addNewDog } from '../services/dogService'

function AddDog() {
    const defaultDog = { name: '', age: '', breed: '', transaction: '', image: '', description: '' }
    const [dog, setDog] = useState({ ...defaultDog })

    function saveNewDog() {
        addNewDog(dog).then(response => {
            console.log('%c%s', 'color: #d0bfff', response)
            setDog({ ...defaultDog })
        })
    }

    return (
        <div className='ml-5 mt-5'>
            <h1>Add a new dog</h1>
            <article>Here you can add a new dog into our system. This dog will be available for selling or adoption right after data is sent</article>
            <div className='flex flex-column mt-5'>
                <input className='text-field'
                    label="name"
                    placeholder='Name'
                    type="text"
                    value={ dog.name }
                    onChange={ (event) => setDog({ ...dog, name: event.target.value }) }
                />
                <input className='text-field'
                    label="age"
                    placeholder='Age'
                    type="text"
                    value={ dog.age }
                    onChange={ (event) => setDog({ ...dog, age: event.target.value }) }
                />
                <input className='text-field'
                    label="breed"
                    placeholder='Breed'
                    type="text"
                    value={ dog.breed }
                    onChange={ (event) => setDog({ ...dog, breed: event.target.value }) }
                />
                <textarea className='text-field'
                    label="image"
                    placeholder='description'
                    type="text"
                    value={ dog.description }
                    onChange={ (event) => setDog({ ...dog, description: event.target.value }) }
                />
                <select value={ dog.transaction } name='Adoption' className='text-field' onChange={ (event) => setDog({ ...dog, transaction: event.target.value }) }>
                    <option value="">--Choose an option--</option>
                    <option value='Adoption'>Adoption</option>
                    <option value='Sell'>Sell</option>
                    <option value='Both'>Both</option>
                </select>
                <input className='text-field'
                    label="image"
                    placeholder='https://www.example.com/image.jpg'
                    type="text"
                    value={ dog.image }
                    onChange={ (event) => setDog({ ...dog, image: event.target.value }) }
                />
                <button onClick={ () => saveNewDog() } className='btn mt-5'>Save</button>
            </div>
        </div>)
}

export default AddDog