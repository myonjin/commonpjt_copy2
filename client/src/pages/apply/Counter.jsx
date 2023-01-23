import { useDispatch, useSelector } from 'react-redux'
import counterSlice, { up } from '../../store/counterSlice'
function Counter() {
  const count = useSelector((state) => {
    console.log(state)
    return state.counter.value
  })
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.up(2))
        }}
      >
        +
      </button>
      {count}
    </div>
  )
}

export default Counter
