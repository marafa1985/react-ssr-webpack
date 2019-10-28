import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../shared/Components/SearchBar';

describe('With Jest', () => {
    it('SearchBar to match snapShot', () => {
        const filterFun = ()=>{};
        const div = document.createElement('div');
        ReactDOM.render(<SearchBar  onFilterJob={filterFun}/>, div);
        expect(div).toMatchSnapshot();
    })
})
