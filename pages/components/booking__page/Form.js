import React from "react";

const Form = () => {
  return (
    <div className="ml-52">
      <form className="border-2 w-full px-5 py-8 bg-orange-100">
        <label className="font-bold text-xl">Check In</label>
        <br />
        <input
          type={"date"}
          defaultValue="2020-06-01"
          className="bg-white border-2 w-96 px-7 py-3 mb-4 mt-4 text-yellow-500"
        />
        <br />
        <label className="font-bold text-xl">Check Out</label>
        <br />
        <input
          type={"date"}
          defaultValue="2022-01-21"
          className="bg-white border-2 w-96 px-7 py-3 mt-4 mb-4 text-yellow-500"
        />
        <br />
        <label className="font-bold text-xl" htmlFor="cars">
          Rooms
        </label>
        <br />
        <select
          className="bg-white border-2 w-96 px-7 py-3 mt-4 text-yellow-500"
          name="cars"
          id="cars"
        >
          <option value="volvo">01</option>
          <option value="saab">02</option>
          <option value="mercedes">03</option>
          <option value="audi">04</option>
        </select>
        <br />
        <br />
        <label className="font-bold text-xl" htmlFor="cars">
          Adults
        </label>
        <br />
        <select
          className="bg-white border-2 w-96 px-7 py-3 mt-4 text-yellow-500"
          name="cars"
          id="cars"
        >
          <option value="volvo">01</option>
          <option value="saab">02</option>
          <option value="mercedes">03</option>
          <option value="audi">04</option>
        </select>
        <br />
        <br />
        <label className="font-bold text-xl" htmlFor="cars">
          Childrens
        </label>
        <br />
        <select
          className="bg-white border-2 w-96 px-7 py-3 mt-4 mb-4 text-yellow-500"
          name="cars"
          id="cars"
        >
          <option value="volvo">01</option>
          <option value="saab">02</option>
          <option value="mercedes">03</option>
          <option value="audi">04</option>
        </select>
        <br />
        <input
          type={"button"}
          value={"Check Rates"}
          className="text-white border-2 rounded-lg font-bold w-96 px-7 py-3 mt-4 bg-orange-400"
        />
      </form>
    </div>
  );
};

export default Form;
