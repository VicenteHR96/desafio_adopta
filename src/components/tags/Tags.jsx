import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

export const Tags = ({ bgBadge, textBadge }) => {
  return (
    <h4 style={{ textAlign: "center" }}>
      <Badge pill bg={bgBadge} style={{ width: "90%" }}>
        <a href="" style={{ color: "white" }}>
          {textBadge}
        </a>
      </Badge>
    </h4>
  );
};
