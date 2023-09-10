<script>
	import DocPage from '$lib/components/Doc_Page.svelte';

	let title = 'Privacy Policy';
	let text = `
	<div class="page">
  <div class="header">
    <div class="container">
      <p class="title">Privacy Policy for Bauhaus Research</p>
    </div>
  </div>
  <div class="translations-content-container">
    <div class="container">
      <div class="tab-content translations-content-item en visible" id="en">

        <p>Your privacy is important to us. It is Bauhaus Research's policy to respect your privacy regarding any information we may collect from you across our website, streetfoodservices.us, and other sites we own and operate.</p>

        <h2>Information We Collect</h2>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Contact Information (e.g., name, email address, phone number)</li>
          <li>Location Information (e.g., IP address)</li>
          <li>Usage and Analytics Data (e.g., how you interact with our website)</li>
          <!-- Add more categories as needed -->
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Respond to your requests, comments, or questions</li>
          <li>Send you promotional and marketing materials</li>
          <!-- Add more purposes as needed -->
        </ul>

        <!-- Include the rest of your privacy policy content here -->

        <h2>Security</h2>
        <p>We value your trust in providing us your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

        <h2>Links to Other Sites</h2>
        <p>Our website may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us:</p>
        <ul>
          <li>
            <p>
              By email: ryan@bauhausresearch.com
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>`;
	let updated = 'August 2, 2023';
</script>

<DocPage {title} {updated} {text} />
