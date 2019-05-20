import React, { Component } from 'react';

import { fetchRepositories, fetchRepositoriesDetails } from '../../api/api';
import Home from './Home';

class HomeContainer extends Component {

  state = {
    author: "AlexsandroSA",
    isRepositorySelected: false,
    repositorySelected: {},
    repositories: [],
    commitsByRepositorySelected: [],
  }

  componentDidMount() {
    this.getAllRepositories();
  }

  getAllRepositories = async () => {
    const { author } = this.state;
    const data = await fetchRepositories(author);

    this.setState({ repositories: data });
  }

  setRepositoriesDetails = async () => {
    const { author, repositorySelected: { name } } = this.state;
    const commitsByRepositorySelected = await fetchRepositoriesDetails(author, name);

    this.setState({
      commitsByRepositorySelected
    }, this.renderCommitsByRepositorySelected)
  }

  handleClickRepository = repository => async () => {
    this.setState({
      repositorySelected: {
        id: repository.id,
        name: repository.name,
        description: repository.description
      },
      isRepositorySelected: true,
    }, this.setRepositoriesDetails);
  }

  renderCommitsByRepositorySelected = () => {}


  render() {
    const {
      repositories,
      repositorySelected,
      isRepositorySelected,
      commitsByRepositorySelected
    } = this.state;

    return (
      <Home
        isRepositorySelected={isRepositorySelected}
        repositories={repositories}
        repositorySelected={repositorySelected}
        handleClickRepository={this.handleClickRepository}
        commits={commitsByRepositorySelected}
      />
    )
  }
}


export default HomeContainer;
