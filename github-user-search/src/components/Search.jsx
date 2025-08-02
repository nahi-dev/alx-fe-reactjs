import React, { useState } from "react";
import { fetchUsersAdvanced } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);

    try {
      const data = await fetchUsersAdvanced({
        username,
        location,
        minRepos,
        page: 1,
      });
      setUsers(data.items);
      setHasMore(data.total_count > data.items.length);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUsersAdvanced({
        username,
        location,
        minRepos,
        page: nextPage,
      });
      setUsers((prev) => [...prev, ...data.items]);
      setHasMore(data.total_count > users.length + data.items.length);
      setPage(nextPage);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          type="number"
          placeholder="Minimum repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          min="0"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can’t find users with these criteria.</p>}

      <ul className="mt-4 space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="border p-4 rounded flex items-center space-x-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              width="50"
              className="rounded-full"
            />
            <div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600"
              >
                {user.login}
              </a>
              <p>Score: {user.score.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>

      {hasMore && !loading && (
        <button
          onClick={loadMore}
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
