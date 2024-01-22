import Image from 'next/image';
import React from 'react'
import styles from "./page.module.scss";
import Link from 'next/link';

async function getData() {
    const res = await fetch("https://picsum.photos/v2/list");

    return res.json();
}

const Photos = async () => {
    const data = await getData();
    
    const listPhotos = data.slice(11, 20).map(photo => {
        return (
            <div className={styles.item} key={photo.id}>
                <Link href={`/photos/${photo.id}`}>
                    <Image src={photo.download_url} alt="" layout='responsive' width={100} height={100}/>
                </Link>
            </div>
        )
    })

  return (
    <div>
        <h1>Nos photos souvenirs</h1>
        <div className={styles.items}>
            {listPhotos}
        </div>
    </div>
  )
}

export default Photos