import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function AccordionHeader() {
  return (
    <header className="acc_header">
      <h3 className="acc_title">Title</h3>
      <FontAwesomeIcon icon={faPlusCircle} color="#FFC800" size="3x" />
    </header>
  );
}

export default AccordionHeader;
