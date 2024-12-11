import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, fetchApi, updateData } from './ApiSlice';


export default function Api() {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("")
    const [editId, setEditId] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApi());
    }, []);
    const record = useSelector((state) => {
        return state.ApiKey
    })

    const addRecord = () => {
        if (editId == null) {
            let obj = { id: String(record.record.length + 1), image, title, description, price, category };
            dispatch(addData(obj));
        } else {
            let updateObj = { id: editId, image, title, description, price, category };
            dispatch(updateData({ editId, updData: updateObj }));
            setEditId(null)
        }
        setImage("")
        setTitle("")
        setDescription("")
        setPrice("")
        setCategory("")
    }
    const deleteRecord = (i) => {
        dispatch(deleteData(i))
    }
    const updateRecord = (e) => {
        setEditId(e.id)
        setImage(e.image);
        setTitle(e.title);
        setDescription(e.description);
        setPrice(e.price);
        setCategory(e.category);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <div>
            <div className="form1">
                <input type="text" placeholder='Enter Url' value={image} onChange={(e) => setImage(e.target.value)} />
                <input type="text" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="number" placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder='Enter Category' value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="text" placeholder='Enter Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                <button className='btn' onClick={addRecord}>{editId ? "Update Data" : "Add Data"}</button>
            </div>

            <div className="card-container">
                {record.loading == false &&
                    record.record.map((e, i) => {
                        return (
                            <div className="card" key={i}>
                                <img src={e.image} alt={e.title} className="card-image" />
                                <div className="card-content">
                                    <h3>{e.title}</h3>
                                    <p><strong>Price:</strong> ${e.price}</p>
                                    <p><strong>Description:</strong> {e.description}</p>
                                    <p><strong>Category:</strong> {e.category}</p>


                                    <div className="card-buttons">
                                        <button onClick={() => deleteRecord(e.id)}>DELETE</button>
                                        <button onClick={() => updateRecord(e)}>EDIT</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
