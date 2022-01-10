import React from 'react'
import {Link} from 'react-router-dom'
import * as ic from 'react-bootstrap-icons'

export const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-warning" to="/">{props.appName}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-warning">
                        <li className="nav-item">
                        <Link className="nav-link text-warning active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-warning active" to="/about">About</Link>
                        </li>
                    </ul>
                    {/* For later use */}
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-warning" type="submit"><span style = {{display: "flex", justifyContent: "center", alignItems: 'center'}}>Search<ic.Search className="mx-1"/></span></button>
                    </form>
                    </div>
                </div>
        </nav>
        </div>
    )
}
