import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from '../../styles/blogPost.module.css';
import featuredImage2 from '../../public/images/featured.jpg';
import male from '../../public/images/man.png';
import female from '../../public/images/female.png';

const Slug = () => {
    const [blog, setBlog] = useState([]);
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getBlogs?slug=${slug}`).then((data) => {
            return data.json();
        }).then((parsedData) => {
            setBlog(parsedData);
        });
    }, [router.isReady, router.query]);
    console.log(blog.about);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 col-xs-12">
                        <div className={styles.mainHeading}>

                            <div className={`row ${styles.postTopMeta}`}>
                                <div className="col-md-2">
                                    <Link href="#">
                                        <Image width={95} height={95}
                                            className={styles.authImg}
                                            src={(blog.gender === 'Male') ? male : female} alt={(blog.gender === 'Male') ? "Male.png" : "Female.png"}

                                        />
                                    </Link>
                                </div>
                                <div className="col-md-10">
                                    <Link href="#">
                                        <a>{blog?.author && blog.author}</a>
                                    </Link>
                                    <Link href="#"><a className={`btn ${styles.follow}`}>Follow</a></Link>
                                    <br />
                                    <span className={styles.authorDescription}>
                                        {blog.about}
                                    </span>
                                    <br />
                                    <span className={styles.postDate}>
                                        22 July 2017
                                    </span>
                                    <br />
                                    <span className={styles.postRead}>6 min read</span>
                                </div>
                            </div>

                            <h1 className={styles.PostTitle}>
                                {blog.title}
                            </h1>
                        </div>
                        <Image className={`img-fluid ${styles.featuredImage}`}
                            src={featuredImage2}
                            alt="" />
                        <div className={styles.articlePost}>
                            <p>
                                {blog.description}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            {/* End of container */}
        </>
    )
}

export default Slug