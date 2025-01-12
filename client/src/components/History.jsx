import React, { useEffect, useState } from "react";
import { getAllHistory } from "./helper/apiHelper";
import Spinner from "./Spinner";
import ShowHistory from "./ShowHistory";

const History = () => {
  const [histories, setHistories] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await getAllHistory();
        setHistories(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data: ", error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <div className="m-auto mb-8 w-max">
        <ul className="bg-black shadow overflow-hidden sm:rounded-md max-w-prose mx-auto mt-6 overflow-y-auto no-scrollbar max-h-[32rem]">
          {loading ? (
            <Spinner />
          ) : (
            histories.map((history, idx) => (
              <ShowHistory key={idx} history={history} />
            ))
          )}
        </ul>
        <p className="text-gray-700 mt-10">View calculation history here...</p>
      </div>
    </div>
  );
};

export default History;
