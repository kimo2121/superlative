import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import "./FAQ.css";
const Accordion = withStyles({
  root: {
    boxShadow: "none",
    textAlign: "left",
    fontSize: "22px",
    color: "black",
    borderRadius: "5px",
    fontWeight: "bolder",
    backgroundColor: "#F3F4F6",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#F3F4F6",
    borderRadius: "5px",
    color: "#223D83",
    fontSize: "24px",
    fontWeight: "bolder",
    margin: "2vh 0",
    marginBottom: -1,
    minHeight: 72,
    "&$expanded": {
      minHeight: 72,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="FAQ" className="faq-component">
      <h1>frequently asked questions</h1>
      <div className="accordion-wrpper">
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              className={
                expanded === "panel1"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlinePlus
                className={expanded === "panel1" ? "arrow active" : "arrow"}
              />
              <AiOutlineMinus
                className={expanded === "panel1" ? "minus active" : "minus"}
              />
              How can I buy a Superlative Apes NFT?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              New to NFTs? No worries, here are some steps on what you need to
              do to get your Superlative Apes NFT.
              <br />
              1. Download the metamask.io extension on your browser
              <br />
              2. Purchase Ethereum from various exchanges, such as Coinbase or
              Binance <br /> 3. Send Ethereum from this exchange to your
              MetaMask wallet <br /> 4. When it is time to mint, open the
              Superlative Apes website and select the number of NFTs you wish to
              purchase <br /> 5. Click "MINT" button, Metamask will popup asking
              for connection <br /> 6. Confirm the transaction and any
              associated fees
              <br /> 7. Once you have made your purchase, your NFTs will appear
              in your wallet and on OpenSea
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              className={
                expanded === "panel2"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlineMinus
                className={expanded === "panel2" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel2" ? "arrow active" : "arrow"}
              />
              What is the total supply?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A total of 4444 unique Superlative Apes NFTs will be created.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              className={
                expanded === "panel3"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlineMinus
                className={expanded === "panel3" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel3" ? "arrow active" : "arrow"}
              />
              When will Superlative Apes launch?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Pre-sale will lauch 15 december At 10PM EST, Public Sale will
              launch 16 december At 10PM EST.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography
              className={
                expanded === "panel4"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlineMinus
                className={expanded === "panel4" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel4" ? "arrow active" : "arrow"}
              />
              What will it cost to mint a Superlative Apes NFT?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>0.069 ETH + gas fees.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography
              className={
                expanded === "panel5"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlineMinus
                className={expanded === "panel5" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel5" ? "arrow active" : "arrow"}
              />
              Will there be a pre-sale?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes. There will be a pre-sale that is designed to reward our two
              strategic advisers, early collectors, and the most active members
              of the Superlative Apes community. All will pay the same price
              (0.069 ETH) as everyone else.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography
              className={
                expanded === "panel6"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlineMinus
                className={expanded === "panel6" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel6" ? "arrow active" : "arrow"}
              />
              Will holders receive a free mint-pass for the next phase of
              Superlative Apes?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, holders will receive many more benefits when being an Ape
              holder.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography
              className={
                expanded === "panel7"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlineMinus
                className={expanded === "panel7" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel7" ? "arrow active" : "arrow"}
              />
              Still have questions?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Head to our Discord to learn more and ask any questions.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default CustomizedAccordions;
