import React, {useState} from 'react'
import {useLocation , Link} from 'react-router-dom'



export const Edit = ({updateTodo}) => {

    const location = useLocation()
    const {id, title, desc} = location.state

    const [titleState, setTitle] = useState(title)
    const [descState, setDesc] = useState(desc)

    const submit = (e) => {
        e.preventDefault()

        updateTodo({id, title: titleState, desc: descState})
    }

    
    return (
        <div>
            <div className="text-light my-3 container col-lg-8 col-xs-12">
                <form action="" onSubmit={submit}>
                    <div className="form-group my-2">
                        <label htmlFor="exampleFormControlInput1">Title</label>
                        <input type="text" name="input_title" className="form-control" value={titleState} onChange= {(e) => setTitle(e.target.value)} id="exampleFormControlInput1" placeholder="Do Something"/>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="exampleFormControlInput1">Description</label>
                        <textarea className="form-control" name="input_desc" value={descState} onChange = {(e) => setDesc(e.target.value)} id="exampleFormControlInput1" placeholder="Write Somthing...">
                        </textarea>
                    </div>
                    
                    <button type = "submit" className = "btn btn-warning mx-1 my-2">Save</button>
                    <button type = "reset" className = "btn btn-outline-warning">Reset</button>

                    <div style = {{display: "flex", justifyContent: "flex-end"}}>
                        <Link to ="/">
                            <button className = "btn btn-outline-success mx-1 my-2">Done</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
