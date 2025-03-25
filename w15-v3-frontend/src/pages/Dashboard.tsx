import { useState } from "react";
import { ShareModal } from "../components/shareModal";
import { AddContentModal } from "../components/AddContentModal";
import { Sidebar } from "../components/Sidebar";
import { Button } from "../components/Button";
import { ShareIcon } from "../icons/ShareIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { Card } from "../components/Card";

export function Dashboard(){
    const [addModalOpen, setAddModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  return (
    <div>
      <ShareModal
        open={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />
      <AddContentModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
      />
      <div className="flex">
        <Sidebar />
        <div className="bg-slate-200">
        <div className="flex justify-end mx-6 my-3">
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
            onClick={() => setShareModalOpen(true)}
          />
          <Button
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
            onClick={() => setAddModalOpen(true)}
          />
        </div>
        <div className="flex flex-wrap">
          <Card
            title="My goal"
            link="https://twitter.com/KauntiaKetan/status/1898956402132972014"
            type="twitter"
          />
          <Card
            title="Yt video to watch"
            link="https://www.youtube.com/watch/P7vwvr8CXL4?si=vnF05PA9EVIJjcm6"
            type="youtube"
          />
          <Card
            title="My goal"
            link="https://twitter.com/KauntiaKetan/status/1898956402132972014"
            type="twitter"
          />
          <Card
            title="Yt video to watch"
            link="https://www.youtube.com/watch/P7vwvr8CXL4?si=vnF05PA9EVIJjcm6"
            type="youtube"
          />
          <Card
            title="My goal"
            link="https://twitter.com/KauntiaKetan/status/1898956402132972014"
            type="twitter"
          />
          <Card
            title="Yt video to watch"
            link="https://www.youtube.com/watch/P7vwvr8CXL4?si=vnF05PA9EVIJjcm6"
            type="youtube"
          />
        </div>
        </div>
      </div>
    </div>
  );
}