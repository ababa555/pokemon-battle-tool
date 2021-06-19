import React from "react";

import DataDetail from './data-detail';

const Data = ({ data }) => {
  return (
    <div>
      <ul>
        {data &&
          data.map((x) => (
            <DataDetail key={x.id} data={x} />
          ))}
      </ul>
    </div>
  );
}

export default Data;

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await response.json()

  return {
    props: {
      data: data
    }
  };
}