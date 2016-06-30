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
import Callout from 'components/Callout';
import Section from 'components/Section';
import UnorderedList from 'components/UnorderedList';

import Web from './callout.jpg';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Banner
          centerHighlight="A Revolutionary Healthcare Solution"
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
          dark
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
          <br />

          <UnorderedList>
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
          </UnorderedList>
          <br />

          <p>This approach to the market enables us to build pathways to allow patient
          data to be consumed by applications that can change healthcare for the better.
          We offer the following platform:</p>
          <br />

          <UnorderedList>
            <li>Software Platform → HealthLX integration Engine</li>
            <li>API Connectors → HealthLX Community Connectors</li>
            <li>Integration Applications → HealthLX CCD Viewer</li>
            <li>Implementation Services → HealthLX Professional Services</li>
            <li>Data Management Services → HealthLX DMS</li>
          </UnorderedList>
        </Section>
        <Callout
          text="What would you do if your healthcare systems could communicate?"
          src={Web}
        />
        <Section
          title="Why This Matters"
        >
          <p>The U.S. healthcare system is at an inflection point. Driven by years
          of investments in EHR systems, healthcare organizations today have large
          and growing repositories of data with limited means to share that information.
          It’s as if up until now, all this work to collect data was made to be stored
          only - instead of being shared.</p>
          <br />

          <p>Healthcare continues to evolve and innovate with new and emerging clinical,
          administrative, patient and member engagement, and analytics solutions.
          Optimizing these solutions requires data that is stored in EHRs,
          HIEs and other locations where patient data exists. Today, healthcare is
          a landscape of different languages each well-intentioned but lacking in
          the ability to translate messages between themselves.</p>
          <br />

          <p>Beyond data access, data security, speed, and auditability are also vitally
          important to a healthcare environment that is interoperable.</p>
          <br />

          <p>In summary, few proven capabilities and best practices exist today to manage
          the creation of system-to-system connections and the transactions and data that
          flow between them built upon</p>
          <br />

          <p>HealthLX was created to bridge this gap, and to provide healthcare solutions
          firms and integrators the ability to bring greater integration depth and
          differentiation to their clients, ultimately benefiting the entire healthcare
          ecosystem.</p>
        </Section>
        <Section
          dark
          title="Our Committment to Interoperability"
        >
          <p>We partner with healthcare application entities that are focused on revolutionizing
          healthcare. Working with these partners, we are building out the needed connectors to
          address the needs of modern healthcare integration challenges.</p>
          <br />

          <p>We closely monitor the changing world of integration standards being established
          by our colleagues at these organizations</p>
          <br />

          <UnorderedList>
            <li>HL7.org and their FHIR initiatives</li>
            <li>Office of National Coordination (ONC)</li>
            <li>Workgroup for Electronic Data Interchange (WEDI)</li>
            <li>Commercial innvators such as @Redoxengine</li>
            <li>Existing interoperable standards such as ‘DirectConnect’ and ‘BlueButton’</li>
            <li>Standards bodies such as Commonwell, The Sequoia Project and The #CareQuality inititiatives</li>
          </UnorderedList>
          <br />

          <p>We then incorporate the best approaches necessary to support the application community
          delivering solutions to end customers whether they are providers, payers or patients.
          We believe we should build, support and maintain the best available solution approach
          available in the marketplace. We’re not narrowly invested in limiting technologies but
          instead embrace the contributions of the technical communities striving to solve the
          challenges in the marketplace.</p>
          <br />

        </Section>
        <Section
          highlight
          title="What We Can Accomplish Together"
          subtitle="Make integration a differentiator for your solution"
        >
          <p>Competitive advantage is harder and harder to create. Working together we can make
          integration excellence a differentiator for you and your solution in the marketplace in
          the following ways:</p>
          <br />

          <UnorderedList>
            <li>Introduce integration early in the sales cycle</li>
            <li>A more deeply integrated solution is more valuable to your client and stickier for you</li>
          </UnorderedList>
          <br />

          <p>Deliver integration leadership and solution excellence to your clients without
          making the internal investments or expert hires. We offer two ways to partner
          together with healthcare solutions firms and integrators:</p>
          <br />

          <UnorderedList>
            <li>An OEM program that allows you to brand and resell the full HealthLX solution spectrum</li>
            <li>An outsourcing program that allows you to sell a fully outsourced HealthLX solution.</li>
          </UnorderedList>
          <br />

          <p>We’ve developed a partnering framework to collaborate with you to build an
          interoperability solution and partnering infrastructure, and to work as partners
          in meeting your client interoperability needs.</p>
          <br />

          <p>We look forward to learning more about your specific needs and capabilities
          and developing a solution model that is right for your and your clients.</p>
          <br />
        </Section>
        <Section
          dark
          title="About Us"
        >
          <p>HealthLX was created in collaboration with partners of our parent company, TESCHGlobal.
          Building on the expertise of a globally recognized consulting organization and successes
          on multiple projects within the healthcare space, our collaborating on a more advanced
          solution to interoperability was both timely and inevitable.</p>
          <br />

          <p>We focus our efforts on the need in the healthcare marketplace that exists on
          the edge of provider applications and payor software solutions. A space that healthcare
          solutions firms have difficulty reaching.</p>
          <br />

          <p>Today, we believe that our merger of best-in-class enterprise integration software,
          experienced healthcare subject matter expertise and best practices disciplines for enterprise
          integration can uniquely lead you and your organization to make integration a differentiator
          for you and your clients.</p>
          <br />
        </Section>

        <Section
          title="News"
        >
          <p>No news is good news</p>
        </Section>
      </div>
    );
  }
}
