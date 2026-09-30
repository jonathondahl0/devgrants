import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Filecoin Grants</h1>
      
      <p>
        Welcome to the Filecoin Grant Platform! The Filecoin Grant Platform connects grant makers 
        with builders and researchers in the Filecoin community. Whether you represent a foundation 
        that wants to move the space forward, a company looking to accelerate development on the 
        features your application needs, or a dev team itching to hack on Filecoin tools, you've 
        come to the right place. Take a look at the supported grant types and available opportunities below.
      </p>

      <h2>Grant Types</h2>

      <hr />

      <h3>Next Step Microgrants</h3>
      <p>
        Grants of $5,000 in FIL are available to support taking the <em>next step</em> after you 
        have created an initial prototype with Filecoin. These grants are intended for independent 
        developers, small studios, non-profits, activists, and researchers. Applicants may be working 
        independently, or as part of a course or hackathon. The microgrants are intended for early 
        stage projects. If your project has already received more than $30,000 USD from any source, 
        please apply for an open grant (details below) rather than a microgrant.
      </p>
      <p>
        Acceptance criteria are very simple, and work is expected to be complete within 2 months. 
        Adoption Microgrants are funded by Protocol Labs.
      </p>

      <hr />

      <h3>Open Grant</h3>
      <p>
        Do you have an idea for pushing the Filecoin ecosystem forward? Grants of up to $30,000 
        are available to support novel ideas that advance the Filecoin ecosystem, bring significant 
        new usage, or directly advance the Filecoin mission statement.
      </p>

      <hr />

      <h3>Requests for Proposals (RFPs)</h3>
      <p>
        RFPs are grants for specific development work. As the name suggests, we are requesting 
        proposals from teams that want to complete the work specified in each RFP. In these grants, 
        we generally have clearly scoped deliverables, milestones, and funding limits. Some RFPs 
        will ask you to propose your own milestones and funding needs. While there is some flexibility 
        in RFP deliverables, we expect teams will deliver what is in scope in the RFP.
      </p>

      <hr />

      <h3>Don't see your grant type?</h3>
      <p>
        Is your organization interested in offering a grant that doesn't fit into any of the above 
        categories? Email us directly at grants@filecoin.org with your idea.
      </p>

      <footer style={{ marginTop: '4rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
        <p>
          <small>
            For full documentation, please visit the{' '}
            <a href="https://github.com/filecoin-project/devgrants" target="_blank" rel="noopener noreferrer">
              GitHub repository
            </a>
          </small>
        </p>
      </footer>
    </main>
  );
}
