import { useNavigate } from 'react-router-dom'

export default function TestPage() {
  const navigate = useNavigate()
  return (
    <div>
      TestPage
      <button
        onClick={() => {
          navigate('/other-page')
        }}
      >
        Click
      </button>
    </div>
  )
}
