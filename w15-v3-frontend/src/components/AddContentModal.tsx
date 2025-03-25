import { CloseIcon } from "../icons/CloseIcon";
import { Button } from "./Button";
import { Input } from "./Input";

export function AddContentModal({ open, onClose }) {

  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative flex flex-col items-center justify-center px-8 py-6 shadow-md w-96 h-68 m-auto bg-white rounded-lg">
            <div className="flex justify-end">
              <div className="cursor-pointer absolute top-6 right-6 " onClick={onClose}>
                <CloseIcon />
              </div>
            </div>
            <div className="font-semibold text-xl text-center mb-4">
              Add Content
            </div>
            <div>
              <Input placeholder={"Title here"} />
              <Input placeholder={"link here"} />
            </div>
            <div className="mt-3">
              <Button variant="primary" text="Add Note" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

