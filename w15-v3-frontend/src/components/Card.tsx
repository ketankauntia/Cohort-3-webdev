import axios from "axios";
import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Tags } from "./Tags";

interface cardProps {
  title: string;
  link: string;
  type: "youtube" | "twitter";
  key: string;
  handleDelete?: (key:string) => void;
}

// const typeOfDoc ={
//     "youtube" : "youtube",
//     "twitter" : "twitter"
// };

export function Card({ title, link, type, key, handleDelete }: cardProps) {

  

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 max-w-90 m-2 h-fit">
      <div className="card-heading-cont flex justify-between items-center mb-3">
        <div key={key} className="left-side flex items-center">
          {/* {typeOfDoc === null? <DocumentIcon/> : {<typeOfDoc/>} } */}
          <DocumentIcon />
          <div className="text-3xl font-bold ml-1">{title}</div>
        </div>
        <div className="right-side flex items-center">
          <div className="mr-2">
            <a href={link} target="_blank">
              <ShareIcon />
            </a>
          </div>
          <div className="cursor-pointer" onClick={() =>{ handleDelete(key)}}>
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="card-content-cont mb-2">
        {type === "youtube" && (
          <iframe
            className="w-full h-auto"
            width="560"
            height="315"
            src={link
              .replace("watch?v=", "embed/")
              .replace("youtu.be", "youtube.com/embed")
              .replace("live/", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com/", "twitter.com/")}></a>
          </blockquote>
        )}
      </div>
      <div className="card-tags-cont flex flex-wrap mb-2">{/*  */}</div>
      <div className="card-date-cont">Added on 12/12/2012</div>
    </div>
  );
}
