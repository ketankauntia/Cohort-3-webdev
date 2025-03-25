import { CloseIcon } from "../icons/CloseIcon";
import { CopyIcon } from "../icons/CopyIcon";
import { Button } from "./Button";

export function ShareModal({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center justify-center px-8 py-6 shadow-md w-96 h-68 m-auto bg-white rounded-lg">
            <div className="sharemodal-top flex justify-between items-center w-full mb-6">
              <div className="text-xl font-semibold">Share Your Second Brain</div>
              <div className="cursor-pointer" onClick={onClose}>
                <CloseIcon />
              </div>
            </div>
            <div className="sharemodal-content">
              Share your entire collection of notes, documents, tweets and
              videos with others. They'll be able to import your content into
              their secondBrain.
            </div>
            <div className="sharemodal-button items-center">
              <Button 
                variant="primary"
                text="Share Brain"
                startIcon={<CopyIcon />}
              />
            </div>
            <div className="sharemodal-count ">3 items will be shared</div>
          </div>
        </div>
      )}
    </div>
  );
}
