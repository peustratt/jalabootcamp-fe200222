import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SidebarItem = ({ route, index, setPage }) => {

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(route.link)
    }

    return (
        <>
            <div className='item-hover center-itens my-4' onClick={ () => clickHandler() }>
                <h3 className='font-sans max-width text-[16px] m-0'>{ route.page }</h3>
            </div>
            <div className='h-line' />
        </>
    )
}

export default SidebarItem