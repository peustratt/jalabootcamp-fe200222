import React, { useState } from 'react'
import SidebarItem from './sidebarItem'
import { Link, useNavigate } from 'react-router-dom'


const Sidebar = ({ setPage, children }) => {

    const [isOpen, setOpen] = useState()
    // const routes = [
    //     { page: "Home", link: <Link to="/">Home</Link> },
    //     { page: "Add Dog", link: <Link to="add">Add Dog</Link> },
    //     { page: "ListDog", link: <Link to="list">List Dogs</Link> },
    //     { page: "News", link: <Link to="news">News</Link> }
    // ]
    const routes = [
        { page: "Home", link: "/" },
        { page: "Add Dog", link: "add" },
        { page: "ListDog", link: "list" },
        { page: "News", link: "news" }
    ]


    const sideBarAction = (isOpen) => {
        return isOpen ? 'open-sidebar' : 'closed-sidebar'
    }

    function openSideBar() {
        setOpen(!isOpen)
    }

    return (
        <>
            <div onMouseEnter={ openSideBar } onMouseLeave={ openSideBar } className={ sideBarAction(isOpen) + 'min-h-full' }>
                <div className='ml-3 mr-3 flex flex-col h-full'>
                    { isOpen && (
                        <>
                            <div className='mt-1 center-itens'>
                                <h3 className='font-sans font-semibold'>Doggy shop</h3>
                            </div>
                            <div className='h-line' />
                            { routes.map((route, index) => {
                                return (
                                    <SidebarItem setPage={ setPage } key={ index } route={ route } />)
                            }) }
                        </>) }
                </div>
            </div>
            { children }
        </>
    )
}

export default Sidebar