import { useState } from 'react'

const AddAppForm = ({addApps}) => {
    const [text,setText] = useState('')
    const [reminder,setReminder] = useState(false)
    const addApp = (e) => {
        e.preventDefault()
        console.log("text")
        if(!text) {
            alert('please add tasks!')
            return
        }
        addApps({text,reminder})
        setText('')
        setReminder(false)
    }

    return (
        <form onSubmit={addApp}>
            <div class="form-group">
                <label for="appName">Application Name</label>
                <input type="text" class="form-control" id="appName" placeholder="Enter App Name"
                value={text} 
                onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="reminder" value={reminder} 
                 onChange={(e) => setReminder(e.currentTarget.checked)} />
                <label class="form-check-label" for="reminder">remind me out</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
        </form>
    )
}

export default AddAppForm