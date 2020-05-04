import React, { useState } from "react"



function Form () {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
    })

    const formSubmit = e => {
        e.preventDefault();
        
    }
    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                Name
                <input id="name" type="text" name="name" />
            </label>

            <label htmlFor="email">
                Email
                <input id="email" type="email" name="email" />
            </label>

            <label htmlFor="password">
                Password
            <input id="password" type="text" name="password" />
            </label>

            <label htmlFor="terms" className="terms">
                Terms of service
            <input id="terms" type="checkbox" name="terms" />
            </label>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form