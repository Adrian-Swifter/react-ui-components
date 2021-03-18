import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function AccordionHeader(props) {
  return (
    <header onClick={props.strechTheAccordionRib} className="acc_header">
      <h3 className="acc_title">Title</h3>
      <FontAwesomeIcon
        style={
          props.opened ? { visibility: "hidden" } : { visibility: "visible" }
        }
        icon={faPlusCircle}
        color="#FFC800"
        size="2x"
      />
      <FontAwesomeIcon
        style={props.opened ? { display: "initial" } : { display: "none" }}
        icon={faMinusCircle}
        color="#FFC800"
        size="2x"
      />
    </header>
  );
}

export default AccordionHeader;
