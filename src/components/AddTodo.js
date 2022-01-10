import React, {useState} from 'react'

export const AddTodo = ({createTodo, addTodo}) => {
   
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    

    const submit = (e) => {
        e.preventDefault()

            const todo = {
                id: 0,
                title: title,
                desc: desc
            }

            if (!title || !desc) {
                alert("Title & Description cannot be empty.")
            } else {
                createTodo(todo)
                addTodo(false)
            }
        

    }
    return (
        <div className="text-light my-3">
            <form action="" onSubmit={submit}>
                <div className="form-group my-2">
                    <label htmlFor="exampleFormControlInput1">Title</label>
                    <input type="text" className="form-control" value={title} onChange= {(e) => setTitle(e.target.value)} id="exampleFormControlInput1" placeholder="Do Something"/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleFormControlInput1">Description</label>
                    <textarea className="form-control" value = {desc} onChange = {(e) => setDesc(e.target.value)} id="exampleFormControlInput1" placeholder="Write Somthing...">
                    </textarea>
                </div>
                <button type = "submit" className = "btn btn-warning mx-1 my-2">Submit</button>
                <button type = "reset" className = "btn btn-outline-warning">Reset</button>
            </form>
        </div>
    )
}
