import React from 'react';
function Entry({ entry, deleteEntry, toggleCompleted }) {
 
 return (
 <div className="entry">
    <input type="text"/>
    <p>{entry.text}</p>
    <button onClick={() => deleteEntry(entry.id)}>
        X
    </button>
 </div>
 );
}
export default Entry;