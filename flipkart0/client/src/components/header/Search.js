import React from 'react'
import { styled, Box, InputBase,Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
const SreachContainer = styled(Box)`
    background: #fff;
    width: 40%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width:100%;
    font-size: unset;
`;
const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display:flex;
`;
const Search = () => {
  return (
    <SreachContainer>
        <InputSearchBase
            placeholder="Search for products, brands and more"  />
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
    </SreachContainer>
  )
}

export default Search