import { MyAxiosAsyncAwait } from "./myComponent/MyAxiosAsyncAwait";


export default function App() {
  return (
    <div className="min-h-screen flex justify-center bg-orange-200">
      <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">

        <section className="w-full p-5 bg-amber-100 flex rounded-xl">
          <MyAxiosAsyncAwait />
        </section>

      </div>
    </div>
  );
}
