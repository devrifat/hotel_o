


import { useRouter } from "next/router";
import { useState } from "react";
import { filterData, getFilterValues } from "./dataSearchOne";
export const FilterDataInput = e => {
    const [itemFilter, setItemFilter] = useState(filterData)
    const router = useRouter()
    const { query } = router

    const selectHandeler = (inputGetValue, indexItem='0') => {
        // current path
        const path = router.pathname
        // current query
        
        const values = getFilterValues(inputGetValue)
  
        values.forEach((item, index) => {
            if(item.value && inputGetValue?.[item.name]) {
                query[item.name] = item.value
                // setItemFilter(itemFilter[indexItem].items[index] = item.value)
            }
        })

        // console.log(inputGetValue)
        // console.log(itemFilter[indexItem])
        // console.log('query', query)
        router.push({ pathname: path, query: query })
    }
    const cleareAllRouts = e => {
        // current path
        const path = router.pathname
        
        router.push({ pathname: path, query: {} })
    }
    return(
        <div className="bg-warning py-3 overflow-hidden filter-area filter-area-one">
            <div className="container">
                <div className="row gap-3">
                    <div className="col-12">
                        <button
                            className="btn btn-dark"
                            onClick={e=>cleareAllRouts(e)}
                        >
                            Clear All
                        </button>
                    </div>
                    <div className="col-12">
                        <div className="filter-one filter-inputs row gap-0">
                            {
                                itemFilter?.map(
                                    (filterItem, index) =>
                                        
                                        <div className="col-md-3" key={filterItem.queryName}>
                                            {/* { console.log(filterItem) } */}
                                            {filterItem.type == 'select' &&
                                                <select
                                                    className="form-select form-select-sm mb-1 me-2"
                                                    onChange={
                                                        e => {
                                                            selectHandeler(
                                                                { [filterItem.queryName]: e.target.value, index: index }
                                                            )
                                                        }
                                                    }
                                                >
                                                    <option values="">{filterItem.placeholder}</option>
                                                    {
                                                        filterItem.items.map(
                                                            filterItemOptions => <option key={filterItemOptions.value} value={filterItemOptions.value}>{filterItemOptions.name}</option>
                                                        )
                                                    }
                                                </select>
                                            }
                                            {filterItem.type == 'range' &&
                                                <div className="input-fld-num">
                                                    <span>
                                                        { query[filterItem.queryName] ? query[filterItem.queryName] : filterItem.items[0].value}
                                                    </span>
                                                    <input
                                                        onMouseUp={
                                                            e => {
                                                                selectHandeler(
                                                                    { [filterItem.queryName]: e.target.value }
                                                                )
                                                            }
                                                        }
                                                        type="range"
                                                        className="form-range"
                                                        min={filterItem.items[0].value}
                                                        max={filterItem.items[1].value}
                                                        id="customRange2"
                                                    />
                                                </div>
                                            }
                                            {filterItem.type == 'date' &&
                                                <div className="input-fld-date">
                                                    <input
                                                        type="date"
                                                        name={`trip-${query[filterItem.queryName]}`}
                                                        value={ query[filterItem.queryName] ? query[filterItem.queryName] : filterItem.items[0].value}
                                                        onChange={
                                                            e => {
                                                                selectHandeler(
                                                                    { [filterItem.queryName]: e.target.value }
                                                                )
                                                            }
                                                        }
                                                    />
                                                </div>
                                            }
                                            {filterItem.type == 'radio' &&

                                                <div className="input-fld-radio">
                                                    {
                                                        filterItem.items.map(
                                                            filterItemOptions => 
                                                                <div key={filterItemOptions.value} className="form-check form-check-inline">
                                                                    <input className="form-check-input" name="flexRadioDefault" type="radio" id={`inlineradio-${filterItemOptions.value}`} value={filterItemOptions.value}
                                                                        onChange={
                                                                            e => {
                                                                                selectHandeler(
                                                                                    { [filterItem.queryName]: e.target.value }
                                                                                )
                                                                            }
                                                                        }
                                                                    />
                                                                    <label className="form-check-label" htmlFor={`inlineradio-${filterItemOptions.value}`}>{filterItemOptions.name}</label>
                                                                </div>
                                                         
                                                              
                                                        )
                                                    }
                                                </div>
                                            }
                                        </div>
                                        
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}