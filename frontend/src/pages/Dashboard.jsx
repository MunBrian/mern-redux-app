import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Goalform from '../components/Goalform'
import { getGoals, reset } from '../features/goals/goalSlice'
import Spinner from '../components/Spinner'
import GoalItem from '../components/GoalItem'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading } = useSelector(
    (state) => state.goal
  )

  useEffect(() => {
    // if (isError) {
    //   console.log(message)
    // }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome { user && user.name } </h1>
        <p>Goals Dashboard</p>
      </section>

      <Goalform />

      <section className='content'>
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map(goal => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (<h3>No Goals to show, please create goals</h3>)}
      </section>
    </>
  )
}

export default Dashboard