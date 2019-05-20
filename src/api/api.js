import axios from 'axios';

// CONFIG
const api = axios.create({
  baseURL: 'https://api.github.com',
});

// ENDPOINS
export const fetchRepositories = async author => {
  try {
    const { data } = await api.get(`/users/${author}/repos`);
    return data;
  }
  catch(e) {
    return e;
  }
}

export const fetchRepositoriesDetails = async (author, repositoryName) => {
  try {
    const { data } = await api.get(`/repos/${author}/${repositoryName}/commits`);
    return data;
  }
  catch(e) {
    return e;
  }
}
