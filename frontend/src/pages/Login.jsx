import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {FaSignInAlt} from 'react-icons/fa'
import { reset, login } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import Spinner from '../components/Spinner'

const Login = () => {

    const {user, isError, isSuccess, message, isLoading} = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData


    const onSubmit = (e) => {
        e.preventDefault()
        
        const userData = {
            email, password
        }
        
        dispatch(login(userData))
    }

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())
    }, [user, dispatch, navigate, isError, isSuccess, message])


    if(isLoading){
        return <Spinner />
    }


    const onChange = (e) => {
       setFormData((prevState) => ({
        ...prevState, [e.target.name]:e.target.value
       }))
    }


  return (
    <>
        <section className='heading'>
            <h1>
                <FaSignInAlt style={{paddingTop: '5px'}} className='md' /> Login
            </h1>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    value={email}
                    placeholder='Enter your email'
                    onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input
                    type='password'
                    className='form-control'
                    id='password'
                    name='password'
                    value={password}
                    placeholder='Enter password'
                    onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-block'>
                    Login
                    </button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Login