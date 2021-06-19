import React from "react";
import Link from "next/link";

const DataDetail = ({ data }) => {
  if (!data) {
    return <div />;
  }
  return (
    <div>
      <span>{data.id}</span>
      {" : "}
      <Link href={`/pokemons/${data.id}`}>
        <span>
          {data.title}
        </span>
      </Link>
    </div>
  );
}

export default DataDetail;