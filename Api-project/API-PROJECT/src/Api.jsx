import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Api() {
    const [record, setRecord] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [editId, setEditId] = useState("");

    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const respons = await axios.get("http://localhost:2125/post");
        setRecord(respons.data);
        const sortedData = respons.data.sort((a, b) =>
            a.description.localeCompare(b.description)
        );
        setRecord(sortedData);
    };

    const addData = async () => {
        if (editId) {
            let updateData = {
                id: editId,
                title,
                price,
                description,
                category,
                image,
            };

            await axios.put(`http://localhost:2125/post/${editId}`, updateData);
            fetchApi();
            setEditId("");
        } else {
            let newData = {
                id: String(record.length + 1),
                title,
                price,
                category,
                description,
                image,
            };

            await axios.post("http://localhost:2125/post", newData);
            setRecord([...record, newData]);
        }

        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
        setImage("");
    };

    const deletData = async (id) => {
        await axios.delete(`http://localhost:2125/post/${id}`);
        fetchApi();
    };

    const editData = (e) => {
        setEditId(e.id);
        setTitle(e.title);
        setPrice(e.price);
        setDescription(e.description);
        setCategory(e.category);
        setImage(e.image);
    };

    return (
        <div>
            <div className="form1">
                <input
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter image url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <button className="btn" onClick={addData}>{editId?"UPDATE":"SUBMIT"}</button>
            </div>
            <div className="card-container">
                {record &&
                    record.map((e, i) => (
                        <div className="card" key={i}>
                            <img src={e.image} alt={e.title} className="card-image" />
                            <div className="card-content">
                                <h3>{e.title}</h3>
                                <p><strong>Price:</strong> ${e.price}</p>
                                <p><strong>Description:</strong> {e.description}</p>
                                <p><strong>Category:</strong> {e.category}</p>
                                <div className="card-buttons">
                                    <button onClick={() => deletData(e.id)}>DELETE</button>
                                    <button onClick={() => editData(e)}>EDIT</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
