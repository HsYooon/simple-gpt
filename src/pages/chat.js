import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Chat() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("안녕하세요?");

  const onChange = (event) => {
    console.log("query : " + query);
    setQuery(event.target.value);
  };

  const send = async () => {
    console.log(query);
    const result = await axios
      .post("/api/openai/chat", {
        query: query,
      })
      .then(function (response) {
        var answer = response.data.answer;
        if (answer != "") {
          setAnswer(answer);
        }
        console.log(response.data.answer);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(result);
    //setAnswer(result.data);
  };

  return (
    <div className="color">
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">Ask Anything!</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Try to send some message to GPT!
            </h1>
            <div className="leading-normal text-2xl mb-8">
              <input
                onChange={onChange}
                className="w-full border-2 border-indigo-500"
                name="query"
              ></input>
              <button
                onClick={send}
                className="mx-auto lg:mx-0 hover:underline bg-indigo-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Send
              </button>
            </div>
            <div></div>
          </div>
          <div className="flex">{answer}</div>
        </div>
      </div>
      {/* 질문 이력 리스트 시작 */}
      <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div class="flex flex-col items-center">
          <h2 class="font-bold text-5xl mt-5 tracking-tight">History</h2>
          <p class="text-neutral-500 text-xl mt-3">previous questions</p>
        </div>
        <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          <div class="py-5">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> What is a SAAS platform?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                SAAS platform is a cloud-based software service that allows
                users to access and use a variety of tools and functionality.
              </p>
            </details>
          </div>

          <div class="py-5">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> What is a SAAS platform?</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                SAAS platform is a cloud-based software service that allows
                users to access and use a variety of tools and functionality.
              </p>
            </details>
          </div>
        </div>
      </div>
      {/* 질문 이력 리스트 끝 */}
    </div>
  );
}
