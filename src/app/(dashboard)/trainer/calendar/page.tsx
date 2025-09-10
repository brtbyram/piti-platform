import React from "react";

function Calendar() {



  return (
    <main className="bg-gray-100 min-h-screen text-black p-10 max-w-screen">
      <section className="flex justify-between mb-10">
        <div>
          <h1 className="text-5xl">This Week</h1>
          <p>Week total: 0:01:04</p>
        </div>
        <div>

        </div>
      </section>

      <section className="flex items-center justify-between gap-4">
        <div className="text-5xl flex-1">
          What are you working on?
        </div>
        <div className="flex items-center gap-x-1">
          <button className="bg-white w-10 h-10 rounded-full shadow-md">
            1
          </button>
          <button className="bg-white w-10 h-10 rounded-full shadow-md">
            2
          </button>
          <button className="bg-white w-10 h-10 rounded-full shadow-md">
            3
          </button>
        </div>
        <div className="text-5xl text-right">    
          0:00:00 
        </div>
        <div className="bg-green-500 text-white rounded-full text-4xl leading-0 flex items-center justify-center w-14 h-14">
        +
        </div>
      </section>
    </main>
  );
}

export default Calendar;
