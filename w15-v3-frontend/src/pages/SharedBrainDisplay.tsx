import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { BACKEND_URL } from "../config";

export function SharedBrainDisplay() {
  const { shareid } = useParams();
  const [contents, setContents] = useState([]);

  useEffect(() => {
    async function fetchSharedBrain() {
      try {
        // const response = await axios.get(`${BACKEND_URL}/${shareid}`);
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/brain/${shareid}`
        );
        console.log(`response : ${response}`);

        setContents(response.data.data || []);
      } catch (error) {
        console.error("Error fetching shared brain:", error);
      }
    }

    if (shareid) fetchSharedBrain();
  }, [shareid]);

//   console.log(`Shared Brain Link: ${shareid}`);

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-slate-200 p-4">
        <div className="font-bold text-lg mb-4">Viewing Shared Brain</div>
        <div className="cards-container flex flex-wrap">
          {contents.length > 0 ? (
            contents
              .filter(({ title, link }) => title && link)
              .map(({ type, link, title }, index) => (
                <Card key={index} title={title} link={link} type={type} />
              ))
          ) : (
            <p className="text-gray-500">No shared content found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
