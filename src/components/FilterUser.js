import React, { useContext } from "react";

import UserContext from '../contexts/UserContext';

function FilterUser() {
    const {filter, setFilter} = useContext(UserContext);

    return (
        <div>
            <input
                style={{margin:10}}
				placeholder="Filter..."
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			/>
        </div>
    )
}

export default FilterUser;
