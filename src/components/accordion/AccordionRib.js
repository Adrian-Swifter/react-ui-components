import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

function AccordionRib(props) {
  return (
    <div className="acc_single">
      <AccordionHeader
        opened={props.opened}
        strechTheAccordionRib={props.strechTheAccordionRib}
      />
      <AccordionContent opened={props.opened} />
    </div>
  );
}

export default AccordionRib;
