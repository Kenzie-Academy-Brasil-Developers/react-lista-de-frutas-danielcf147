import { useState } from "react"
const FilterRedFruits = ({setIsTrue})=>{
    function filterBtn (){
        setIsTrue((oldIsTrue) => !oldIsTrue)
        
    }
    return <button className="btnFilter" onClick={filterBtn}>Filter ON/OFF</button>
}
export default FilterRedFruits