import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin-left: 8px;
  margin-right: 8px;
`;

export const CommitGroup = styled.ol`
  display: table;
  table-layout: fixed;
  width: 100%;
  margin: 0;
  padding: 0;
  color: #6a737d;
  border-bottom: 1px solid #e1e4e8;
  list-style-type: none;
`;

export const CommitItem = styled.li`
  padding: 8px;
  border: 1px solid #e1e4e8;
  border-bottom: none;
`;

export const CommitTitle = styled.h5`
  margin: 4px 0;
  color: #333;
`;

export const CommitAuthor = styled.span`
  font-size: 12px;
`
