import React from 'react';
import { useLocation } from "react-router-dom";

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  
function SearchPage(){
    let query = useQuery();
    console.log("query", query.get("q"))
    return <div className='text-center mt-5 pt-5'>
        hello
    </div>
}
export default SearchPage;