import React, { useState } from "react";
import Switch from "../components/Switch";
import Calculator from "../components/Calculator";
import History from "../components/History";

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = index => {
    setSelectedIndex(index);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-light-100 dark:bg-dark-100 max-sm:bg-backgroundDark max-sm:dark:bg-background">
      <div className="w-full overflow-hidden border-light-200 bg-backgroundDark py-4 text-textDark dark:border-dark-300 dark:bg-background dark:text-text sm:min-h-[40rem] sm:w-[340px] sm:rounded-[45px] sm:bordder-[8px] sm:shadow-2xl">
        <div className="px-4 mb-4">
          <Switch
            options={["calculator", "history"]}
            selectedIndex={selectedIndex}
            onClick={handleChange}
          />
        </div>
        {selectedIndex === 0 ? <Calculator /> : <History />}
      </div>
    </div>
  );
};

export default Home;
