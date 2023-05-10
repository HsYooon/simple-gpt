import React, {useState, useEffect} from 'react';
import axios from 'axios';
export default function Chat() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('안녕하세요?');

  const onChange = (event) => {
    setQuery(event.target.value)
  }

  const send = async () => { 
    console.log(query)
    const result = await axios.post('/api/openai/chat', query)
    console.log(result.data)
    setAnswer(result.data)
  }

  return (
        
    <div className="color">
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          
            <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
                <p className="uppercase tracking-loose w-full">Ask Anything!</p>
                <h1 className="my-4 text-5xl font-bold leading-tight">
                  Main Hero Message to sell yourself!
                </h1>
                <div className="leading-normal text-2xl mb-8">
                  <input onChange={onChange}class="w-full border-2 border-indigo-500" name="query"></input>
                  <button onClick={send} className="mx-auto lg:mx-0 hover:underline bg-indigo-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  send
                  </button>
                </div>
                <div>
              </div>
            </div>
            <div className="flex">
                {answer}
            </div>
        </div>
      </div>
    </div>
    )
  }