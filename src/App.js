import "./App.css";

import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Photos from "./assets/Photos.js";
import Loader from "./assets/Loader.js";
import EndMsg from "./assets/EndMsg.js";

function App() {
    const [items, setItems] = useState([]);

    const [hasMore, sethasMore] = useState(true);

    const [page, setpage] = useState(2);

    useEffect(() => {
        const getPhotos = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/photos?_page=1&_limit=100`

            );
            const data = await res.json();
            setItems(data);
        };

        getPhotos();
    }, []);

    const fetchPhotos = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=100`

        );
        const data = await res.json();
        return data;
    };

    const fetchData = async () => {
        const PhotosFormServer = await fetchPhotos();

        setItems([...items, ...PhotosFormServer]);
        if (PhotosFormServer.length === 0 || PhotosFormServer.length < 100) {
            sethasMore(false);
        }
        setpage(page + 1);
    };
    return (
        <InfiniteScroll
            dataLength={items.length} //This is important field to render the next data
            next={fetchData}
            hasMore={hasMore}
            loader={<Loader />}
            endMessage={<EndMsg />}
        >
           
                <div className="justify-content-center " >
                    <div className="row m-2">
                    {items.map((item) => {
                        return <Photos key={item.id} item={item} />;
                    })} 
                    </div>
                </div>
           
        </InfiniteScroll>
    );
}

export default App;