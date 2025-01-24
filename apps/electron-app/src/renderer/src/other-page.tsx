import { useEffect } from 'react'

export default function OtherPage() {
  useEffect(() => {
    setTimeout(() => {
      throw new Error('test')
    }, 1000)
  }, [])
  return <div>OtherPage</div>
}
