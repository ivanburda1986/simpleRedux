const BASE_URL = 'https://jsonplaceholder.typicode.com';

//
async function __getUsers(){
  const response = await fetch (`${BASE_URL}/users`);
  if(!response.ok){
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const users = await response.json();
  return users;
}

async function __getPosts(){
  const response = await fetch (`${BASE_URL}/posts`);
  if(!response.ok){
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const posts = await response.json();
  return posts;
}


export async function getInitialData(){
  const data = await Promise.all([
    __getUsers(),
    __getPosts()
  ]);
  return {
    users: Object.fromEntries(data[0].map(user=>[user.id,{
      name: user.name,
      username: user.username,
      email: user.email,
      address: user.address,
      phone: user.phone,
      website: user.website,
      company: user.company,
    }])),
    posts: data[1]
  };
}