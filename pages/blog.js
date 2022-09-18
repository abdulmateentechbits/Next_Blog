import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from '../styles/blog.module.css';
const Blog = () => {
  // console.log(props);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/blogs').then((data) => {
      return data.json();
    }).then((parsedData) => {
      setBlogs(parsedData);
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          {
            blogs.map((blog) =>{
              return (
                  <div key={blog.id}>
                    <Link href={`blogpost/${blog.slug}`}>
                      <h3 className={styles.blogItem3}>{blog.title}</h3>
                    </Link>
                    <p className={styles.blogItem}>{blog.description.substring(0, 59) + '...'}
                    </p>
                  </div>
              )
            })
          }
        </main>
      </div>
    </>
  )
}


export default Blog