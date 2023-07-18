import axios from 'axios';

async function getData(userId) {
  try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const userData = userResponse.data;
    const postData = postResponse.data;

    const combinedData = {
      id: userData.id,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      address: userData.address,
      phone: userData.phone,
      website: userData.website,
      company: userData.company,
      posts: postData,
    };

    return combinedData;
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  const result = await getData(1);
  console.log(result);
})();
