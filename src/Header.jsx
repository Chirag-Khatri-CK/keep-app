import React, { useState } from 'react';
import logo from './images/logo.png';
import AddIcon from '@material-ui/icons/Add';
import Note from './Note';


const Header = () => {
    const [newKeepdata, setNewkeepdata] = useState([]);
    const [keepData, setKeepData] = useState({
        title: "",
        note: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setKeepData((oldItem) => {
            return {
                ...oldItem,
                [name]: value,
            };
        });
    };

    const AddNote = () => {
        setNewkeepdata((oldData) => {
            return [...oldData, keepData];
        });
        setKeepData({
            title: "",
            note: "",
        });
    };

    const DeleteItems = (id) => {
        setNewkeepdata ((oldItem) =>{
            return oldItem.filter((arr,index) =>{
                return index!=id;
            })
        })
    }

    return (
        <>
            <div className="wrapper">
                <div className="header">
                    <img className="logo" src={logo} alt='logo'>
                    </img>
                    <h1>Keep App</h1>
                </div>

                <div className="input_div">
                    <input type="text"
                        onChange={InputEvent}
                        placeholder="Title"
                        name="title"
                        autoComplete="off"
                        value={keepData.title} />

                    <textarea
                        onChange={InputEvent}
                        placeholder="Enter Your Note...."
                        name="note"
                        value={keepData.note} >
                    </textarea>

                    <button onClick={AddNote} type="button"><AddIcon /></button>
                </div>

                <div className="keep_body">
                    {newKeepdata.map((itemVal, index) => {
                        return <Note title={itemVal.title}
                            note={itemVal.note}
                            key={index}
                            id={index}
                            onSelect={DeleteItems}
                             />
                    })}

                </div>
            </div>
        </>

    );
};


export default Header;