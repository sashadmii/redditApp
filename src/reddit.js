const rootApi = 'https://www.reddit.com';

export const getPopularPosts = async () => {
  const response = await fetch(`${rootApi}/r/popular.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${rootApi}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
};

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${rootApi}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSearchResult = async (searchItem) => {
  const response = await fetch(`${rootApi}/search.json?q=${searchItem}`);
  const json = await response.json();

  return json.data.children.map((item) => item.data);
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${rootApi}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};
