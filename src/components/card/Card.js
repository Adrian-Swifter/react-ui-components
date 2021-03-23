import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

function Card(props) {
  return (
    <div className="card_wrapper">
      <CardHeader
        firstName={props.firstName}
        lastName={props.lastName}
        email={props.email}
      />
      <CardBody avatar={props.avatar} />
      <CardFooter />
    </div>
  );
}

export default Card;
