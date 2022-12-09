import React, {useState} from 'react'
import Image from "next/image"
import Categories from "./Categories"


const Category = () => {

  const [data, setData] = useState(Categories);
  const filterResult = (catItem) =>{
    const result = Categories.filter((curData)=>{
      return curData.category === catItem
    });
    setData(result);
  }
  return (
    <>

      <p className="text-center my-10 text-2xl font-bold">Elige un curso</p>
      <div className="container-fluid ">
        <div className="grid grid-cols-2">
          <div className="grid my-0">
            <button className=" my-0 text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={()=>filterResult('ingenieria')}>Ingenierias</button>
            <button className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={()=>filterResult('licenciatura')}>Licenciaturas</button>
            <button className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={()=>setData(Categories)}>Todos las areas</button>


          </div>
          <div className="row">
            {data.map((values) => {
              const {id,title,description,horas} = values;
              return (
                <>
                  <div className="grid grid-cols-1 gap-1">

                    <div className="min-w-sm rounded overflow-hidden shadow-lg">

                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">
                          {description}
                          </p>
                      </div>
                      <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{horas} horas para acreditar</span>
                      </div>
                    </div>


                  </div>
                </>
              )
            })}


          </div>
        </div>

      </div>
    </>
  )
}

export default Category