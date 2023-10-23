import { Card } from "react-bootstrap";
import { Tags } from "../tags/Tags";

const MyCard = ({ img, name, desc, bgBadge, textBadge }) => {
  return (
    <Card style={{ width: "18rem", height: "25rem" }}>
      <Card.Img variant="top" src={img} style={{ height: "11rem" }} />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </div>
        <div style={{ width: "100%", marginTop: "1rem" }}>
          <Tags bgBadge={bgBadge} textBadge={textBadge}></Tags>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
