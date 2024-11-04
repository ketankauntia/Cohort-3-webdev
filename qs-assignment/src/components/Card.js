import React from "react";
import "./Card.css"; // Make sure to create a CSS file for styling

const sampleTicket = {
  id: "CAM-11",
  title: "Conduct Security Vulnerability Assessment",
  priority: 3,
  type: "Feature Request",
  assignedUser: {
    name: "John Doe",
    avatarUrl: "https://example.com/avatar.jpg",
  },
};

const TicketCard = ({ ticket }) => {
  const { id, title, priority, type, assignedUser } = sampleTicket;

  // Priority level badges
  const priorityLabels = ["No priority", "Low", "Medium", "High", "Urgent"];
  const priorityClasses = ["no-priority", "low", "medium", "high", "urgent"];

  return (
    <div className="ticket-card">
      <div className="ticket-id">{id}</div>
      <div className="ticket-title">{title}</div>

      <div className="ticket-meta">
        {/* Priority badge */}
        <div className={`priority-badge ${priorityClasses[priority]}`}>
          {priority === 4 ? "!" : null}
        </div>

        {/* Type badge */}
        <div className="type-badge">{type}</div>
      </div>

      {/* User Avatar */}
      <div className="ticket-avatar">
        <img src={assignedUser?.avatarUrl} alt={assignedUser?.name} />
      </div>
    </div>
  );
};

export default TicketCard;
