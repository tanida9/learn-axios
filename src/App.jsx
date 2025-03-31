//import { AxiosAsyncAwait } from "./components/AxiosAsyncAwait";
//import { AxiosThenCatch } from "./components/AxiosThenCatch";
//import { FetchPromise } from "./components/FetchPromise";
//import { APIExplorer } from "./components/APIExplorer";
//import { FetchAsyncAwait } from "./components/FetchAsyncAwait";
// import { APIExplorer2 } from "./components/APIExplorer2";

import { MyAxiosAsyncAwait } from "./myComponent/MyAxiosAsyncAwait";


export default function App() {
  return (
    <div className="min-h-screen flex justify-center bg-orange-200">
      <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
        {/*<h1 className="w-full p-6 bg-amber-100 font-extrabold rounded-xl">
          First Meet with Axios
        </h1> */}
        {/* <section className="w-full p-5 bg-amber-100 flex rounded-xl">
          <ul className="list-inside list-disc flex-1">
            <span className="font-semibold">Examples:</span>
            <li>Axios with Async/Await ✅</li>
            <li>Axios with Then/Catch</li>
            <li>Fetch Async/Await</li>
            <li>Fetch Then/Catch</li>
            <li>API Explorer</li>
          </ul>
        </section> */}

        {/*<section className="w-full p-5 bg-amber-100 flex">
          <AxiosAsyncAwait />
        </section > */}
        {/*<section className="w-full p-5 bg-amber-100 flex">
          <AxiosThenCatch />
        </section> */}
        {/*<section className="w-full p-5 bg-amber-100 flex">
          <FetchAsyncAwait />
        </section> */}
        {/*<section className="w-full p-5 bg-amber-100 flex">
          <FetchPromise />
        </section> */}
        {/*<section className="w-full p-5 bg-amber-100 flex">
          <APIExplorer />
        </section> */}
        {/* <section className="w-full p-5 bg-amber-100 flex">
          <APIExplorer2 />
        </section> */}
        <section className="w-full p-5 bg-amber-100 flex rounded-xl">
          <MyAxiosAsyncAwait />
        </section>

      </div>
    </div>
  );
}
