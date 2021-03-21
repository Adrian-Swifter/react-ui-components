import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

function Card() {
  return (
    <div className="card_wrapper">
      <header className="card_header">
        <div className="card_image_wrapper">
          <FontAwesomeIcon icon={faIdCard} color="#ce82ff" size="2x" />
        </div>
        <div className="card_header_text_wrapper">
          <h3>Title primary text</h3>
          <p>Secondary text</p>
        </div>
      </header>
      <main>
        <img
          style={{ maxWidth: "100%" }}
          src="https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw"
          alt="puppy"
        />
      </main>
      <footer className="card_footer">
        <p className="card_footer_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="card_footer_btn_wrapper">
          <button>Action 1</button>
          <button>Action 2</button>
        </div>
      </footer>
    </div>
  );
}

export default Card;
