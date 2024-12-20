import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc, where } from 'firebase/firestore'
import { CircleLoader } from 'react-spinners'
import { getDocs } from 'firebase/firestore';
import { data, Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState()
  const [userData, setUserData] = useState()
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [editIndex, setEditIndex] = useState(null)
  const [record, setRecord] = useState()
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data.uid);
      }
    })
  }, [])
  useEffect(() => {
    fetchUser()
    fetchData()
  }, [user])
  const fetchUser = async () => {
    if (user) {
      await getDoc(doc(db, "Users", user)).then((data) => {
        setUserData(data.data())
        console.log(data.data());

      })
    }
  }
  const fetchData = async () => {
    await getDocs(collection(db, "data")).then((data) => {
      ;
      let sameData = data.docs.filter((item) => item.data().uid == user)
      let details = sameData.map((item) => ({
        docId: item.id,
        ...item.data(),
      }));
      setRecord(details);
    })
  };

  const handlesubmit = async () => {
    if (editIndex == null) {
      await addDoc(collection(db, "data"), { name, price, uid: user })
      setName("")
      setPrice("")
      fetchData()
    }
    else {
      await updateDoc(doc(db, "data", editIndex), { name, price, uid: user })
      fetchData()
    }
    setEditIndex(null)
  }
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "data", id))
      .then((data) => {
        let remainingRecord = record.filter((item) => item.docId != id)
        setRecord(remainingRecord)
      })
  }
  const handleEdit = async (id) => {
    let singledata = record.find((item) => item.docId == id)
    setEditIndex(id)
    setName(singledata.name)
    setPrice(singledata.price)
  }
  const Logout = async () => {
    await auth.signOut()
    navigate("/login")
  }

  return (
    <div>
      {userData ? (
        <div>
        <div className="dashboard-main">
          <h2>Welcome to the Dashboard!</h2>
          <ul className="user-info">
            <li>
              <strong>Name:</strong> {userData.name}
            </li>
            <li>
              <strong>City:</strong> {userData.city}
            </li>
            <li>
              <strong>Age:</strong> {userData.age}
            </li>
            <li>
              <strong>Email:</strong> {userData.email}
            </li>
          </ul>
          <button onClick={Logout}>Logout
          </button>
        </div>
        <div className="form-container">
        <input
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handlesubmit}>{editIndex ? 'Update' : 'Add Data'}</button>
      </div>

        </div>
      ) : (
        <div className='loder'>
          <CircleLoader />
        </div>
        
      )}

     
     
      <div className="rm">
        {record &&
          record.map((item) => (
            <div key={item.docId} className="record-list">
              <ul className="record-item">
                <li><strong>UID:</strong> {item.uid}</li>
                <li><strong>Name:</strong> {item.name}</li>
                <li><strong>Price:</strong> ${item.price}</li>
                <li>
                  <button onClick={() => handleEdit(item.docId)}>Edit</button>
                  <button onClick={() => handleDelete(item.docId)}>Delete</button>
                </li>
              </ul>
            </div>
          ))
        }
      </div>
    </div>
      
  );
}
