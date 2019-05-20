
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Header, Commits } from 'components/composed';

const RepositoryDetails = ({ commits, repositorySelected }) => (
  <Fragment>
    <Header />
    <h2>{repositorySelected.name}</h2>
    <h3>Commits</h3>
    {commits && commits.map(({ commit }) => (
      <Commits
        key={commit.id}
        id={commit.message}
        message={commit.message}
        author={commit.author}
      />
    ))}
  </Fragment>
);

export const mapStateToProps = ({ github }) => ({
  commits: github.commits.data,
  repositorySelected: github.repositorySelected.data,
});

export default connect(mapStateToProps)(RepositoryDetails);
