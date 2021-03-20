function Card() {
  return (
    <div className="card_wrapper">
      <header>
        <div className="card_image_wrapper">icon</div>
        <div className="card_header_text_wrapper">
          <h2>Card text header title prmary text</h2>
          <h3>Secondary text</h3>
        </div>
      </header>
      <main>
        <img
          style={{ width: "300px" }}
          src="https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw"
          alt="puppy"
        />
      </main>
      <footer>
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
