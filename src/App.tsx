import { PiMagicWand } from "react-icons/pi";
import "./App.css";
import { MdContentCopy } from "react-icons/md";
import { useState } from "react";
import logo from "./assets/logo_linktree.svg";
export default function App() {
  const [url, setUrl] = useState("");
  const [isShortened, setIsShortened] = useState(false);

  const handleShorten = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    console.log(url);
  };
  const handleShortenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsShortened(!isShortened);
    console.log(url);
  };
  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText("https://linktree.com/");
  //   setIsShortened(true);
  // };

  return (
    <div className="flex w-screen h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white to-zinc-100 text-black antialiased">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center p-10 rounded-sm">
        <div className="max-w-xl mb-2 ">
          <img src={logo} alt="Logo LinkTree" className="w-full" />
        </div>
        <h2 className="text-xl mb-8">
          Nunca foi tão facil encurtar seus links
        </h2>

        {!isShortened ? (
          <div className="relative w-full">
            <form>
              <label htmlFor="url" className="sr-only">
                Link
              </label>
              <input
                type="url"
                id="url"
                name="url"
                placeholder="Enter with your link"
                className="w-full p-3 bg-zinc-100 border border-zinc-500 rounded-sm placeholder:text-zinc-500 placeholder:px-1 focus:text-zinc-950 focus:outline-none focus:border-zinc-800"
                value={url}
                onChange={handleShorten}
              />
            </form>

            <PiMagicWand
              onClick={handleShortenSubmit}
              className="absolute right-0 top-0 bottom-0 m-auto me-4 text-2xl text-zinc-700 hover:text-zinc-950"
            />
          </div>
        ) : (
          <div className="relative w-full">
            <span className=" w-full flex items-center px-4 py-6 h-[2.625rem] bg-zinc-100 border border-zinc-500 rounded-sm placeholder:text-zinc-500 placeholder:px-1 focus:text-zinc-950">
              {url}aaaaaaa
            </span>
            <MdContentCopy
              className="absolute right-0 top-0 bottom-0 m-auto me-4 text-2xl text-zinc-700 hover:text-zinc-950"
              onClick={handleShortenSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
}
