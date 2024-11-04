import "./Grouping.css";
import dots from "../assets/3-dot-menu.svg";
import add from "../assets/add.svg";

function Grouping({ data }) {
  const priorityCounts = data.tickets.reduce((counts, ticket) => {
    counts[ticket.priority] = (counts[ticket.priority] || 0) + 1;
    return counts;
  }, {});

  return (
    <div class="grouping">
      <div class="grouping-container">
        <div class="group-left">
          <span>
            <img src={dots} alt="Icon" width="20" height="20" />
          </span>
          No Priority{" "}
          <span className="count-cards">{priorityCounts[0] || 0}</span>
        </div>
        <div class="group-right">
          <img src={add} alt="Icon" width="20" height="20" />
          <img src={dots} alt="Icon" width="20" height="20" />
        </div>
      </div>
    </div>
  );
}

export default Grouping;
