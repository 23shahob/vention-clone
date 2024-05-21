import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import First from "../../public/first.jpeg";
import Second from "../../public/second.jpeg";
import Third from "../../public/third.jpeg";
import Fourth from "../../public/four.jpeg";
import Fifth from "../../public/five.jpeg";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ height: "82px", display: "flex" }}
        >
          <Typography
            sx={{
              width: "50%",
              flexShrink: 0,
            }}
          >
            Fitness & wellness
          </Typography>
          <Typography sx={{ width: "50%" }}>
            <a className="underline hover:text-[#004051]" href="#">
              ClassPass
            </a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="flex">
          <Typography className="w-[50%]"></Typography>
          <Typography className="w-[50%]">
            <p className="mb-12 text-[18px]">
              A boutique fitness membership app, ClassPass provides access to
              in-studio workouts, beauty and wellness appointments, and
              on-demand exercise classes.
            </p>
            <img src={First} alt="Img" />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{ height: "82px", display: "flex" }}
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>
            Food & beverage
          </Typography>
          <Typography sx={{ width: "50%" }}>
            <a className="underline hover:text-[#004051]" href="#">
              Bevi
            </a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="flex">
          <Typography className="w-[50%]"></Typography>
          <Typography className="w-[50%]">
            <p className="mb-12 text-[18px]">
              A boutique fitness membership app, ClassPass provides access to
              in-studio workouts, beauty and wellness appointments, and
              on-demand exercise classes.
            </p>
            <img src={Second} alt="Img" />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{ height: "82px", display: "flex" }}
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>Fintech</Typography>
          <Typography sx={{ width: "50%" }}>
            <a className="underline hover:text-[#004051]" href="#">
              DealCloud
            </a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="flex">
          <Typography className="w-[50%]"></Typography>
          <Typography className="w-[50%]">
            <p className="mb-12 text-[18px]">
              DealCloud equips professional and financial services firms with
              robust tools for optimizing deal execution and client relationship
              management.
            </p>
            <img src={Third} alt="Img" />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          sx={{ height: "82px", display: "flex" }}
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>
            Healthtech
          </Typography>
          <Typography sx={{ width: "50%" }}>
            <a className="underline hover:text-[#004051]" href="#">
              Dialogue
            </a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="flex">
          <Typography className="w-[50%]"></Typography>
          <Typography className="w-[50%]">
            <p className="mb-12 text-[18px]">
              A Canadian telemedicine startup, Dialogue's platform provides
              access to an expansive virtual medical team for unparalleled
              patient-centric care.
            </p>
            <img src={Fourth} alt="Img" />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          sx={{ height: "82px", display: "flex" }}
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>
            Healthtech
          </Typography>
          <Typography sx={{ width: "50%" }}>
            <a className="underline hover:text-[#004051]" href="#">
              Thirty Madison
            </a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="flex">
          <Typography className="w-[50%]"></Typography>
          <Typography className="w-[50%]">
            <p className="mb-12 text-[18px]">
              Designed to help people to virtually manage their chronic
              conditions, Thirty Madison's portfolio encompasses treatment for
              everything from migraines to hair loss.
            </p>
            <img src={Fifth} alt="Img" />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
