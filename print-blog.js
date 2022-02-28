export function printBlog(blogs) {
  const updateBlogBtn = document.querySelector(".update-blog");
  const deleteBlogBtn = document.querySelector(".delete-blog");

  const postingDiv = document.querySelector(".postings");
  const blogPosts = document.querySelector(".blog-posts");

  if (blogs.length == 0) {
    updateBlogBtn.remove();
    deleteBlogBtn.remove();

    const zeroPost = `
      <p class="no-blog-prompt">No blogs currently posted</p>
    `;

    postingDiv.insertAdjacentHTML("beforeend", zeroPost);
  } else {
    for (let i = 0; i < blogs.length; i++) {
      const blogList = `
              <li class="post post-${i}">
                <h3 class="title-${i}">${blogs[i].title}</h3>
                <h4 class="date-${i}">Posting Date: ${blogs[i].date}</h4>
                <p class="summary-${i}">${blogs[i].summary}</p>
              </li>
            `;

      blogPosts.insertAdjacentHTML("beforeend", blogList);
    }
  }
}
