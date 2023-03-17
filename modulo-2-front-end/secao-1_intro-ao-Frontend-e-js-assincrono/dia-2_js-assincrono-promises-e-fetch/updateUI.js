export function fillUsersSelect(users) {
    const usersSelect = document.querySelector('#users-select');

    users.map((user) => {
      const opt = document.createElement('option');
      opt.setAttribute('value', user.id);
      opt.innerText = user.firstName;
      usersSelect.appendChild(opt);
    });
  }
  
  export function fillPosts(posts) {
    if (posts.length === 0) return;
    const postsSection = document.querySelector('#posts-section');
    const featuredPostTitle = document.querySelector('#featured-post-title');
    const featuredPostBody = document.querySelector('#featured-post-body');
    const relatedPostsSection = document.querySelector('#related-posts-section');
    postsSection.classList.remove('invisible');
    const internalPostsArray = [...posts];
    const firstPost = internalPostsArray.pop();
  
    featuredPostTitle.innerText = firstPost.title;
    featuredPostBody.innerText = firstPost.body;
  
    if (internalPostsArray.length === 0) return;
  
    const relatedTitle = document.createElement('h2');
    relatedTitle.innerText = 'Related posts';
    relatedPostsSection.appendChild(relatedTitle);
  
    internalPostsArray.map((post) => {
      const p = document.createElement('p');
      p.innerText = post.title;
      relatedPostsSection.appendChild(p);
    });
  }
  
  export function fillFeaturedPostComments(comments) {
    if (comments.length === 0) return;
    const commentsSection = document.querySelector('#featured-post-comments');
    const title = document.createElement('h3');
    title.innerText = 'Comments';
    commentsSection.appendChild(title);
    comments.map((comment) => {
      const p = document.createElement('p');
      p.innerText = comment.body;
      commentsSection.appendChild(p);
    });
  }
  export function fillErrorMessage(errorMessage) {
    const errorMessageElement = document.querySelector('#error-message');
    errorMessageElement.classList.remove('invisible');
    errorMessageElement.innerText = errorMessage;
  }
  export function clearPageData() {
    const postsSection = document.querySelector('#posts-section');
    const featuredPostTitle = document.querySelector('#featured-post-title');
    const featuredPostBody = document.querySelector('#featured-post-body');
    const relatedPostsSection = document.querySelector('#related-posts-section');
    const commentsSection = document.querySelector('#featured-post-comments');
    const errorMessageElement = document.querySelector('#error-message');
  
    featuredPostTitle.innerHTML = '';
    featuredPostBody.innerHTML = '';
    relatedPostsSection.innerHTML = '';
    commentsSection.innerHTML = '';
    errorMessageElement.innerHTML = '';
    postsSection.classList.add('invisible');
    errorMessageElement.classList.add('invisible');
  }