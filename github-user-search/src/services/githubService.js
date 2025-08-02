import axios from "axios";

// Existing function - don't change this
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// New function for advanced search - add this below
export const fetchUsersByAdvancedSearch = async (
  username,
  location = "",
  minRepos = 0
) => {
  try {
    let query = `${username}`;
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
