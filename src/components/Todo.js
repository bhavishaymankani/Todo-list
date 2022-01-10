import React from 'react'
import { Link } from 'react-router-dom'
import * as ic from 'react-bootstrap-icons'


export const Todo = ({todo, onDelete}) => {
    const {title,desc, id} = todo

    
    const style = {
        cardBorder: {
            border: "1px solid #ffc107"
        },
        btns: {
            display: "flex", 
            justifyContent: "center", 
            alignItems: 'center'
        }
    }

    return (
        <div>
            <div style={style.cardBorder} className="card bg-dark my-2">
                
                <div className="card-body">
                    <div className="row"></div>
                    <div className="col">
                        <div className="row">
                            <h3 className="text-warning text-left">{title}</h3>
                        </div>
                        <div className="row">
                            <p className="text-light">{desc}</p>
                            
                        </div>
                    </div>
                    <div className="col">
                        <Link to="/Edit" state={{id, title, desc}}>
                            <button className="btn btn-sm btn-outline-info mx-1"><span style = {style.btns}><ic.Pencil size={25} className="mx-1"/></span></button>
                        </Link>
                        
                        <button className="btn btn-sm btn-outline-danger" key = {id} onClick={() => onDelete(todo)}><span style = {style.btns}><ic.Trash size={25} className="mx-1"/></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
