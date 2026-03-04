
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("postsContainer");
  const loading = document.getElementById("loading");
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  async function fetchPosts() {
    showLoading(true);
    try {
      await delay(5000);

      const res = await fetch(API_URL);

      if (!res.ok) throw new Error("Failed to fetch posts");

      let data = await res.json();
      // Limit to 30 posts
      data = data.slice(0, 30);
      renderPosts(data);
    } catch (err) {
      postsContainer.innerHTML = `<p class="text-red-500">Error: ${err.message}</p>`;
      console.error(err);
    } finally {
      showLoading(false);
    }
  }

  function showLoading(isLoading) {
    // use inline display toggle because we removed CSS classes
    if (isLoading) {
      loading.style.display = "flex";
    } else {
      loading.style.display = "none";
    }
  }

  function renderPosts(posts) {
    postsContainer.innerHTML = ""; // clear container
    posts.forEach((post) => {
      const postEl = document.createElement("div");
      // brutalist inline styling
      postEl.style.border = "4px solid #000";
      postEl.style.background = "#ff0";
      postEl.style.padding = "15px";
      postEl.style.margin = "5px 0";
      postEl.style.fontFamily = "monospace";
      postEl.style.color = "#000";
      postEl.style.textTransform = "uppercase";
      postEl.style.letterSpacing = "1px";
      postEl.innerHTML = `
        <h2 style=\"margin:0 0 10px 0; font-size:1.5rem; color:#f00;\">${post.title}</h2>
        <p style=\"margin:0; font-size:1rem;\">${post.body}</p>
      `;
      postsContainer.appendChild(postEl);
    });
  }

  fetchPosts();
});
