<script>
	import DocPage from '$lib/components/Doc_Page.svelte';
	let text = `
<div class="translations-content-container">
    <div class="container">
      <div class="tab-content translations-content-item en visible" id="en">
        <p>Please read these terms and conditions carefully before using Our Service.</p>

        <h1>Interpretation and Definitions</h1>
        <h2>Interpretation</h2>
        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

        <h2>Definitions</h2>
        <p>For the purposes of these Terms and Conditions:</p>
        <ul>
          <li>
            <p>
              <strong>Affiliate</strong>
              means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
            </p>
          </li>
          <!-- Add more definitions as needed -->
        </ul>

        <!-- Include the rest of your terms and conditions content here -->

        <h1>Links to Other Websites</h1>
        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
        <!-- Include additional sections -->

        <h1>Termination</h1>
        <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
        <!-- Include additional sections -->

        <h1>Limitation of Liability</h1>
        <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
        <!-- Include additional sections -->

        <h1>"AS IS" and "AS AVAILABLE" Disclaimer</h1>
        <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error-free or that any errors or defects can or will be corrected.
        </p>
        <!-- Include additional sections -->

        <h1>Governing Law</h1>
        <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
        <!-- Include additional sections -->

        <h1>Contact Us</h1>
        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
        <ul>
          <li>
            <p>
              By email: ryan@bauhausresearch.com
            </p>
          </li>
        </ul>
        <!-- Include additional sections -->
      </div>
    </div>
  </div>
</div>`;

	let title = `Terms of Use`;
	let updated = `July 22, 2023`;
</script>

<DocPage {title} {updated} {text} />
