import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from "./Search.module.scss";
import {useContext} from "react";
import {SearchContext} from "../../App";
import debounce from "lodash.debounce";


const Search = () => {
    const {setSearchValue} = useContext(SearchContext);
    const [value, setValue] = useState();
    const inputRef = useRef();

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 1000), []);


    const onChangeInput = (e) => {
        setValue(e.target.value);
        updateSearchValue(e.target.value);
    }


    return (
        <div className={styles.root}>
            <input ref={inputRef} value={value} onChange={onChangeInput}
                   type="text"
                   placeholder="Поиск пиццы ..."/>
            {value &&
                <svg onClick={() => setValue("")} data-name="Layer 1" height="200" id="Layer_1"
                     viewBox="0 0 200 200" width="200"
                     xmlns="http://www.w3.org/2000/svg"><title/>
                    <path
                        d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                </svg>
            }
        </div>
    );
};

export default Search;
