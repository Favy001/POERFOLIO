import React, { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/portfolio')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData({ error: true }))
  }, [])

  if (!data) return <main className="center">Loading...</main>
  if (data.error) return <main className="center">API error</main>

  return (
    <main className="container">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        {data.projects.map(p => (
          <li key={p.id}>
            <a href={p.url}>{p.name}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}
