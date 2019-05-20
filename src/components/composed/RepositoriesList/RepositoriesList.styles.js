import styled from 'styled-components';

export const Repositories = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin-top: 0;
  padding-left: 0;
`;

export const Repository = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(50% - 8px);
  margin: 4px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 600;
`;

export const Description = styled.p`
  color: #586069;
`;
