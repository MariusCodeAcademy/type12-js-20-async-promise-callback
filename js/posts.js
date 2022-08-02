const posts = [
  { title: 'Post One', body: 'This is post One body' },
  { title: 'Post Two', body: 'This is post Two body' },
];

// nusitaikom
const postsEl = document.getElementById('posts');

function getPosts() {
  postsEl.innerHTML = '';
  setTimeout(() => {
    // sugeneruoti ir patalpinti li elemnentus is posts
    posts.forEach((post) => {
      const liEl = document.createElement('li');
      liEl.textContent = `${post.title} - ${post.body}`;
      postsEl.append(liEl);
    });
  }, 1000);
}

// promisify post js
function createPost(newPost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPost);
      resolve();
    }, 2000);
  });
}

// createPost({ title: 'Post Three', body: 'This is post Three body' }, getPosts);
createPost({ title: 'Post Three', body: 'This is post Three body' })
  .then(() => getPosts())
  .then(() => createPost({ title: 'Post Four', body: 'This is post Four body' }))
  .then(getPosts);

// createPost({ title: 'Post Four', body: 'This is post Four body' }).then(() => getPosts());
// getPosts();
