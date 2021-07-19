import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import "../css/faq.css";

export default function Faq(){
    return(
<Container fluid className="faq-body">
<div>
<h2 style={{textAlign: 'center', fontFamily: 'Friz Quadrata Std Regular'}}>Frequently Asked <div className="h2-color" style={{display: 'inline-block'}}> Questions </div></h2>
<br />
</div>
 <Row className="row">
     <Col>
    <div className="tabs">
      <div className="tab">
        <input type="checkbox" id="chck1" />
        <label className="tab-label" htmlFor="chck1"><h4>Where can I find further updates about Techno Colosseum</h4></label>
        <div className="tab-content">
        After filling the registration form, The participants will get access to join our discord server, where further communications for the event will occur.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck2" />
        <label className="tab-label" htmlFor="chck2"><h4>For web and app development domains, where will the dev prompts be shared? Are there any restrictions on tech stacks?</h4></label>
        <div className="tab-content">
        Detailed prompts will be shared with the participants on our discord server itself when the event goes live. There are no restrictions concerning the tech stacks that the participants are allowed to use.
        </div>
      </div>
    </div>
  </Col>
  <Col>
  <div className="tabs">
      <div className="tab">
        <input type="checkbox" id="chck3" />
        <label className="tab-label" htmlFor="chck3"><h4>What do I need to participate? </h4></label>
        <div className="tab-content">
        Each participant only needs access to a stable internet connection and a keen interest in the domain they want to participate in.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id="chck4" />
        <label className="tab-label" htmlFor="chck4"><h4>For domains that have written tests, will these tests be proctored? Is there a word/time limit or limit on the number of submissions?</h4></label>
        <div className="tab-content">
        Yes, some of the written tests will be proctored, and some questions will have a word limit or will be time-based. We will communicate more details about a specific type of test or domain on the discord server.
        </div>
      </div>
    </div>
  </Col>
</Row>
<Row className="row">
<Col>
    <div className="tabs">
      <div className="tab">
        <input type="checkbox" id="chck5" />
        <label className="tab-label" htmlFor="chck5"><h4>What is the last date to register? </h4></label>
        <div className="tab-content">
        Registrations will close at 11:00 AM on July 23rd 2021
        </div>
      </div>
    </div>
  </Col>
  <Col>
  <div className="tabs">
      <div className="tab">
        <input type="checkbox" id="chck6" />
        <label className="tab-label" htmlFor="chck6"><h4>I can't find my question here. </h4></label>
        <div className="tab-content">
        Reach out to us at contactus.ieeesbmanipal@gmail.com for any queries. Participants can also put up any further queries on our discord server after registration.
        </div>
      </div>
    </div>
  </Col>
</Row>
</Container>
  )
}