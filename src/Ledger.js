import { useState } from "react";
import Entry from "./Entry";

function Ledger() {
    const [entries, setEntries] = useState([]);
    const [text, setText] = useState("");

    function addEntry(text) {
        const newEntry = {
            id: Date.now(), 
            text
        };
        setEntries([...entries, newEntry]);
        setText("");
        }

    function deleteEntry(id) {
        setEntries([entries.filter(entry => entry.id !== id)])
    }

    //JSX to be displayed on the web page
    return (
        <div className="ledger">
            {entries.map(entry => (
                <Entry
                key = {entry.id}
                entry = {entry}
                deleteEntry={deleteEntry}
                />
            ))}
            <input value={text}
            onChange={e => setText(e.target.value)}
            />
            <button onClick={() => addEntry(text)}>Add</button>
        </div>
    );
}
export default Ledger