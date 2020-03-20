import React from 'react';
import { Input } from '../../utils/styles/global';
import { Search } from './Home.styles';

const SearchBar = () => {
  return (
    <Search>
      <Input placeholder="Search"></Input>
    </Search>
  );
};

export default SearchBar;
