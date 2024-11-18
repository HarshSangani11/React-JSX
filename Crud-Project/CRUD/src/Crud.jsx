
import React, { useEffect, useState } from 'react';

export default function Crud() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [hobbies, setHobbies] = useState([]);
    const [city, setCity] = useState('');
    const [record, setRecord] = useState([]);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('Students')) || [];
        setRecord(data);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            const updatedRecords = record.map((rec) =>
                rec.id === editId ? { ...rec, name, age, gender, hobbies, city } : rec
            );
            setRecord(updatedRecords);
            localStorage.setItem('Students', JSON.stringify(updatedRecords));
            setEditId(null);
        } else {
            const newRecord = { id: Date.now(), name, age, gender, hobbies, city };
            const updatedRecords = [...record, newRecord];
            setRecord(updatedRecords);
            localStorage.setItem('Students', JSON.stringify(updatedRecords));
        }
        setName('');
        setAge('');
        setGender('');
        setHobbies([]);
        setCity('');
    };

    const handleHobbyChange = (e) => {
        const hobby = e.target.value;
        setHobbies((prevHobbies) =>
            e.target.checked ? [...prevHobbies, hobby] : prevHobbies.filter((h) => h !== hobby)
        );
    };

    const handleDelete = (id) => {
        const updatedRecords = record.filter((rec) => rec.id !== id);
        setRecord(updatedRecords);
        localStorage.setItem('Students', JSON.stringify(updatedRecords));
    };

    const handleEdit = (id) => {
        const editRecord = record.find((rec) => rec.id === id);
        if (editRecord) {
            setName(editRecord.name);
            setAge(editRecord.age);
            setGender(editRecord.gender);
            setHobbies(editRecord.hobbies);
            setCity(editRecord.city);
            setEditId(id);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Enter your Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />

                <div>
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="Male"
                        checked={gender === 'Male'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="Female"
                        checked={gender === 'Female'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                        type="radio"
                        name="gender"
                        id="others"
                        value="Others"
                        checked={gender === 'Others'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="others">Others</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        value="Coding"
                        checked={hobbies.includes('Coding')}
                        onChange={handleHobbyChange}
                    />
                    <label>Coding</label>
                    <input
                        type="checkbox"
                        value="Traveling"
                        checked={hobbies.includes('Traveling')}
                        onChange={handleHobbyChange}
                    />
                    <label>Traveling</label>
                    <input
                        type="checkbox"
                        value="Cooking"
                        checked={hobbies.includes('Cooking')}
                        onChange={handleHobbyChange}
                    />
                    <label>Cooking</label>
                    <input
                        type="checkbox"
                        value="Driving"
                        checked={hobbies.includes('Driving')}
                        onChange={handleHobbyChange}
                    />
                    <label>Driving</label>
                </div>

                <select value={city} onChange={(e) => setCity(e.target.value)} required>
                    <option value="" disabled>
                        City
                    </option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Surat">Surat</option>
                    <option value="Jamnagar">Jamnagar</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                </select>

                <button type="submit">{editId ? 'Update' : 'Submit'}</button>
            </form>

            {record.length > 0 && (
                <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Hobbies</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record.map((rec) => (
                            <tr key={rec.id}>
                                <td>{rec.name}</td>
                                <td>{rec.age}</td>
                                <td>{rec.gender}</td>
                                <td>{rec.hobbies ? rec.hobbies.join(', ') : ''}</td>
                                <td>{rec.city}</td>
                                <td>
                                    <button onClick={() => handleEdit(rec.id)}>Edit</button>
                                    <button onClick={() => handleDelete(rec.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}
