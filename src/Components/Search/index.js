import React, {useEffect, useRef} from 'react';
import './style.css';

export default function Search({searchValue, setSearchValue}) {
const inputRef = useRef();

useEffect(() => {
    inputRef.current.focus()
}, [])

function handleChange(event){
    setSearchValue(event.target.value)
}

return ( <div>
    <input className='plantInput' ref={inputRef} type='text' placeholder='type a plant..' value={searchValue}
    onChange={handleChange}/>
</div>)

}

