const posts = [
  { title: 'Post One', body: 'This is post One body' },
  { title: 'Post Two', body: 'This is post Two body' },
];

// nusitaikom
const postsEl = document.getElementById('posts');

function getPosts() {
  setTimeout(() => {
    // sugeneruoti ir patalpinti li elemnentus is posts
    posts.forEach((post) => {
      const liEl = document.createElement('li');
      liEl.textContent = `${post.title} - ${post.body}`;
      postsEl.append(liEl);
    });
  }, 1000);
}

function createPost(newPost, callBack) {
  setTimeout(() => {
    posts.push(newPost);
    callBack();
  }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post Three body' }, getPosts);

// getPosts();

// isspresti su callback

// promisify post js
