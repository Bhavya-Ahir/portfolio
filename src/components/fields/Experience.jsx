import React from "react";
import ExperienceCard from "../utils/ExperienceCard";

const Experience = () => {
  return (
    <div
      id="experience"
      className="p-[50px] md:pt-[100px] md:pl-[100px] md:pr-[50px]"
    >
      <h2
        id="experience-title"
        class="font-bold uppercase pb-[20px] text-[#01e2c7]"
      >
        Experience
      </h2>

      <ExperienceCard
        timeline="June 2024 - Present"
        role="Software Engineer Intern"
        name="LexisNexis"
        description={[
          <>
          Developed an IntelliJ plugin with embedded Python scripts that automated the migration of Eclipse-based Ant projects to
          IntelliJ. Adopted by 5 teams, this tool facilitated a seamless transition and enhanced development efficiency.
          </>,
          <>
          Automating the conversion of {" "}<span className="font-medium text-slate-200">Ant</span>{" "}
          -based projects to{" "}
            <span className="font-medium text-slate-200">
            Gradle 
            </span>{" "}using Python scripts, enabling the migration of over 75
          repositories from Ant to Gradle; streamlining the build process and enhancing project maintainability.
          </>,
          <>
          Developing Python scripts to generate comparison reports and metrics for citation recognition using Regex versus NLP
          methods, facilitating evaluation for a potential transition to NLP-based approach for improved accuracy.
          </>
        ]}
        skills={[
          "Python",
          "Java",
          "XML",
          "Ant",
          "Gradle"
        ]}
        link="https://www.lexisnexis.com/en-us"
      />

      <ExperienceCard
        timeline="Dec 2023 - Current"
        role="Software Engineer"
        name="Moise A. Khayrallah Center (NCSU)"
        description={[
          <>
          Actively migrating compute and storage resources from AWS to Jetstream2 (NSF-funded cloud platform) using {" "}<span className="font-medium text-slate-200">Bash</span>{" "}
          scripts and {" "}<span className="font-medium text-slate-200">AWS CLI</span>, optimizing resource allocation and reducing operational costs.
          </>,
          <>
          Improved search experience by implementing a search term autocomplete feature using {" "}<span className="font-medium text-slate-200">Elasticsearch</span>{" "} Completion
          Suggester; in the process migrating and tokenizing 22 GB of documents with the Bulk API and Scroll method.
          </>,
          <>
          Optimized document processing using a producer-consumer model with {" "}<span className="font-medium text-slate-200">Celery</span>{" "} and <span className="font-medium text-slate-200">Redis</span>, chunking tasks for
          asynchronous execution by workers; reduced processing time per 180-page document from 30 to 10 minutes.
          </>,
          <>
          Leveraged AWS services, including <span className="font-medium text-slate-200">RDS</span> for PostgreSQL, <span className="font-medium text-slate-200">OpenSearch</span> for search, analytics, and text autocomplete, and
          {" "}<span className="font-medium text-slate-200">S3</span> for document storage, to enhance infrastructure scalability and reliability.
          </>
        ]}
        skills={[
          "ElasticSearch",
          "FastAPI",
          "PostgreSQL",
          "RESTful API Web Services",
          "Celery",
          "AWS",
          "Redis"
        ]}
        link="https://arabicsearch.org/home"
      />

      <ExperienceCard
        timeline="July 2021 - July 2023"
        role="Software Engineer"
        name="JPMorgan Chase & Co."
        description={[
          <>
          Engineered a Notional Calculation service using JPMC’s Athena framework (Python-based), integrating market data APIs
          for real-time pricing; streamlined calculations across 7 systems, processing notional values for∼500,000 trades daily.
          </>,
          <>
          Decoupled regulatory assessment from trade booking using an <span className="font-bold text-teal-300">event-driven architecture</span> with <span className="font-medium text-slate-200">Apache Kafka</span>,
          eliminating single points of failure and reducing time-outs, boosting trade booking efficiency.
            {/* <span className="font-bold text-teal-300">80%</span>. */}
          </>,
          <>
          Developed ”Smart Reg,” a scalable regulatory reporting framework processing∼1.5 million trade events daily, fetched
          from <span className="font-bold text-teal-300">Hydra</span> (NoSQL database). Implemented a configurable React.js frontend and automated report delivery via
          {" "}<span className="font-medium text-slate-200">SFTP</span>, enabling rapid onboarding of new reports.
          </>,
          <>
          Refactored ”Can I Transact” client code for improved modularity and implemented non-persistent, session-based TTL
          (Time-to-Live) caching during trade booking for CIT checks, reducing processing time and enhancing system performance.
          </>,
        ]}
        skills={[
          "Python",
          "Optimization",
          "Unit/Integration Testing",
          "Test Driven Development",
          "Equity Derivatives",
          "Equity Trading",
        ]}
      />

      <ExperienceCard
        timeline="Jan 2021 - July 2021"
        role="Software Engineer Intern"
        name="JPMorgan Chase & Co."
        description={[
          <>
          Developed a <span className="font-bold text-teal-300">RESTful API</span> for pre-trade booking checks, effectively blocking OFAC-sanctioned trades based on
          underlying instruments to enhance regulatory compliance. Implemented a React frontend for managing temporary block
          overrides in exceptional cases, streamlining exception handling and improving operational efficiency.
          </>,
        ]}
        skills={["Python", "RESTful API Web Services"]}
      />
    </div>
  );
};

export default Experience;
