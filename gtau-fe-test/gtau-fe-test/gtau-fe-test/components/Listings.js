import React, { useEffect, useState } from "react";
import axios from "axios";
import TextTruncate from "react-text-truncate";

const ACTIONS = ["View", "Reply"];

const formatAsCurrency = (int) => {
  const formatter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(int);
  return formatter;
};

const Listing = (props) => {
  const handleClick = (title) => {
    console.log(
      title.currentTarget.textContent + ":" + title.currentTarget.value
    );
  };
  return (
    <div className="search-grid">
      {props.loader ? (
        <div>loading...</div>
      ) : props.data && props.data.length ? (
        props.data.map((image, index) => (
          <div className="">
            <div className="title" key={`title${index}`}>
              <TextTruncate line={1} truncateText="…" text={image.title} />
            </div>
            <div>
              {image.price !== "Wanted" ? (
                <span className="price">{formatAsCurrency(image.price)}</span>
              ) : (
                <span className="price">{image.price}</span>
              )}
              <span className="location">{image.location}</span>
            </div>
            {image.imgUrl ? (
              <img key={`img${index}`} src={image.imgUrl} alt={`img${index}`} />
            ) : (
              ""
            )}
            <div className="description">
              <TextTruncate
                line={3}
                element="span"
                truncateText="…"
                text={image.description}
              />
            </div>
            <button
              className="button-style"
              value={image.title}
              onClick={handleClick}
            >
              {ACTIONS[0]}
            </button>
            <button
              className="button-style"
              value={image.title}
              onClick={handleClick}
            >
              {ACTIONS[1]}
            </button>
          </div>
        ))
      ) : (
        <div>Records not found</div>
      )}
    </div>
  );
};

const Listings = (props) => {
  const [searchList, setSearchList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(props.dataEndpoint)
      .then((resp) => {
        setSearchList(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  }, []);
  return (
    <div>
      <div className="listings__header">Search Results</div>
      <div className="results_header">
        {searchList.length > 1 ? (
          <span>{searchList.length} results</span>
        ) : (
          <span>{searchList.length} result</span>
        )}{" "}
        <span className="label">for</span> Ferrari
        <span className="label">in</span> Australia
      </div>
      <div className="listings__grid">
        <Listing data={searchList} loader={loading}></Listing>
      </div>
    </div>
  );
};

export default Listings;
