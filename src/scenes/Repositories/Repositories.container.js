import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchRepositories as fetchRepositoriesAction,
  fetchCommitsByRepositories as fetchCommitsByRepositoriesAction,
  updateRepositorySelected as updateRepositorySelectedAction,

} from 'store/ducks/github';
import Repositories from './Repositories';

export class RepositoriesContainer extends Component {

  componentDidMount() {
    this.fetchAllRepositories()
  }

  fetchAllRepositories = () => {
    const { fetchRepositories } = this.props;

    fetchRepositories();
  }

  handleClickRepository = repository => async () => {
    const { updateRepositorySelected, fetchCommitsByRepositories } = this.props;

    await updateRepositorySelected(repository);
    await fetchCommitsByRepositories(repository);
  }

  render() {
    const { repositories } = this.props;

    return (
      <Repositories
        repositories={repositories}
        handleClickRepository={this.handleClickRepository}
      />
    )
  }
}

export const mapStateToProps = ({ github }) => ({
  isLoadingRepositories: github.repositories.isLoading,
  repositories: github.repositories.data
});

export const mapDispatchToProps = {
  fetchRepositories: fetchRepositoriesAction,
  updateRepositorySelected: updateRepositorySelectedAction,
  fetchCommitsByRepositories: fetchCommitsByRepositoriesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesContainer);
