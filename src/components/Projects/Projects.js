import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import truevintage from "../../Assets/Projects/truevintage.png";
import isluxury from "../../Assets/Projects/isluxury.png";
import hotelspider from "../../Assets/Projects/hotelspider.png";
import shopify from "../../Assets/Projects/shopify.png";
import rubyrose from "../../Assets/Projects/rubyrose.png";
import shachini from "../../Assets/Projects/shachini.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopify}
              isBlog={false}
              title="Sport-Unity"
              description="With your sport clubs or your friends, with public or private groups, organize your sport life the way you want."
              demoLink="https://sportunity.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shachini}
              isBlog={false}
              title="SACHINI"
              description="Sachini’s blogging begun in early 2019 and it was a way of her expressing her thoughts on fashion, style and trends. It was a passion project sparked by an incurable love for fashion and style."
              
              demoLink="https://www.sachini.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotelspider}
              isBlog={false}
              title="hotel-spider"
              description="Hotel-Spider is a Swiss-made, cloud-based, all-in-one online distribution system for hotels. Our simple goal: to increase your hotel’s visibility and online sales all while saving you time."
              demoLink="http://hotel-spider.com"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={truevintage}
              isBlog={false}
              title="TrueVintage"
              description="纽约人寿保险经纪，代理各大美国人寿保险公司，全美服务，提供快捷的报价，线上服务，电子签约. New York Life，人寿保险，人寿保险经纪，人寿保险代理，保险经纪，Life Insurance Company,"
              demoLink="http://truevintage.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rubyrose}
              isBlog={false}
              title="Ruby Rose"
              description="Shipping 5-10 days, Shipping Cost is now 2$. Minimum Order 8$."
              demoLink="https://rubyroselb.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={isluxury}
              isBlog={false}
              title="IsLuxury"
              description="IS LUXURY is a proud member of the most exclusive networks, providing national and global marketing collaboration, enabling our listings the benefit of elite networking and widespread listing exposure."
              demoLink="https://www.isluxury.com"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
