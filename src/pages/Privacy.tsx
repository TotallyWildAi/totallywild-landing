import ScrollReveal from '../components/ScrollReveal'

// ============================================================
// Privacy Policy
//
// IMPORTANT — TEMPLATE STATUS:
// This document is a working draft prepared from research on the
// Australian Privacy Act 1988 (APPs), the NZ Privacy Act 2020 (IPPs),
// the EU GDPR, the Spam Act 2003 (Cth), the NZ UEMA 2007, the OAIC's
// October 2024 AI guidance, and standard B2B SaaS privacy practice.
// It is NOT legal advice and MUST be reviewed by an Australian
// privacy lawyer before being relied on for any commercial purpose.
// ============================================================

const COMPANY_LEGAL_NAME = 'TW AI Pty Ltd'
const COMPANY_TRADING_NAME = 'Totally Wild AI'
const COMPANY_ACN = '697 524 771'
const COMPANY_ABN = '70 697 524 771'
const COMPANY_ADDRESS = 'Brisbane, Queensland, Australia'
const CONTACT_PRIVACY = 'privacy@totallywild.ai'
const EFFECTIVE_DATE = '10 May 2026'
const VERSION = '1.0-draft'

export default function Privacy() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 headline-gradient"
            style={{ letterSpacing: '-1px', lineHeight: 1.15, paddingBottom: '0.1em' }}
          >
            Privacy Policy
          </h1>
          <p
            className="text-base mb-2"
            style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}
          >
            How we handle personal information at Totally Wild AI.
          </p>
          <p
            className="text-xs"
            style={{ color: 'var(--tw-text-tertiary)', letterSpacing: '0.02em' }}
          >
            Effective {EFFECTIVE_DATE} · Version {VERSION}
          </p>
        </div>
      </section>

      {/* TL;DR */}
      <ScrollReveal>
        <section className="px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'var(--tw-bg-secondary)',
                border: '0.5px solid var(--tw-border-primary)',
              }}
            >
              <h2
                className="text-sm font-semibold mb-4 uppercase"
                style={{ color: 'var(--tw-text-tertiary)', letterSpacing: '0.08em' }}
              >
                In plain language
              </h2>
              <ul
                className="space-y-3 text-base"
                style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}
              >
                <li>
                  <strong style={titleColorInline}>We collect what we need to provide the platform —</strong>{' '}
                  account info, session data, technical signals, and the content you upload.
                </li>
                <li>
                  <strong style={titleColorInline}>We don't sell your data, and we don't train on it.</strong>{' '}
                  We configure our LLM providers to disable training on your inputs.
                </li>
                <li>
                  <strong style={titleColorInline}>We're an Australian company with overseas sub-processors.</strong>{' '}
                  Application data is hosted in Sydney; LLM inference happens in the US. We list every
                  sub-processor and what they receive.
                </li>
                <li>
                  <strong style={titleColorInline}>Sensitive data is your call.</strong>{' '}
                  We don't ask for it and ask you not to paste it. If your prompts contain it, you
                  remain responsible for the legal basis.
                </li>
                <li>
                  <strong style={titleColorInline}>You have rights.</strong>{' '}
                  Access, correction, deletion, portability, complaint to the regulator. Detail below.
                </li>
                <li>
                  <strong style={titleColorInline}>Questions?</strong> Email <em>{CONTACT_PRIVACY}</em>.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <article className="px-6 pb-16">
        <div
          className="max-w-3xl mx-auto"
          style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.65 }}
        >
          <Section number="1" title="Who we are and what this policy covers">
            <p>
              {COMPANY_LEGAL_NAME} (ACN {COMPANY_ACN}, ABN {COMPANY_ABN}), trading as{' '}
              {COMPANY_TRADING_NAME}, with registered office in {COMPANY_ADDRESS}{' '}
              (<em>Totally Wild AI</em>, <em>we</em>, <em>us</em>), is the entity responsible for
              personal information handled in connection with{' '}
              <em>totallywild.ai</em>, the Totally Wild AI platform at{' '}
              <em>app.totallywild.ai</em>, and our related services (the <em>Service</em>).
            </p>
            <p>
              We are an "APP entity" under the <em>Privacy Act 1988</em> (Cth) and we comply
              with the Australian Privacy Principles (APPs). For New Zealand individuals, we
              comply with the <em>Privacy Act 2020</em> (NZ) and the Information Privacy
              Principles (IPPs). Where the GDPR or UK GDPR applies (for example, if you are
              based in the EU/UK), we comply with those laws too.
            </p>
            <p>
              In this policy:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                We act as a <strong style={titleColorInline}>data controller</strong> for personal
                information about website visitors, prospects, and Account holders.
              </li>
              <li>
                We act as a <strong style={titleColorInline}>data processor</strong> ("on behalf of
                a customer") for any personal information embedded in content a customer uploads
                into the platform. Our customer remains the controller and is primarily
                responsible for your rights as an end-user.
              </li>
            </ul>
            <p>
              This policy is freely available; alternative formats are available on request from{' '}
              <em>{CONTACT_PRIVACY}</em>.
            </p>
          </Section>

          <Section number="2" title="Personal information we collect">
            <p>We collect the following categories of personal information:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong style={titleColorInline}>Account information.</strong> Email address;
                password (stored only as a PBKDF2 hash, never in plain text); optional TOTP
                two-factor secret (stored encrypted); display name and role.
              </li>
              <li>
                <strong style={titleColorInline}>Session and authentication data.</strong> Refresh
                tokens (stored in Cloudflare D1 at the edge), login timestamps, device and
                user-agent metadata, and IP address at sign-in.
              </li>
              <li>
                <strong style={titleColorInline}>Technical / device data.</strong> IP address,
                browser type, operating system, language, referrer, and request logs (CloudWatch
                and Cloudflare edge logs).
              </li>
              <li>
                <strong style={titleColorInline}>Anti-bot signals.</strong> When you sign up or
                request a password reset, Cloudflare Turnstile processes your IP, TLS fingerprint,
                user-agent, and browser characteristics to score bot-likelihood. Turnstile does
                not use cookies and Cloudflare cannot directly identify you from these signals.
              </li>
              <li>
                <strong style={titleColorInline}>Customer-uploaded content.</strong> Business
                requirements documents, prompts, code, files, and any personal information embedded
                in them. We do not require you to submit personal information and ask you not to
                paste sensitive personal information unless your contract specifically authorises it.
              </li>
              <li>
                <strong style={titleColorInline}>AI-generated outputs.</strong> Architecture
                artefacts, generated code, conversation transcripts.
              </li>
              <li>
                <strong style={titleColorInline}>Billing data.</strong> A minimal billing contact
                (name, email, address). Card data is not stored by Totally Wild AI; it is handled
                by our payment processor.
              </li>
              <li>
                <strong style={titleColorInline}>Support communications.</strong> Emails, chat
                transcripts and any information you give us when you ask for help.
              </li>
              <li>
                <strong style={titleColorInline}>Marketing / website data.</strong> Aggregate page
                view data via Vercel Analytics (cookieless, hashed visitor IDs that auto-discard
                after 24 hours), and any newsletter sign-ups you initiate.
              </li>
            </ol>
            <p>
              <strong style={titleColorInline}>Sensitive information.</strong> We do not solicit
              and do not knowingly collect "sensitive information" within the meaning of section 6
              of the <em>Privacy Act 1988</em> (Cth) or "special category data" under Article 9 of
              the GDPR (health, racial or ethnic origin, religious belief, sexual orientation,
              criminal record, biometric or genetic information, etc.). See Section 14.
            </p>
          </Section>

          <Section number="3" title="How we collect personal information">
            <p>We collect personal information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong style={titleColorInline}>Directly from you</strong> when you sign up,
                upload content, contact us, or interact with our website;
              </li>
              <li>
                <strong style={titleColorInline}>Automatically</strong> when you use the Service —
                via cookies and local storage (session and refresh tokens, theme preference),
                server logs, Cloudflare edge logs, Vercel Analytics, and Cloudflare Turnstile on
                form submission;
              </li>
              <li>
                <strong style={titleColorInline}>From third parties</strong> — our payment
                processor (when you pay), any single-sign-on identity provider you choose to use
                in future, and content uploaded by our customers that contains personal
                information about third parties. For information collected indirectly through a
                customer, we rely on the customer's representation that they have lawful basis
                and authority to provide it.
              </li>
            </ul>
            <p>
              We collect by lawful and fair means and, where reasonably practicable, directly
              from you (APP 3.5–3.6, NZ IPP 2 and IPP 4).
            </p>
          </Section>

          <Section number="4" title="Why we collect it (purposes and lawful bases)">
            <p>
              We collect, use, and disclose personal information only for the purposes set out
              below. Where the GDPR applies, the lawful basis under Article 6 is shown in brackets.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Creating and authenticating your Account, and providing the Service{' '}
                <em>(Art. 6(1)(b) — contract)</em>.
              </li>
              <li>
                Processing customer-uploaded content through LLMs to produce architecture documents,
                code and project plans <em>(Art. 6(1)(b) — contract; we act as processor for
                third-party personal information embedded in content)</em>.
              </li>
              <li>
                Billing and collecting payments, and complying with tax and corporate-record
                obligations <em>(Art. 6(1)(b) and Art. 6(1)(c))</em>.
              </li>
              <li>
                Security, fraud prevention, abuse detection, and Turnstile bot scoring{' '}
                <em>(Art. 6(1)(f) — legitimate interests in protecting the Service and our
                customers)</em>.
              </li>
              <li>
                Service-related notifications including password reset, signup confirmation, and
                an internal new-signup notification to our admin@ inbox{' '}
                <em>(Art. 6(1)(b))</em>.
              </li>
              <li>
                Product improvement, debugging, and aggregated analytics <em>(Art. 6(1)(f))</em>.
              </li>
              <li>
                Marketing about similar products to existing business customers, with an opt-out
                <em> (Art. 6(1)(f) and APP 7 — consistent with reasonable expectations)</em>.
              </li>
              <li>
                Compliance with Australian, NZ, EU, UK or other law, including the Notifiable Data
                Breaches scheme and lawful disclosure under court orders <em>(Art. 6(1)(c))</em>.
              </li>
            </ul>
            <p>
              <strong style={titleColorInline}>No automated decisions of legal or significant effect.</strong>{' '}
              The Service generates outputs for our customer's review; we do not make automated
              decisions about you within the meaning of Article 22 of the GDPR or the new
              automated decision-making transparency rules introduced by the{' '}
              <em>Privacy and Other Legislation Amendment Act 2024</em> (Cth) (effective 10
              December 2026). If we ever start using personal information in such decisions, we
              will update this policy and seek any required consent.
            </p>
          </Section>

          <Section number="5" title="How we use it">
            <p>Day-to-day, we use personal information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>authenticate sessions via refresh tokens stored in Cloudflare D1;</li>
              <li>send service-critical email (password reset, security alerts, billing) via a Cloudflare Worker calling our email provider;</li>
              <li>send a new-signup notification to admin@totallywild.ai including your email address, IP and user-agent — this is internal operational use, not marketing;</li>
              <li>forward your prompt content to our LLM providers (currently Anthropic and OpenAI; possibly others as we evolve the Service) for output generation — see Section 8;</li>
              <li>store prompt and response logs for your audit and abuse-prevention purposes per the retention schedule in Section 11.</li>
            </ul>
          </Section>

          <Section number="6" title="Disclosure to third parties (sub-processors)">
            <p>
              We disclose personal information to a small number of carefully-vetted third
              parties (sub-processors) that help us deliver the Service. Our current
              sub-processors are:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '0.5px solid var(--tw-border-primary)' }}>
                    <th className="text-left p-2 font-semibold" style={titleColor}>Sub-processor</th>
                    <th className="text-left p-2 font-semibold" style={titleColor}>Service</th>
                    <th className="text-left p-2 font-semibold" style={titleColor}>Country</th>
                  </tr>
                </thead>
                <tbody>
                  <SubprocessorRow name="Amazon Web Services" service="Application hosting (ECS, RDS, S3, EFS, ElastiCache), CloudWatch logging" country="Australia (ap-southeast-2, Sydney)" />
                  <SubprocessorRow name="Cloudflare, Inc." service="CDN, WAF, DDoS protection, Workers, D1 (sessions), KV, Turnstile" country="Global edge network" />
                  <SubprocessorRow name="Anthropic, PBC" service="Claude LLM API for output generation" country="United States" />
                  <SubprocessorRow name="OpenAI, L.L.C." service="GPT API for output generation (where used)" country="United States" />
                  <SubprocessorRow name="Vercel, Inc." service="Marketing site hosting and cookieless analytics" country="United States" />
                  <SubprocessorRow name="Email service provider" service="Transactional + notification email" country="United States / Australia" />
                  <SubprocessorRow name="Payment processor" service="Subscription billing" country="United States / Australia" />
                </tbody>
              </table>
            </div>
            <p>
              The current and authoritative list lives at{' '}
              <em>totallywild.ai/subprocessors</em>. We will give reasonable advance notice of any
              new or changed sub-processor (typically 30 days where practicable).
            </p>
            <p>
              We may also disclose personal information to: (a) our staff and contractors bound by
              confidentiality; (b) our professional advisers (legal, accounting, audit); (c)
              regulators, law-enforcement and courts where required by law; and (d) a successor in
              connection with a merger, acquisition or restructure (subject to confidentiality
              obligations).
            </p>
          </Section>

          <Section number="7" title="Cross-border transfers">
            <p>
              Application data is primarily hosted in AWS ap-southeast-2 (Sydney). Some
              processing — particularly LLM inference — happens in the United States or other
              regions where our sub-processors operate. We are accountable under APP 8 for the
              way overseas recipients handle personal information disclosed to them and require
              each sub-processor by contract to handle personal information to a standard at
              least as protective as this policy.
            </p>
            <p>
              <strong style={titleColorInline}>For EU and UK individuals.</strong> We transfer
              personal information out of the EEA / UK on the basis of: (a) the EU–US Data
              Privacy Framework and the UK extension thereto where the recipient is certified;
              and (b) the European Commission's Standard Contractual Clauses (with a Transfer
              Impact Assessment) or the UK International Data Transfer Addendum where it is
              not. Copies of the SCCs / IDTA are available on request.
            </p>
            <p>
              <strong style={titleColorInline}>For NZ individuals.</strong> We disclose personal
              information to overseas recipients on the basis of contractual safeguards
              equivalent to those required by IPP 12 and the NZ Privacy Commissioner's IPP 12
              model clauses.
            </p>
          </Section>

          <Section number="8" title="AI processing of your content">
            <p>
              The Service routes your prompts to large language models hosted by Anthropic and
              OpenAI (and, in future, possibly other providers). The following commitments apply.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong style={titleColorInline}>We do not train on your data.</strong> We do not
                use your inputs, outputs or other Customer Data to train, fine-tune or evaluate
                any AI model, ours or anyone else's.
              </li>
              <li>
                <strong style={titleColorInline}>We disable provider training on your data.</strong>{' '}
                We configure our calls to upstream providers to opt out of training on customer
                data where that setting is supported. Anthropic's commercial-tier policy at{' '}
                <em>privacy.claude.com</em> states that, by default, inputs and outputs from
                commercial products are not used to train Anthropic's models. OpenAI's API policy
                at <em>openai.com/enterprise-privacy</em> states that API data is not used for
                model training and that abuse-monitoring logs (where retained) are kept for at
                most 30 days, with zero-retention available for eligible enterprise customers.
              </li>
              <li>
                <strong style={titleColorInline}>Abuse-monitoring residual.</strong> Even with
                training opt-outs, providers may retain prompts and outputs briefly to detect
                policy violations. The Anthropic and OpenAI retention windows are documented in
                their privacy policies; we link to the current versions on our sub-processor page.
              </li>
              <li>
                <strong style={titleColorInline}>Sensitive data warning.</strong> Do not paste
                credentials, government identifiers, payment card numbers, health information, or
                other sensitive personal information into prompts unless your contract with us
                specifically authorises it.
              </li>
              <li>
                <strong style={titleColorInline}>Internal logs.</strong> We retain prompts and
                outputs within our own systems for the customer's audit trail and abuse-prevention
                purposes per the retention schedule in Section 11.
              </li>
              <li>
                <strong style={titleColorInline}>Outputs are AI-generated.</strong> They may be
                inaccurate, incomplete, or contain hallucinations. They are generated for your
                review and are not professional advice and not automated decisions about any
                individual.
              </li>
            </ul>
            <p>
              We have read and consider this policy aligned with the OAIC's October 2024{' '}
              <em>Guidance on privacy and the use of commercially available AI products</em>.
            </p>
          </Section>

          <Section number="9" title="Cookies, local storage and analytics">
            <p>The Service and marketing site use the following:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong style={titleColorInline}>Strictly necessary cookies and storage:</strong>{' '}
                session cookies, refresh-token storage in localStorage, theme preference. These
                cannot be disabled without breaking sign-in.
              </li>
              <li>
                <strong style={titleColorInline}>Cloudflare Turnstile:</strong> processes IP, TLS
                fingerprint, user-agent and browser characteristics for bot scoring. Turnstile
                does not use cookies and is not used for advertising or cross-site tracking.
              </li>
              <li>
                <strong style={titleColorInline}>Vercel Analytics:</strong> aggregate page-view
                tracking on the marketing site. Cookieless. Visitor IDs are hashed and discarded
                after 24 hours; no cross-site profiles are built.
              </li>
            </ul>
            <p>
              For visitors from the EU / UK, we will display a consent banner where required and
              honour withdrawal of consent. You can also clear cookies and local storage at any
              time via your browser controls.
            </p>
          </Section>

          <Section number="10" title="Data security">
            <p>
              We take reasonable steps to protect personal information from misuse, interference,
              loss, unauthorised access, modification, and disclosure (APP 11.1, NZ IPP 5,
              GDPR Art. 32). Our controls include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>encryption in transit (TLS 1.2+) and at rest (AWS-managed KMS, RDS, S3 and EFS encryption);</li>
              <li>passwords stored as PBKDF2 hashes only; TOTP secrets stored encrypted; refresh tokens stored in Cloudflare D1 with restricted access;</li>
              <li>VPC isolation in AWS ap-southeast-2; least-privilege IAM; secrets in AWS Secrets Manager; access logging via CloudWatch;</li>
              <li>Cloudflare WAF, DDoS protection, and Turnstile in front of the application;</li>
              <li>internal access controls, staff multi-factor authentication, principle of least privilege, and a secure software-development lifecycle;</li>
              <li>contractual security commitments from our sub-processors;</li>
              <li>an incident-response process aligned with the AU Notifiable Data Breaches scheme (Pt IIIC of the Privacy Act), the NZ Privacy Act 2020 Pt 6 notifiable privacy breach regime, and GDPR Articles 33–34.</li>
            </ul>
            <p>
              No system is fully secure. If we believe a breach is likely to result in serious
              harm or notifiable harm under the applicable law, we will notify the relevant
              regulator and affected individuals within the timeframes those laws require.
            </p>
          </Section>

          <Section number="11" title="How long we keep it">
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong style={titleColorInline}>Account data:</strong> while your Account is
                active and for thirty (30) days afterwards (to support restoration), then deleted
                or de-identified — except where retained for legal, audit or tax reasons.
              </li>
              <li>
                <strong style={titleColorInline}>Refresh tokens / sessions:</strong> rotated
                regularly, revoked on logout or password change, and deleted on session expiry.
              </li>
              <li>
                <strong style={titleColorInline}>Customer-uploaded content and prompt logs:</strong>{' '}
                retained for the duration of your subscription (or any longer period set out in
                your contract). You may request earlier deletion via the platform or by emailing{' '}
                <em>{CONTACT_PRIVACY}</em>.
              </li>
              <li>
                <strong style={titleColorInline}>Server / edge logs:</strong> 30–90 days for
                operational logs; longer for security-investigation logs where justified.
              </li>
              <li>
                <strong style={titleColorInline}>LLM-provider abuse-monitoring:</strong> as set by
                the provider — typically up to 30 days at OpenAI without zero-retention; per
                Anthropic's published retention policy.
              </li>
              <li>
                <strong style={titleColorInline}>Billing records:</strong> retained for the period
                required by Australian tax and corporations law (typically seven (7) years).
              </li>
              <li>
                <strong style={titleColorInline}>Marketing / suppression list:</strong> we
                maintain a suppression list of unsubscribed addresses indefinitely so we can
                continue to honour the unsubscribe.
              </li>
              <li>
                <strong style={titleColorInline}>Backups:</strong> rolling, overwritten on a
                cycle of up to ninety (90) days.
              </li>
            </ul>
          </Section>

          <Section number="12" title="Your privacy rights">
            <h3 className="text-lg font-semibold mt-4 mb-2" style={titleColor}>
              (a) Australia (APPs 12 and 13)
            </h3>
            <p>
              You have the right to access personal information we hold about you and to seek
              correction. We will respond within a reasonable time (the OAIC views thirty (30)
              calendar days as a reasonable benchmark). Limited grounds for refusal apply under
              APP 12 (for example, where access would have an unreasonable impact on the privacy
              of others); we will explain any refusal in writing.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2" style={titleColor}>
              (b) New Zealand (IPPs 6 and 7)
            </h3>
            <p>
              You have the right to access and correct personal information; we will respond
              within twenty (20) working days as required by the <em>Privacy Act 2020</em> (NZ).
              If we decline correction, you may attach a statement of correction sought.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2" style={titleColor}>
              (c) EU / EEA / UK (GDPR and UK GDPR)
            </h3>
            <p>You have the rights of:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>access (Art. 15) and rectification (Art. 16);</li>
              <li>erasure (Art. 17);</li>
              <li>restriction of processing (Art. 18);</li>
              <li>data portability for processing based on consent or contract (Art. 20);</li>
              <li>objection to processing based on legitimate interests or direct marketing (Art. 21);</li>
              <li>withdrawing consent at any time, without affecting the lawfulness of prior processing (Art. 7(3));</li>
              <li>not being subject to fully automated decisions producing legal or similarly significant effects (Art. 22) — see Section 4.</li>
            </ul>
            <p>
              We will respond within one month and may extend by up to two further months for
              complex requests, with notice.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2" style={titleColor}>
              (d) End-users of our customers
            </h3>
            <p>
              If your data is in content uploaded by one of our customers, that customer is
              primarily responsible for your rights as a data controller. Direct your requests to
              them and we will assist them in our role as processor.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2" style={titleColor}>How to exercise</h3>
            <p>
              Email <em>{CONTACT_PRIVACY}</em> with reasonable verification of identity. We will
              not charge for routine requests.
            </p>
          </Section>

          <Section number="13" title="Marketing communications">
            <p>
              We send commercial marketing only to people who have signed up, are existing
              business customers, or have a publicly published business address that indicates
              the role we are contacting them in. Every commercial email includes our legal
              entity name, ABN {COMPANY_ABN}, our registered address, and a one-click unsubscribe
              link.
            </p>
            <p>
              In the AU, we comply with the <em>Spam Act 2003</em> (Cth); unsubscribe takes effect
              within five (5) business days. In NZ, we comply with the{' '}
              <em>Unsolicited Electronic Messages Act 2007</em>; unsubscribe takes effect within
              five (5) working days. Once you unsubscribe, we add you to a suppression list and
              will not re-add you without your express consent.
            </p>
            <p>
              <strong style={titleColorInline}>Service / transactional messages</strong> (password
              reset, billing, security alerts, signup notifications to admin@) are not marketing
              and continue while your Account is active.
            </p>
          </Section>

          <Section number="14" title="Sensitive information">
            <p>
              We do not solicit and do not knowingly require sensitive information. Please do not
              paste sensitive personal information into prompts unless your contract with us
              specifically authorises it. If your customer-uploaded content nonetheless contains
              sensitive information, we process it strictly as a processor on the customer's
              instructions and under the same security and sub-processor controls described in
              this policy. The customer is responsible for ensuring an Article 9 GDPR / APP 3
              lawful basis exists for that information.
            </p>
          </Section>

          <Section number="15" title="Children">
            <p>
              The Service is a B2B platform intended for individuals aged sixteen (16) and over
              acting in a business capacity. It is not directed to children. We do not knowingly
              collect personal information from children under sixteen. If you believe a child
              has signed up, contact <em>{CONTACT_PRIVACY}</em> and we will delete the Account
              and any personal information we have collected.
            </p>
          </Section>

          <Section number="16" title="Complaints">
            <p>
              If you believe we have mishandled your personal information, please email{' '}
              <em>{CONTACT_PRIVACY}</em> first so we can investigate and respond. We will
              acknowledge within five (5) business days and aim to substantively respond within
              thirty (30) days.
            </p>
            <p>If you remain dissatisfied, you may complain to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong style={titleColorInline}>Australia</strong> — Office of the Australian
                Information Commissioner (OAIC), <em>oaic.gov.au</em>, 1300 363 992.
              </li>
              <li>
                <strong style={titleColorInline}>New Zealand</strong> — Office of the Privacy
                Commissioner, <em>privacy.org.nz</em>, 0800 803 909.
              </li>
              <li>
                <strong style={titleColorInline}>EU / EEA</strong> — the supervisory authority
                of your habitual residence, place of work, or place of the alleged infringement
                (a directory is at <em>edpb.europa.eu</em>).
              </li>
              <li>
                <strong style={titleColorInline}>UK</strong> — Information Commissioner's Office
                (ICO), <em>ico.org.uk</em>.
              </li>
            </ul>
          </Section>

          <Section number="17" title="Contact">
            <p>
              All privacy-related contact: <em>{CONTACT_PRIVACY}</em>.<br />
              Postal address: {COMPANY_LEGAL_NAME} (ACN {COMPANY_ACN}) trading as{' '}
              {COMPANY_TRADING_NAME}, {COMPANY_ADDRESS}.
            </p>
          </Section>

          <Section number="18" title="Changes to this policy">
            <p>
              We may update this policy from time to time. Material changes will be communicated
              by email to Account holders and an in-product banner ahead of the effective date.
              Non-material changes (clarifications, formatting, sub-processor list updates) will
              be reflected in a versioned changelog at the bottom of the policy.
            </p>
          </Section>
        </div>
      </article>
    </>
  )
}

// ── helpers ─────────────────────────────────────────────────

const titleColor = { color: 'var(--tw-text-primary)' as const }
const titleColorInline = { color: 'var(--tw-text-primary)' as const }

function Section({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12">
      <h2
        className="text-2xl font-semibold mb-4"
        style={{ color: 'var(--tw-text-primary)', letterSpacing: '-0.3px' }}
      >
        <span style={{ color: 'var(--tw-text-tertiary)' }}>{number}.</span> {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

function SubprocessorRow({
  name,
  service,
  country,
}: {
  name: string
  service: string
  country: string
}) {
  return (
    <tr style={{ borderBottom: '0.5px solid var(--tw-border-primary)' }}>
      <td className="p-2 align-top" style={{ color: 'var(--tw-text-primary)' }}>{name}</td>
      <td className="p-2 align-top">{service}</td>
      <td className="p-2 align-top">{country}</td>
    </tr>
  )
}
