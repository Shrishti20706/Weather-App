//windows+. to add emoji
import React, { useState, useEffect } from 'react'
import "./style.css"

//get the local storage data back
const getLocalData = () => {
    const list = localStorage.getItem('mytodolist');
    if (list) {
        return JSON.parse(list);

    } else {
        return [];
    }

};


const ToDo = () => {
    const [inputdata, setInputData] = useState("");
    //const [items,setItems]=useState(getLocalData());
    const [items, setItems] = useState([]);
    const [isEditedItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);


    //add the items function
    const addItem = () => {
        if (!inputdata) {
            alert("please fill the data");
        }
        else if (inputdata && toggleButton) {
            setItems(
                items.map((curElem) => {
                    if (curElem.id === isEditedItem) {
                        return { ...curElem, name: inputdata };
                    }
                    return curElem;
                })
            )
            setInputData([])
            setIsEditItem(null);
            setToggleButton(false);

        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    }
    //... is spread operator to represt that include previous daa but also add new data

    //edit the item
    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        })
        setInputData(item_todo_edited.name)
        setIsEditItem(index);
        setToggleButton(true);
    }

    //DELETE ITEM
    const deleteItem = (index) => {
        const updatedItem = items.filter((curElem) => {
            return curElem.id !== index;
        })
        setItems(updatedItem);
    }

    //remove all
    const removeAll = () => {
        setItems([]);
    }

    //adding data to the local storage
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify[items])
        //loalstorage takes key-value pair
    }, [items])

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src="./images/todo.jpg" alt="todologo" />
                        <figcaption>Add Your List Here✌️</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type="text" placeholder='✍️Add items' className='form-control' value={inputdata} onChange={(event) => setInputData(event.target.value)}></input>
                        {toggleButton ? (<i className="far fa-edit add-btn" aria-hidden="true" onClick={addItem}></i>) : (<i className="fa fa-plus add-btn" aria-hidden="true" onClick={addItem}></i>)}

                    </div>

                    {/* show our items*/}
                    <div className='showItems'>
                        {items.map((curElem, index) => {
                            return (
                                <div className='eachItem' key={curElem.id}>
                                    <h3>{curElem.name}</h3>
                                    <div className='todo-btn'>
                                        <i class="far fa-edit add-btn" aria-hidden="true" onClick={() => editItem(curElem.id)}></i>
                                        <i class="far fa-trash-alt add-btn" aria-hidden="true" onClick={() => deleteItem(curElem.id)}></i>
                                    </div>
                                </div>

                            )
                        })}


                    </div>


                    {/*remove all buttons */}
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text='Remove All' onClick={removeAll}>
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ToDo
