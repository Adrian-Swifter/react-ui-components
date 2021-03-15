import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function Accordion(props) {
  return (
    <div className="accordion_wrapper">
      <div className="acc_single">
        <header className="acc_header">
          <h3 className="acc_title">Title</h3>
          <FontAwesomeIcon icon={faPlusCircle} color="#FFC800" size="3x" />
        </header>
        <main>
          <p className="acc_content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </main>
      </div>
    </div>
  );
}

export default Accordion;
