import React from 'react';
import Button from 'react-bootstrap/Button';


function Entry({ entry, deleteEntry}) {
 
 return (
 <div className="entry">
    <p>{entry.text}</p>
    <Button variant="danger" onClick={() => deleteEntry(entry.id)}>
        X
    </Button>
 </div>
 );
}
export default Entry;