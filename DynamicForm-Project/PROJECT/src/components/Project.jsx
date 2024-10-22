import React, { useState } from 'react';

export default function Project() {
    const [cat, setCat] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || company === "" || product === "" || price === "") {
            setError("Please fill all fields");
        } else {
            setError("");

            // Clear the form fields after successful submission
            setName("");
            setCompany("");
            setProduct("");
            setPrice("");
            setCat("");
        }
    };

    return (
        <div>
            <h1>Dynamic Form</h1>
            {error && <span style={{ color: "red" }}>{error}</span>}
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name} // Bind the value to state
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Your Company Name"
                    value={company} // Bind the value to state
                    onChange={(e) => setCompany(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Your Product Name"
                    value={product} // Bind the value to state
                    onChange={(e) => setProduct(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter Your Price"
                    value={price} // Bind the value to state
                    onChange={(e) => setPrice(e.target.value)}
                />
                <select value={cat} onChange={(e) => setCat(e.target.value)}>
                    <option hidden>Category</option>
                    <option value="mobiles & tablets">Mobiles & Tablets</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="beauty">Beauty</option>
                </select>

                {cat === "mobiles & tablets" && (
                    <div>
                        <input type="text" placeholder="Enter Mobile/Tablet Brand Name" />
                        <input type="text" placeholder="Enter Model Number" />
                        <input type="number" placeholder="Enter Price" />
                    </div>
                )}
                {cat === "electronics" && (
                    <div>
                        <input type="text" placeholder="Enter Item Name" />
                        <input type="text" placeholder="Enter Model Number" />
                        <input type="number" placeholder="Enter Price" />
                    </div>
                )}
                {cat === "fashion" && (
                    <div>
                        <input type="text" placeholder="Enter Item Name" />
                        <input type="text" placeholder="Enter Size" />
                        <input type="number" placeholder="Enter Price" />
                    </div>
                )}
                {cat === "beauty" && (
                    <div>
                        <input type="text" placeholder="Enter Item Name" />
                        <input type="text" placeholder="Enter Care Type" />
                        <input type="number" placeholder="Enter Price" />
                    </div>
                )}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
