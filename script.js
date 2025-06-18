document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const btn = document.getElementById("searchBtn");
  const results = document.getElementById("results");

  btn.addEventListener("click", () => runSearch());
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") runSearch();
  });

  async function runSearch() {
    const q = input.value.trim();
    if (!q) return;
    results.innerHTML = "<p>Loading…</p>";
    try {
      const res = await fetch(`/search?q=${encodeURIComponent(q)}`);
      if (!res.ok) throw new Error("Server error");
      const movies = await res.json();
      display(movies);
    } catch (err) {
      results.innerHTML = `<p style="color:red">${err}</p>`;
    }
  }

  function display(movies) {
    if (!movies.length) {
      results.innerHTML = "<p>No movies found.</p>";
      return;
    }
    results.innerHTML = movies.map(m => `
      <div class="movie">
        <h2>${m.Series_Title}</h2>
        <p><strong>Genre:</strong> ${m.Genre}</p>
        <p><strong>Overview:</strong> ${m.Overview}</p>
        <p><strong>Rating:</strong> ${m.IMDB_Rating}</p>
      </div>
    `).join("");
  }
});
