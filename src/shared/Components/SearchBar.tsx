import React, { useState } from 'react'
import { SearchPanel } from '../Elements'

interface Props {
    onFilterJob: (filtervalue: string) => void
}

const SearchBar: React.FC<Props> = (props) => {
    const [searchValue, setsearchValue] = useState('')
    const filterJobList = (filtervalue: string) => {
        setsearchValue(filtervalue);
        props.onFilterJob(filtervalue);
    }
    return (
        <SearchPanel>
            <h1> JobList </h1>
            <div>
                <input type="text"
                    value={searchValue}
                    onChange={e => filterJobList(e.target.value)}
                    placeholder="Search jobs" />

            </div>
        </SearchPanel>
    )
}

export default SearchBar
