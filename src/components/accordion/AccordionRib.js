import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";
import { useState } from "react";

function AccordionRib(props) {
  const [opened, setToOpen] = useState(false);

  const strechTheAccordionRib = () => {
    setToOpen(!opened);
  };

  return (
    <div className="acc_single">
      <AccordionHeader
        opened={opened}
        strechTheAccordionRib={strechTheAccordionRib}
      />
      <AccordionContent opened={opened} />
    </div>
  );
}

export default AccordionRib;
