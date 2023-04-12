import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import { SocialIcon } from 'react-social-icons';

import img02 from "../../public/img02.png";

import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About The Project" />
            <h3 className="mt-4"></h3>
            <h3 className="mb-4 text-light">Aptos Doodles</h3>
            
            <p className=" text-light">
            Doodles 2 lets anyone create a uniquely personalized and endlessly customizable character in the one-of-a-kind style from artist Burnt Toast.            </p>
            
            <SocialIcon url="https://twitter.com/home" style={{ height: 30, width: 30, marginRight:'15px' }}/>
             
            <SocialIcon url="https://discord.com/" style={{ height: 30, width: 30, marginRight:'15px' }}/>

              
              
            

          </Col>

          <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img02} alt="about-img" />
                </div>
              </div>

              
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default About;
