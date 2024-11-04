import React from "react";
import "./Card.css";

const TicketCard = ({ ticket, users }) => {
  const { id, title, priority, tag, userId } = ticket;

  const assignedUser = users.find((user) => user.id === userId);
  const priorityLabels = ["No priority", "Low", "Medium", "High", "Urgent"];
  const priorityClasses = ["no-priority", "low", "medium", "high", "urgent"];

  return (
    <div className="ticket-card">
      <div className="ticket-id">{id}</div>
      <div className="ticket-title">{title}</div>

      <div className="ticket-meta">
        <div className={`priority-badge ${priorityClasses[priority]}`}>
          {priorityLabels[priority]}
        </div>
        <div className="type-badge">{tag[0]}</div>
      </div>

      {/* User Avatar */}
      <div className="ticket-avatar">
        {assignedUser && (
          <>
            <img
              src={assignedUser.avatarUrl || "default-avatar.jpg"}
              alt={assignedUser.name}
            />
            <div className="assigned-user-name">{assignedUser.name}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default TicketCard;
