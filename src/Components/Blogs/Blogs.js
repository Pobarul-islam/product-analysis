import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const url = `data.json`
        fetch(url)
            .then(res => res())
        .then(data=>console.log(data))
    }, [])
    return (
      <div>
        <h2>This is Blogs Pages {Blogs.length}</h2>
      </div>
    );
};

export default Blogs;