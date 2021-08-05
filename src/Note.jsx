import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) => {
    return (
        <div className="box">
            <h2>{props.title}</h2>
            <h2>{props.note}</h2>
            <button onClick = { () =>
              props.onSelect(props.id)  
                }>
                <DeleteIcon />
            </button>
        </div>

    );
};

export default Note;