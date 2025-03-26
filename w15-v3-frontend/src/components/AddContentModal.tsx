// 3:11:38

import { useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function AddContentModal({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);
  const token = localStorage.getItem("token");

  if (!token) {
    alert("No authentication token found. Please log in again.");
    return;
  }

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        type,
        title,
      },
      {
        headers: {
          // Authorization: localStorage.getItem("token"),
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    onClose();
  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative flex flex-col items-center justify-center px-8 py-6 shadow-md w-96 h-68 m-auto bg-white rounded-lg">
            <div className="flex justify-end">
              <div
                className="cursor-pointer absolute top-6 right-6"
                onClick={onClose}
              >
                <CloseIcon />
              </div>
            </div>
            <div className="font-semibold text-xl text-center mb-4">
              Add Content
            </div>
            <div>
              <Input reference={titleRef} placeholder={"Title here"} />
              <Input reference={linkRef} placeholder={"Link here"} />
            </div>
            <div className="flex mt-3">
              <Button
                text="Youtube"
                variant={type === ContentType.Youtube ? "primary" : "secondary"}
                onClick={() => setType(ContentType.Youtube)}
              />
              <Button
                text="Twitter"
                variant={type === ContentType.Twitter ? "primary" : "secondary"}
                onClick={() => setType(ContentType.Twitter)}
              />
            </div>
            <div className="mt-3">
              <Button onClick={addContent} variant="primary" text="Add Note" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
