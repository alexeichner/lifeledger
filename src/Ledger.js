import { useState } from "react";
import Entry from "./Entry";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
            <Form>
                <Form.Group>
                    <Form.Label>Physical Activites</Form.Label>
                    <Form.Select>
                        <option value="1">Rock Climbing</option>
                        <option value="2">Running</option>
                        <option value="3">Lifting</option>
                        <option value="4">Cycling</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Check label="Read 30 mins"/>
                    <Form.Check label="Floss"/>
                    <Form.Check label="Study"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>How Did Today Go?</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>

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
            <Button variant="primary" onClick={() => addEntry(text)}>Add</Button>
        </div>
    );
}
export default Ledger