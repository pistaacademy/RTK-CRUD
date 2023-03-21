import React, { useState } from 'react';
import { Input, Button, Space } from "antd";
import { useSelector, useDispatch } from 'react-redux';


const CreatePost = () => {
    const [values, setValues] = useState({ title: "", body: ""});
    const [showPost, setShowPost] = useState(false);
    const { title, body } = values;
    const dispatch = useDispatch();
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Create Post</h1>
                
            </form>
        </div>
    )
}

export default CreatePost;