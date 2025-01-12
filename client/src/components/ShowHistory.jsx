import React from "react";

const ShowHistory = ({ history }) => {
  return (
    <li>
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl leading-6 font-medium text-white-900">
            {history.expression}
          </h3>
          <p className="mt-1 max-w-2xl text-lg text-white-500">
            ={history.result}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs font-medium text-gray-500">
            date:{" "}
            <span className="text-xs text-orange-400">
              {new Date(history.createdAt).toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default ShowHistory;
