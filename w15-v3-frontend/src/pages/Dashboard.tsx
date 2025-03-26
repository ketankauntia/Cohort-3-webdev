import { useEffect, useState } from "react";
import { ShareModal } from "../components/shareModal";
import { AddContentModal } from "../components/AddContentModal";
import { Sidebar } from "../components/Sidebar";
import { Button } from "../components/Button";
import { ShareIcon } from "../icons/ShareIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { Card } from "../components/Card";
import { useContent } from "../hooks/useContent";
import { BACKEND_URL } from "../config";

export function Dashboard() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const {contents, refreshFeed} = useContent() || [];
  // console.log(`contents : ${contents}`);
  // console.log(`GET ${BACKEND_URL}/api/v1/content`);

  // const token = localStorage.getItem("token");
  // if (!token) {
  //   console.error("No auth token found in localStorage");
  // } else {
  //   console.log(`token : ${token}`);
  // }


  useEffect(()=>{
    refreshFeed();
  }, [addModalOpen])

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
            {/* <Card type="twitter" link="https://twitter.com/KauntiaKetan/status/1904837618535481844" title="random check hardcoded" /> : debugged.. needed to replace x.com with twitter.com to get the tweets going.  */}
            {contents.map(({ type, link, title, index }) => (
              <Card key={index} title={title} link={link} type={type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
