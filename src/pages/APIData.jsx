import React, { useEffect, useState } from 'react'
import Button from './Button'

const APIData = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!res.ok) throw new Error('Failed to fetch')
        const json = await res.json()
        setData(json)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filtered = data.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-12">
      <h2 className="text-2xl font-bold mb-4">Fetched Posts</h2>

      <input
        type="text"
        placeholder="Search posts..."
        className="w-full px-4 py-2 mb-4 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && filtered.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">No results found.</p>
      )}

      <ul className="space-y-3">
        {filtered.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default APIData
