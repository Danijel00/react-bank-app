import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper
        className="data-aos-duration"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1800"
        data-aos-easing="ease-in-out-cubic"
      >
        <ServicesCard>
          <ServicesIcon src={require("../../images/services-1.svg").default} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We help reduce your fess and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={require("../../images/services-2.svg").default} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={require("../../images/services-3.svg").default} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock out special membership card that returns 5% cash back
            guaranteed.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={require("../../images/services-4.svg").default} />
          <ServicesH2>Personal Insurance</ServicesH2>
          <ServicesP>
            We always have our clients’ interests at heart. Your account is safe
            with us!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
