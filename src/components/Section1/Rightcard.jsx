import React from 'react'

const Rightcard = (props) => {
  return (
    <div className="relative h-full w-1/4 rounded-4xl overflow-x-hidden shrink-0 bg-blue-300 text-white ">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <div className="top-0 left-0 h-full absolute  w-full p-6 flex flex-col  gap-4 justify-between">
        <h2 className="text-2xl bg-white w-10 text-black flex justify-center rounded-full opacity-80">{props.id}</h2>
        <div>
          <p>{props.description}</p>
          <div className="flex justify-between items-center">
            <button className="bg-blue-500 text-white p-2 self-baseline rounded-full"><span />{props.tag} <span /> <i className="ri-arrow-right-line"> </i></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Rightcard