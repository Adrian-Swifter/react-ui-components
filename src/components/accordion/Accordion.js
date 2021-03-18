import { useState } from "react";
import AccordionRib from "./AccordionRib";

function Accordion() {
  const [opened, setToOpen] = useState(false);

  const strechTheAccordionRib = () => {
    setToOpen(!opened);
  };

  return (
    <div className="accordion_wrapper">
      <AccordionRib
        strechTheAccordionRib={strechTheAccordionRib}
        opened={opened}
      />
    </div>
  );
}

export default Accordion;
