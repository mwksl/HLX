/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

/* import components */
import Banner from 'components/Banner';
import Section from 'components/Section';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Banner
          centerHighlight="HealthLX"
          linkLocation="https://www.healthlx.com"
          subtitle="It's pretty cool"
        />
        <Section
          title="Interoperability"
          subtitle="We Know The Challenge"
        >
          <p>Healthcare’s innovation potential may be expanding, but so is the size of its
          greatest challenge and elephant in the room—interoperability. While the industry
          rides a wave of evolution fueled by digital connection, there has never been a
          greater disconnect when it comes to utilizing digital data effectively in healthcare,
          both literally and figuratively. We recognize this challenge and embrace it.</p>
        </Section>
        <Section
          type="dark"
          title="The HealthLX Solution"
        >
          <p>HealthLX stands for ‘healthcare language exchange’. We created HealthLX to
          support the communication of critically important interoperability objectives
          across the healthcare ecosystem. Interoperability can be simpler than it has
          been but must also be comprehensive in order to address security, speed and
          reliability.</p>
          <br />

          <p>We’ve blended an open source interoperability and data flow monitoring engine,
          and a connector ecosystem with proven integration and system monitoring and
          management services to create a comprehensive solution.</p>
          <br />

          <p>HealthLX is a partner-oriented solution that makes integration
          a differentiator by leveraging the following elements:</p>
          <div className="columns">
            <div className="column">
              <ul>
                <li> A seamless integration platform that includes a comprehensive range
                of data adapters needed to connect your systems to multiple message
                formats and enables the creation of composite applications that preserve
                and extend previous software investments</li>
                <li>A unified application framework that is built upon a globally recognized
                open source integration application suite</li>
                <li>An architecture that provides ease-of-use and enables rapid project
                completion</li>
                <li>A services-driven outsourced solution approach that allows end customers
                to focus on their business first, not integration challenges which
                require hard-to-find, competent and responsive technical staff.</li>
              </ul>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}
