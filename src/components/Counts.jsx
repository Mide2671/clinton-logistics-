import React, {useEffect, useState} from "react";

function Counts() {

  return (
    <div className="bg-gray-200 pt-16 pb-10 ">
      <div className="container p-4 mx-auto flex flex-col justify-around md:flex-row space-y-9  md:space-y-0 items-center">
        <div className="flex flex-col space-y-5 text-center">
          <span className="text-4xl text-primary font-bold tracking-wider ">
            2000
          </span>
          <h1 className="text-2xl tracking-wider">Skilled Experts</h1>
        </div>
        <div className="flex flex-col space-y-5 text-center">
          <span className="text-4xl  text-primary font-bold tracking-wider ">
            2000
          </span>
          <h1 className="text-2xl tracking-wider">Skilled Experts</h1>
        </div>
        <div className="flex flex-col space-y-5 text-center">
          <span className="text-4xl  text-primary font-bold tracking-wider ">
            2000
          </span>
          <h1 className="text-2xl tracking-wider">Skilled Experts</h1>
        </div>
      </div>
    </div>
  );
}

export default Counts;
