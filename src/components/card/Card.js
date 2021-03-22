import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

function Card(props) {
  return (
    <div className="card_wrapper">
      <CardHeader users={props.users}/>
      <CardBody users={props.users}/>
      <CardFooter users={props.users}/>
    </div>
  );
}

export default Card;
