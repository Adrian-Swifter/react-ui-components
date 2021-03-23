import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

function CardHeader(props) {
  return (
    <header className="card_header">
      <div className="card_image_wrapper">
        <FontAwesomeIcon icon={faIdCard} color="#ce82ff" size="2x" />
      </div>
      <div className="card_header_text_wrapper">
        <h3>
          {props.firstName} {props.lastName}
        </h3>
        <p>{props.email}</p>
      </div>
    </header>
  );
}

export default CardHeader;
