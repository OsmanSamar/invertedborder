import React from "react";

const Inverted = () => {
  return (
    <div className=" relative w-80 h-96 flex flex-col justify-between ">
      <div
        className="image relative w-full h-60 rounded-2xl  rounded-tl-none bg-cover bg-center overflow-hidden "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE3NTgzNDU&ixlib=rb-4.0.3&q=80&w=400')",
        }}
      >
        {/* Text on top left */}
        <div className="absolute top-0 left-0 p-4 text-black bg-white rounded-br-2xl  w-24 h-12">
          <h2 className="text-lg font-semibold">1960</h2>
          {/* <p className="text-sm">Built in 1632</p> */}
        </div>
      </div>

      <div className="content relative w-full h-36 bg-opacity-10 rounded-b-2xl rounded-tr-none">
        <div className="name absolute h-17 w-1/2 bg-white top-[-70px] right-0 border-t-10 border-l-10 border-black rounded-tl-2xl ">
          <span className="text-black px-5 py-2 my-2 block rounded-md text-xs font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Inverted;
