import { useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { createGoal } from '../features/goals/goalSlice'
import { toast } from 'react-toastify'


const Goalform = () => {
    const [text, setText] = useState('')
    const { message } = useSelector(state => state.goal)

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        if(text){
             dispatch(createGoal({text}))
        }else{
            toast.error(message)
        }
       

        setText('')
    }


  return (
    <section>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Goal</label>
                <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">Add Goal</button>
            </div>
        </form>
    </section>
  )
}

export default Goalform