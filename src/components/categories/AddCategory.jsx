import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Category from './Category';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../config/firebase';

const AddCategory = (props) => {

    // https://blog.logrocket.com/firebase-cloud-storage-firebase-v9-react/
        const [imgUrl, setImgUrl] = useState(null);
        const [progresspercent, setProgresspercent] = useState(0);

        const handleSubmit = (e) => {
        e.preventDefault()
        const file = e.target[0]?.files[0]

        if (!file) return;

        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
        (snapshot) => {
            const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercent(progress);
        },
        (error) => {
            alert(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrl(downloadURL)
            });
        }
        );
        
    }

    return (
        <div>
            <button className='btn btn-info mb-3' onClick={handleClick}>Add a category</button>

            <div className='categories-container'>
                <Category arr={props.arr}/>
            </div>
          
          {
            imgUrl &&
            <img src={imgUrl} alt='uploaded file' height={200} />
          }
        </div>
      );
    }

export default AddCategory