import React, { useState } from 'react'
import SidebarItem from './sidebarItem'
import { Link, useNavigate } from 'react-router-dom'


const Sidebar = ({ setPage, children }) => {

    const navigate = useNavigate()
    const [isOpen, setOpen] = useState()
    // const routes = [
    //     { page: "Home", link: <Link to="/">Home</Link> },
    //     { page: "Add Dog", link: <Link to="add">Add Dog</Link> },
    //     { page: "ListDog", link: <Link to="list">List Dogs</Link> },
    //     { page: "News", link: <Link to="news">News</Link> }
    // ]
    const routes = [
        { page: "Home", link: "/" },
        { page: "Players", link: '/players' },
        { page: "Add Dog", link: "add" },
        { page: "ListDog", link: "list" },
        { page: "News", link: "news" },
        { page: "List Users", link: "admin/user/list" },
        { page: "Create User", link: "admin/user/create" }
    ]


    const sideBarAction = (isOpen) => {
        return isOpen ? 'open-sidebar overflow-y' : 'closed-sidebar'
    }

    function openSideBar() {
        setOpen(!isOpen)
    }

    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <>
            <div onMouseEnter={ openSideBar } onMouseLeave={ openSideBar } className={ sideBarAction(isOpen) }>
                <div className='ml-3 mr-3 flex flex-column'>
                    { isOpen && (
                        <>
                            <div className='my-4 center-itens'>
                                <h2>Doggy shop</h2>
                            </div>
                            <div className='h-line' />
                            { routes.map((route, index) => {
                                return (
                                    <SidebarItem setPage={ setPage } key={ index } route={ route } />)
                            }) }
                            <div className='mt-5 center-itens' onClick={ () => logOut() }>
                                <button>Log out</button>
                            </div>
                        </>) }
                </div>
            </div>
            { children }
        </>
    )
}

export default Sidebar