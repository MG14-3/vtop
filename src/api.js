const API_URL = 'http://localhost:5000';

export const fetchData = async () => {
  try {
    const res = await fetch(`${API_URL}/users`);
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};