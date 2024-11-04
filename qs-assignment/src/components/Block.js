import "./Block.css";
import Card from "./Card";
import Grouping from "./Grouping";

function Block({ data }) {
  return (
    <div className="block">
      <div className="single-block">
        <Grouping data={data} />
        {data.tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} users={data.users} />
        ))}
      </div>
    </div>
  );
}

export default Block;
