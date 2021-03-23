function CardBody(props) {
  return (
    <main>
      <img style={{ maxWidth: "100%" }} src={props.avatar} alt="User avatar" />
    </main>
  );
}

export default CardBody;
