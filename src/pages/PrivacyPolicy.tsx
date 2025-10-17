import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Bradford Informed Guidance privacy policy explaining how we collect, use, and protect your personal information when using our insurance services."
        path="/privacy-policy"
      />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 mb-6">
              <strong>Effective Date:</strong> October 17, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-700 mb-4">
                Bradford Informed Guidance ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our insurance brokerage services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4 text-slate-700">
                <li>Name, address, phone number, and email address</li>
                <li>Date of birth and Social Security number (when required for insurance applications)</li>
                <li>Health information (as necessary for health insurance quotes)</li>
                <li>Financial information (income, employment details for underwriting purposes)</li>
                <li>Insurance history and coverage preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-4 text-slate-700">
                <li>Provide insurance quotes and coverage recommendations</li>
                <li>Process insurance applications and manage policies</li>
                <li>Communicate with you about your insurance needs</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-slate-700 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-700">
                <li><strong>Insurance Carriers:</strong> To obtain quotes and process applications</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist with our operations</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Partners:</strong> Including Best Insurance Group for carrier access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
              <p className="text-slate-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
              <p className="text-slate-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-slate-700">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies and Tracking</h2>
              <p className="text-slate-700 mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, 
                analyze site traffic, and understand user preferences. You can control cookie settings through 
                your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
              <p className="text-slate-700 mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
              <p className="text-slate-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new policy on this page and updating the effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-slate-700"><strong>Bradford Informed Guidance</strong></p>
                <p className="text-slate-700">Zachary Bradford, Licensed Insurance Broker</p>
                <p className="text-slate-700">Email: zbradford@bradfordinformedguidance.com</p>
                <p className="text-slate-700">Phone: (689) 325-6570</p>
                <p className="text-slate-700 mt-4">
                  <strong>National Producer Number (NPN):</strong> 19164408
                </p>
                <p className="text-slate-700">
                  <strong>Licensed States:</strong> Florida, Michigan, North Carolina, Arizona, Texas, Georgia
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}