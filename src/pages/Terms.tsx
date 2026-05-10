import ScrollReveal from '../components/ScrollReveal'

// ============================================================
// Terms of Service
//
// IMPORTANT — TEMPLATE STATUS:
// This document is a working draft prepared from research on the AU
// Australian Consumer Law (Sch 2 to the Competition and Consumer Act
// 2010 (Cth)), the NZ Consumer Guarantees Act 1993 + Fair Trading Act
// 1986, the OAIC's AI guidance, and standard B2B SaaS terms used by
// Anthropic, OpenAI, Stripe and others. It is NOT legal advice and
// MUST be reviewed by an Australian commercial lawyer (and a NZ-
// qualified lawyer for cross-border B2B coverage) before being relied
// on for any commercial transaction.
// ============================================================

const COMPANY_LEGAL_NAME = 'TW AI Pty Ltd'
const COMPANY_TRADING_NAME = 'Totally Wild AI'
const COMPANY_ACN = '697 524 771'
const COMPANY_ABN = '70 697 524 771'
const COMPANY_ADDRESS = 'Brisbane, Queensland, Australia'
const CONTACT_LEGAL = 'legal@totallywild.ai'
const CONTACT_PRIVACY = 'privacy@totallywild.ai'
const EFFECTIVE_DATE = '10 May 2026'
const VERSION = '1.0-draft'

export default function Terms() {
  return (
    <>
      {/* Draft / review banner */}
      <div
        role="note"
        className="px-6 py-3 text-center text-sm border-b"
        style={{
          background: 'color-mix(in srgb, #FFB300 18%, var(--tw-bg-primary))',
          borderColor: 'color-mix(in srgb, #FFB300 35%, var(--tw-border-primary))',
          color: 'var(--tw-text-primary)',
        }}
      >
        <strong>Draft for legal review.</strong> This document is a research-grade
        template and has not yet been reviewed by an Australian or New Zealand
        commercial lawyer. Do not rely on it as final terms.
      </div>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 headline-gradient"
            style={{ letterSpacing: '-1px', lineHeight: 1.15, paddingBottom: '0.1em' }}
          >
            Terms of Service
          </h1>
          <p
            className="text-base mb-2"
            style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.55 }}
          >
            These Terms govern your use of the Totally Wild AI platform.
          </p>
          <p
            className="text-xs"
            style={{ color: 'var(--tw-text-tertiary)', letterSpacing: '0.02em' }}
          >
            Effective {EFFECTIVE_DATE} · Version {VERSION}
          </p>
        </div>
      </section>

      {/* TL;DR card */}
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
                  <strong style={{ color: 'var(--tw-text-primary)' }}>You own what you build.</strong>{' '}
                  Anything our agents generate from your prompts belongs to you.
                </li>
                <li>
                  <strong style={{ color: 'var(--tw-text-primary)' }}>We don't train on your data.</strong>{' '}
                  Your inputs and outputs are not used to train our models or those of our LLM
                  providers, and we configure their APIs to enforce that.
                </li>
                <li>
                  <strong style={{ color: 'var(--tw-text-primary)' }}>The platform stays ours.</strong>{' '}
                  The agents, prompts, scaffolding, and patterns library are our property; you
                  get a perpetual licence to use them as embedded in your outputs.
                </li>
                <li>
                  <strong style={{ color: 'var(--tw-text-primary)' }}>AI output isn't perfect.</strong>{' '}
                  Models hallucinate, generated code can have bugs, and outputs aren't legal,
                  financial, medical, or regulatory advice. Review before relying on them.
                </li>
                <li>
                  <strong style={{ color: 'var(--tw-text-primary)' }}>Your compliance is your responsibility.</strong>{' '}
                  If you operate under an AFSL, Australian Credit Licence, FMA licence, APRA
                  authorisation or similar, you remain accountable for meeting those obligations.
                </li>
                <li>
                  <strong style={{ color: 'var(--tw-text-primary)' }}>Australian law governs.</strong>{' '}
                  Queensland is the seat of jurisdiction. Mandatory consumer law protections still apply.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Body */}
      <article className="px-6 pb-24">
        <div
          className="max-w-3xl mx-auto"
          style={{ color: 'var(--tw-text-secondary)', lineHeight: 1.65 }}
        >
          <Section number="1" title="About these Terms">
            <p>
              These Terms of Service (the <em>Terms</em>) form a binding agreement between
              you (the <em>Customer</em>, <em>you</em>) and {COMPANY_LEGAL_NAME} (ACN{' '}
              {COMPANY_ACN}, ABN {COMPANY_ABN}), a company registered in {COMPANY_ADDRESS} and
              trading as {COMPANY_TRADING_NAME} (<em>Totally Wild AI</em>, <em>we</em>,{' '}
              <em>us</em>, or <em>our</em>).
            </p>
            <p>
              They cover your access to and use of the Totally Wild AI platform at{' '}
              <em>app.totallywild.ai</em>, the marketing site at <em>totallywild.ai</em>, and
              any related software, APIs, documentation and services (together, the{' '}
              <em>Service</em>).
            </p>
            <p>
              By creating an account or using the Service, you agree to these Terms. If you do
              not agree, do not use the Service.
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-2" style={titleColor}>Definitions</h3>
            <p>In these Terms:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <em>Authorised User</em> means any individual to whom you grant access under your
                Account.
              </li>
              <li>
                <em>Inputs</em> means any prompt, requirement, document, code, or other content
                you submit to the Service.
              </li>
              <li>
                <em>Outputs</em> means any architecture document, code, project plan, diagram,
                or other deliverable generated by the Service in response to your Inputs.
              </li>
              <li>
                <em>Customer Data</em> means Inputs, Outputs, your account information, and any
                other data we process on your behalf.
              </li>
              <li>
                <em>Sub-processor</em> means a third party we engage to help deliver the Service
                (for example, AWS, Cloudflare, Anthropic, OpenAI). Our current Sub-processors
                are listed at <em>totallywild.ai/subprocessors</em>.
              </li>
              <li>
                <em>Regulated Customer</em> means a Customer that holds an Australian Financial
                Services Licence (AFSL), an Australian Credit Licence (ACL), an authorisation
                from the Australian Prudential Regulation Authority (APRA), a New Zealand
                Financial Markets Authority (FMA) licence, registration with the Reserve Bank of
                New Zealand, or any equivalent licence or authorisation in another jurisdiction.
              </li>
              <li>
                <em>Australian Consumer Law</em> means Schedule 2 to the{' '}
                <em>Competition and Consumer Act 2010</em> (Cth).
              </li>
              <li>
                <em>NZ Consumer Law</em> means the{' '}
                <em>Consumer Guarantees Act 1993</em> (NZ) and the{' '}
                <em>Fair Trading Act 1986</em> (NZ).
              </li>
            </ul>
          </Section>

          <Section number="2" title="Your account and authority">
            <p>
              <strong style={titleColorInline}>Authority.</strong> If you create an Account on
              behalf of a company, partnership, trust or other entity, you warrant that you are
              authorised to bind that entity to these Terms. If you sign up without naming an
              entity, you accept these Terms personally.
            </p>
            <p>
              <strong style={titleColorInline}>Account security.</strong> You are responsible for
              all activity under your Account, whether or not you authorised it, except where
              caused by our negligence. Keep your credentials confidential, enable two-factor
              authentication for sensitive operations where offered, and notify us promptly at{' '}
              <em>{CONTACT_LEGAL}</em> if you suspect any unauthorised access.
            </p>
            <p>
              <strong style={titleColorInline}>Email recovery.</strong> Password reset relies on
              the email address registered to your Account. You are responsible for the security
              of that email account.
            </p>
            <p>
              <strong style={titleColorInline}>Impersonation.</strong> Any individual who creates
              an Account while falsely representing they act for an entity is personally liable
              for that misuse, must immediately cease use on notice from us, and indemnifies us
              for any third-party claim arising from the impersonation. We may at any time
              require entity-verification documentation (an ABN/NZBN match, a domain-verified
              email address) for any Account claiming to act for a Regulated Customer.
            </p>
          </Section>

          <Section number="3" title="The Service and permitted use">
            <p>
              <strong style={titleColorInline}>Licence.</strong> Subject to your compliance with
              these Terms, we grant you a non-exclusive, non-transferable, non-sublicensable,
              revocable right during your subscription term to access and use the Service for
              your internal business purposes.
            </p>
            <p>
              <strong style={titleColorInline}>Authorised Users.</strong> You may grant access to
              your employees and contractors who are bound by confidentiality obligations at
              least as protective as these Terms. You remain responsible for their acts and
              omissions.
            </p>
            <p>
              <strong style={titleColorInline}>AI providers.</strong> The Service uses third-party
              large language models (currently including models from Anthropic and OpenAI). We
              do not warrant the continued availability of any specific model and may substitute
              models at our discretion, provided the substitution does not materially degrade
              the Service.
            </p>
            <p>
              <strong style={titleColorInline}>Beta features.</strong> Anything labelled "beta",
              "preview" or "experimental" is provided strictly as-is, with no service-level
              commitments, may be withdrawn at any time, and is excluded from any warranty or
              indemnity in these Terms (to the extent we may lawfully do so).
            </p>
          </Section>

          <Section number="4" title="Acceptable use">
            <p>You must not use the Service to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>break the law, or infringe anyone's intellectual property, privacy or other rights;</li>
              <li>create content that is defamatory, harassing, child sexual-abuse material, or designed to facilitate violence;</li>
              <li>
                make consequential decisions about people without a qualified human reviewer in the loop —
                including decisions about credit, housing, employment, insurance, government benefits,
                medical diagnosis or treatment, autonomous control of safety-critical systems, or autonomous
                weapons;
              </li>
              <li>generate malware, exploit code, phishing infrastructure, or anything intended to facilitate cyber-attack, terrorism or CSAM;</li>
              <li>
                reverse engineer, decompile, scrape, or attempt to discover the source code, prompts, system
                messages, model weights or architecture of the Service or any underlying model;
              </li>
              <li>
                use the Service or Outputs to develop a product that competes with the Service, train a
                competing AI model, or benchmark for the purpose of building such a product;
              </li>
              <li>
                circumvent our rate limits, usage controls, security measures, or attempt prompt-injection
                or jailbreaking techniques against the Service;
              </li>
              <li>
                resell, sublicense or expose the Service to third parties without our written consent.
              </li>
            </ul>
            <p>
              You also acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong style={titleColorInline}>Outputs may be wrong.</strong> Large language models
                hallucinate. Outputs may be plausible but incorrect, fabricated or misleading. You are
                solely responsible for evaluating and validating Outputs before relying on them.
              </li>
              <li>
                <strong style={titleColorInline}>AI-generated code is not production-ready by default.</strong>{' '}
                Generated code may contain bugs, security vulnerabilities, license-incompatible snippets, or
                deprecated APIs. You must review, test, and validate it through qualified personnel before
                deploying to production.
              </li>
              <li>
                <strong style={titleColorInline}>Prompt-injection risk is real.</strong> Third-party content
                you upload (documents, web pages, transcripts) may contain instructions intended to alter
                Outputs. You are responsible for sanitising and reviewing third-party content before submission.
              </li>
              <li>
                <strong style={titleColorInline}>Models can be biased.</strong> If you use Outputs to inform
                decisions affecting people, you are responsible for assessing and mitigating bias.
              </li>
            </ul>
            <p>
              We may suspend access immediately on any breach of this Section 4 and may terminate the
              Account on continued or material breach.
            </p>
          </Section>

          <Section number="5" title="Customer Data and confidentiality">
            <p>
              <strong style={titleColorInline}>Ownership.</strong> As between you and us, you own all
              Inputs and (subject to the IP rules in Section 6) all Outputs generated for you. We
              assign to you all right, title and interest we may have in Outputs.
            </p>
            <p>
              <strong style={titleColorInline}>Licence to operate.</strong> You grant us a worldwide,
              non-exclusive, royalty-free licence to host, process, transmit, display and modify
              Inputs and Outputs solely to the extent necessary to: (a) provide the Service to you;
              (b) prevent or address security incidents, fraud or abuse; (c) comply with applicable
              law; and (d) generate aggregated, de-identified statistical data that does not identify
              you or any individual.
            </p>
            <p>
              <strong style={titleColorInline}>No training without consent.</strong> We will not use
              Customer Data, Inputs or Outputs to train, fine-tune or evaluate any of our or a third
              party's AI model without your prior written consent. We configure our calls to upstream
              model providers (including Anthropic and OpenAI) to disable training on your data where
              the provider supports such a setting.
            </p>
            <p>
              <strong style={titleColorInline}>Confidentiality.</strong> Each party will treat the
              other's Confidential Information with at least the same standard of care it applies to
              its own confidential information (and in any case no less than reasonable care), use it
              only to perform under these Terms, and disclose it only to personnel and Sub-processors
              with a need to know who are bound by equivalent obligations. Customer Data and your
              Inputs are your Confidential Information. The Service architecture, prompts, system
              messages, evaluation harnesses and pricing are our Confidential Information. The usual
              carve-outs apply (information that is or becomes publicly known through no breach,
              independently developed without access to the other's Confidential Information,
              lawfully received from a third party without confidentiality obligations, or required
              by law to be disclosed with prior notice where lawful). The obligations in this Section
              survive termination for five years, and indefinitely for trade secrets.
            </p>
            <p>
              <strong style={titleColorInline}>Retention and deletion.</strong> Customer Data is
              retained while your Account is active and is deleted within thirty (30) days of
              termination, save for: (i) data we are required by law to retain; (ii) encrypted
              backups, which are overwritten on a rolling cycle of up to ninety (90) days; and (iii)
              suppression-list entries needed to honour unsubscribe requests.
            </p>
          </Section>

          <Section number="6" title="Intellectual property">
            <p>
              We use the standard industry framework for software-services contracts:
              Background IP, Foreground IP (Customer Outputs), Residuals, and Publicity.
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-2" style={titleColor}>(a) Background IP — the Totally Wild AI Platform</h3>
            <p>
              All right, title and interest in the Service — including the agent scaffolding, prompt
              libraries and system messages, orchestration layer, evaluation harnesses, patterns
              library, base templates, internal tooling, fine-tuned components, documentation, and
              any aggregated or de-identified analytics derived from operating the Service — is and
              remains our property and that of our licensors (the <em>Background IP</em>). We grant
              you a perpetual, worldwide, non-exclusive, royalty-free licence to use Background IP
              solely as embedded in your Outputs. Nothing else in these Terms transfers any
              Background IP to you. We may freely use Background IP for other customers and
              purposes.
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-2" style={titleColor}>(b) Foreground IP — your Customer Outputs</h3>
            <p>
              The specific Outputs the Service generates from your Inputs — including architecture
              documents, generated code, configuration, project plans and diagrams (the{' '}
              <em>Customer Outputs</em>) — are assigned to you on payment of all applicable fees
              for the relevant subscription period. Until that payment is made, your licence to use
              Customer Outputs is conditional on your compliance with these Terms. You are
              responsible for clearing any third-party rights that may attach to Outputs (including
              any open-source licence obligations on code patterns produced by the Service).
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-2" style={titleColor}>(c) Residuals</h3>
            <p>
              Each party may use the general knowledge, skills, and experience its personnel acquire
              during the engagement — including ideas, concepts, techniques, and know-how retained
              in unaided memory — provided this does not include the other party's Confidential
              Information or, in our case, your Customer Outputs. "Unaided memory" means information
              retained without intentional aid such as notes, copies, recordings, or prompts.
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-2" style={titleColor}>(d) Publicity</h3>
            <p>
              You grant us the right to refer to the engagement in marketing materials in
              anonymised form — describing the architectural shape of the problem, the kind of
              outcome delivered, and patterns we used — provided the description does not identify
              you and does not disclose your Confidential Information or Customer Outputs. Use of
              your name, logo, direct quotations or any reasonably-identifying detail requires your
              prior written consent (email is sufficient). You may withdraw that consent on written
              notice for future use.
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-2" style={titleColor}>(e) Feedback</h3>
            <p>
              If you give us feedback, suggestions or ideas about the Service, you grant us a
              perpetual, irrevocable, worldwide, royalty-free, sublicensable licence to use them
              without restriction.
            </p>
          </Section>

          <Section number="7" title="Customer warranties">
            <p>
              <strong style={titleColorInline}>General.</strong> You warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>you have authority to enter these Terms and to grant the licences in Section 5;</li>
              <li>your Inputs do not infringe any third party's IP, privacy, contractual or other rights, and you have all rights necessary to submit them;</li>
              <li>your use of the Service complies with all applicable laws, including export-control, sanctions, anti-bribery and anti-money-laundering laws;</li>
              <li>you will not submit Inputs containing personal information unless you have provided required notices and obtained any required consents from the individuals concerned.</li>
            </ul>
            <p>
              <strong style={titleColorInline}>Regulated Customer warranties.</strong> If you are a
              Regulated Customer, you additionally warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                you hold and will maintain throughout the term all licences, registrations and
                authorisations required for your business — including (as applicable) an AFSL under
                the <em>Corporations Act 2001</em> (Cth), an Australian Credit Licence under the{' '}
                <em>National Consumer Credit Protection Act 2009</em> (Cth), APRA authorisation,
                FMA licensing under the <em>Financial Markets Conduct Act 2013</em> (NZ), and
                Reserve Bank of NZ registration where applicable;
              </li>
              <li>
                you are solely responsible for compliance with your own regulatory obligations,
                including ASIC Regulatory Guides (notably RG 271 internal dispute resolution, RG
                274 product design and distribution, RG 209 responsible lending), APRA prudential
                standards (notably CPS 230 operational risk, CPS 234 information security, CPS 231
                / 232 outsourcing), the <em>Anti-Money Laundering and Counter-Terrorism Financing
                Act 2006</em> (Cth), and equivalents in NZ;
              </li>
              <li>
                you acknowledge we are not a financial-services provider, are not licensed to
                provide financial product advice, and that no Output is to be construed as advice
                to your end-clients. Outputs delivered to your end-clients without independent
                professional review are at your sole risk;
              </li>
              <li>
                your use of the Service has been approved by your risk and compliance functions
                to the extent required by your internal frameworks; and
              </li>
              <li>
                you are responsible for any required notification to your prudential or conduct
                regulator about your use of the Service as a material service provider.
              </li>
            </ul>
          </Section>

          <Section number="8" title="Sub-processors and privacy">
            <p>
              Our handling of personal information is governed by our{' '}
              <a href="/privacy" className="underline hover:opacity-100" style={linkStyle}>
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference.
            </p>
            <p>
              We use Sub-processors to deliver the Service. The current list — including each
              Sub-processor's role, the categories of data shared, and the country of processing
              — is published at <em>totallywild.ai/subprocessors</em>. We will use commercially
              reasonable efforts to give thirty (30) days' advance notice of new Sub-processors via
              that page or a notification mailing list. If you reasonably object to a new
              Sub-processor on data-protection grounds, we will work with you in good faith to
              address the objection; if we cannot, you may terminate the affected portion of the
              Service for cause without penalty.
            </p>
            <p>
              We remain accountable under Australian Privacy Principle 8 for personal information
              disclosed to overseas Sub-processors and impose contractual obligations on them at
              least as protective as the Privacy Policy and these Terms.
            </p>
            <p>
              We will notify you without undue delay (and in any case within seventy-two (72) hours)
              of becoming aware of any incident affecting your Customer Data, with sufficient
              information to allow you to meet any notification obligations under Part IIIC of the{' '}
              <em>Privacy Act 1988</em> (Cth), Part 6 of the <em>Privacy Act 2020</em> (NZ), or the
              GDPR.
            </p>
          </Section>

          <Section number="9" title="Service availability and support">
            <p>
              We use commercially reasonable efforts to make the Service available, excluding
              scheduled maintenance, emergency maintenance, and force-majeure events.
            </p>
            <p>
              The standard self-serve plan does not include a contractual uptime SLA, service
              credits, or 24/7 support. Support is provided by email at <em>support@totallywild.ai</em>{' '}
              during Brisbane business hours, with no committed response times. If you require an
              SLA, named support, dedicated security commitments, or a Master Services Agreement,
              contact us at <em>{CONTACT_LEGAL}</em>.
            </p>
            <p>
              Nothing in this Section limits any consumer guarantee under the Australian Consumer
              Law (where it applies) or the NZ Consumer Law that cannot lawfully be excluded.
            </p>
          </Section>

          <Section number="10" title="Fees, taxes and billing">
            <p>
              Fees are payable as set out on the published pricing page applicable to your plan or
              in any Order Form we agree with you. Unless we say otherwise, fees are exclusive of
              GST and any other applicable taxes, and you are responsible for those taxes.
            </p>
            <p>
              Subscriptions auto-renew at the end of each term unless cancelled before renewal.
              We may change pricing on at least thirty (30) days' notice; price changes take effect
              at the next renewal and your sole remedy if you do not accept a price change is
              non-renewal.
            </p>
            <p>
              We may charge simple interest on overdue amounts at the Reserve Bank of Australia
              cash rate plus 4% per annum, calculated daily, until paid in full.
            </p>
          </Section>

          <Section number="11" title="Term, suspension and termination">
            <p>
              These Terms apply for the duration of your subscription. You may cancel at any time
              effective at the next renewal via the Account dashboard. We may terminate for
              convenience on thirty (30) days' written notice with a pro-rata refund of unused
              prepaid fees.
            </p>
            <p>
              We may suspend or terminate immediately (or after a cure period as we reasonably
              determine) if:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>you materially breach these Terms and have not cured within fourteen (14) days of notice;</li>
              <li>you breach the acceptable-use rules in Section 4 (suspension may be immediate);</li>
              <li>you are insolvent, in administration, liquidation, or any analogous proceeding;</li>
              <li>fees are more than thirty (30) days overdue after one written reminder;</li>
              <li>we reasonably believe the Account is being used for fraud, illegal activity, or to harm the Service or other customers;</li>
              <li>a Sub-processor or upstream model provider terminates or suspends our access for reasons attributable to your use;</li>
              <li>your regulator notifies us that your use of the Service is non-compliant and you have not promptly cured; or</li>
              <li>you become a Designated Person on Australia's Consolidated List of sanctions or any equivalent list we are bound to honour.</li>
            </ul>
            <p>
              On termination, your access to the Service ceases. We make Customer Data available
              for export for thirty (30) days, after which it is deleted in accordance with Section 5.
              Sections 5, 6, 7, 12, 13, 14, 15, 16, 17, 18 and 19 survive termination, along with any
              other provision that by its nature should survive.
            </p>
          </Section>

          <Section number="12" title="Disclaimers">
            <p>
              <strong style={titleColorInline}>As-is.</strong> Except as expressly stated in these
              Terms and to the maximum extent permitted by law, the Service is provided "as is" and
              "as available". We disclaim all express and implied warranties, including warranties
              of merchantability, fitness for a particular purpose, accuracy, completeness,
              currency, title and non-infringement, and any warranty that the Service will be
              uninterrupted, secure or error-free.
            </p>
            <p>
              <strong style={titleColorInline}>AI-specific disclaimers.</strong> Without limiting
              the previous paragraph, we make no warranty that any Output will be accurate, complete,
              free of hallucinations, suitable for production deployment, secure, or compliant with
              any law or regulation (including any rule applicable to you as a Regulated Customer).
              You are responsible for evaluating and validating Outputs before relying on them.
            </p>
            <p>
              <strong style={titleColorInline}>Australian Consumer Law.</strong> Nothing in these
              Terms excludes, restricts or modifies any guarantee, right or remedy under the
              Australian Consumer Law that cannot lawfully be excluded, restricted or modified.
              Where the supply of the Service to you is of a kind not ordinarily acquired for
              personal, domestic or household use or consumption, our liability for breach of any
              consumer guarantee under the Australian Consumer Law is limited, at our option, to:
              (a) supplying the Service again; or (b) paying the cost of having the Service supplied
              again. This limitation is made under section 64A of the Australian Consumer Law.
            </p>
            <p>
              <strong style={titleColorInline}>NZ Consumer Law (B2B contracting out).</strong> Where
              you are acquiring the Service in trade and these Terms apply, the parties agree that
              the <em>Consumer Guarantees Act 1993</em> (NZ) and sections 9, 12A, 13 and 14(1) of
              the <em>Fair Trading Act 1986</em> (NZ) do not apply, to the extent they may lawfully
              be contracted out of under section 5D of the CGA and section 5C of the FTA. You
              warrant that you are acquiring the Service in trade and that it is fair and reasonable
              for these provisions not to apply, given that we are a small business supplying
              standard-form services on standard-form pricing reflecting the limited-warranty
              position.
            </p>
          </Section>

          <Section number="13" title="Limitation of liability">
            <p>
              To the maximum extent permitted by law, neither party is liable to the other for any
              indirect, special, incidental, consequential or exemplary loss, including lost
              profits, lost revenue, lost or corrupted data, lost goodwill, business interruption,
              regulatory fines or penalties, cost of cover, or cost of substitute services, however
              caused and whether in contract, tort (including negligence), under statute or
              otherwise.
            </p>
            <p>
              Each party's aggregate liability arising out of or related to these Terms in any
              twelve (12) month period is limited to the greater of: (a) the fees you paid (or were
              payable) to us in the twelve (12) months preceding the claim; or (b) AUD $100.
            </p>
            <p>
              The limits in this Section do not apply to: (i) liability for death or personal
              injury caused by negligence; (ii) fraud or wilful misconduct; (iii) a party's
              indemnity obligations in Section 14; (iv) your obligation to pay fees due; or (v) any
              liability that may not lawfully be limited (including consumer guarantees that cannot
              be excluded under the Australian Consumer Law).
            </p>
          </Section>

          <Section number="14" title="Indemnities">
            <p>
              <strong style={titleColorInline}>Our indemnity.</strong> Subject to the limits in
              Section 13 and the carve-outs below, we will defend you against, and pay any amount
              finally awarded against you (or agreed in settlement) on, a third-party claim that
              the Service (excluding Outputs and Inputs) directly infringes that third party's
              Australian or New Zealand patent, registered trade mark, copyright or trade secret —
              provided you used the Service in accordance with these Terms.
            </p>
            <p>
              We have no obligation under the previous paragraph for any claim arising from: (a)
              combination of the Service with non-Totally Wild AI technology; (b) modifications to
              the Service made by you; (c) use after we have notified you to stop; (d) use of beta
              features; or (e) Inputs or Outputs.
            </p>
            <p>
              If a claim arises or we reasonably believe one will, we may at our option: (i) modify
              or replace the Service to make it non-infringing; (ii) procure a licence allowing
              continued use; or (iii) terminate the affected Service with a pro-rata refund of
              unused prepaid fees. The remedies in this Section are your sole and exclusive remedies
              for any third-party IP claim relating to the Service.
            </p>
            <p>
              <strong style={titleColorInline}>Your indemnity.</strong> You will defend us, our
              affiliates, and our personnel against, and pay any amount finally awarded (or agreed
              in settlement) on, a third-party claim arising out of or relating to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>your Inputs (including any IP, privacy, defamation or illegality claim);</li>
              <li>
                your or your end-clients' use of, distribution of or reliance on Outputs, including
                any claim by an end-client that the Output caused loss;
              </li>
              <li>your breach of Section 4 (acceptable use);</li>
              <li>
                your breach of any warranty in Section 7, including any claim by a regulator
                (including ASIC, APRA, AUSTRAC, the FMA, or the Reserve Bank of NZ) or end-client of
                a Regulated Customer that relates to your licensed activities; or
              </li>
              <li>any unauthorised Account creation or impersonation under Section 2.</li>
            </ul>
            <p>
              <strong style={titleColorInline}>Procedure.</strong> The indemnified party must give
              prompt written notice of the claim, give the indemnifying party reasonable
              cooperation, and allow the indemnifying party to control the defence and settlement
              (provided no settlement requiring an admission of liability or material affirmative
              obligation by the indemnified party may be made without that party's consent, not to
              be unreasonably withheld).
            </p>
          </Section>

          <Section number="15" title="Sanctions, anti-bribery, export control">
            <p>
              You warrant that you are not, and are not owned or controlled by, a Designated Person
              under Australia's Consolidated List (administered by DFAT under the{' '}
              <em>Autonomous Sanctions Act 2011</em> (Cth) and the{' '}
              <em>Charter of the United Nations Act 1945</em> (Cth)), and that you are not located
              in or operating from a sanctioned jurisdiction.
            </p>
            <p>
              You will not use the Service in a way that breaches Australian sanctions laws, the
              US OFAC sanctions program, EU sanctions, or UK sanctions.
            </p>
            <p>
              You will not use the Service to facilitate any breach of the foreign-bribery offences
              in Division 70 of the <em>Criminal Code Act 1995</em> (Cth), the US Foreign Corrupt
              Practices Act, the UK Bribery Act 2010, or any equivalent law.
            </p>
            <p>
              You will not export Outputs or use the Service in a way that breaches the{' '}
              <em>Defence Trade Controls Act 2012</em> (Cth) or the US Export Administration
              Regulations / ITAR where applicable. AI-generated code that implements certain
              cryptographic, dual-use or military-listed technology may fall within scope.
            </p>
          </Section>

          <Section number="16" title="Variation">
            <p>
              We may vary these Terms from time to time. We will give you at least thirty (30)
              days' prior notice of any material change — by email to your Account email address
              and/or by in-product notice. A change is "material" if it adversely affects your
              rights or increases your obligations in a material respect.
            </p>
            <p>
              For non-material changes (clarifications, formatting, Sub-processor list updates),
              we may publish the updated Terms with a new "last updated" date without prior notice.
            </p>
            <p>
              If you do not accept a material change, your sole remedy is to terminate the Service
              before the change takes effect, with a pro-rata refund of unused prepaid fees.
              Continued use after the effective date of a change is acceptance of the change.
            </p>
            <p>
              We may make changes immediately where required by law, by a regulator, or for
              security or safety reasons, with notice to you as soon as reasonably practicable.
            </p>
          </Section>

          <Section number="17" title="Governing law and disputes">
            <p>
              These Terms are governed by the laws of Queensland, Australia, and the
              Commonwealth of Australia where applicable. The courts of Queensland and the Federal
              Court of Australia (Brisbane registry) have exclusive jurisdiction over any dispute,
              save that either party may seek urgent injunctive or equitable relief in any court of
              competent jurisdiction.
            </p>
            <p>
              Before commencing proceedings (other than for urgent injunctive relief), the parties
              will attempt in good faith to resolve any dispute by senior-level negotiation for at
              least thirty (30) days from written notice of the dispute.
            </p>
            <p>
              <strong style={titleColorInline}>For New Zealand customers:</strong> the parties
              acknowledge that mandatory provisions of NZ law continue to apply to the extent they
              cannot lawfully be excluded.
            </p>
          </Section>

          <Section number="18" title="General">
            <p>
              <strong style={titleColorInline}>Entire agreement.</strong> These Terms, together
              with our Privacy Policy, our Acceptable Use rules in Section 4, the Sub-processor
              list, and any Order Form we sign with you, are the entire agreement between us and
              supersede any prior agreement on the same subject. In case of conflict, the order of
              precedence is: signed Order Form, Privacy Policy, these Terms, Sub-processor list.
            </p>
            <p>
              <strong style={titleColorInline}>Severability.</strong> If any provision is held to
              be invalid or unenforceable, the rest remains in effect.
            </p>
            <p>
              <strong style={titleColorInline}>No waiver.</strong> Failure to enforce a provision
              is not a waiver of any right.
            </p>
            <p>
              <strong style={titleColorInline}>Assignment.</strong> You may not assign these Terms
              without our written consent. We may assign these Terms to an affiliate, successor, or
              in connection with a merger, acquisition or restructure, with notice to you.
            </p>
            <p>
              <strong style={titleColorInline}>Independent contractors.</strong> The parties are
              independent contractors. Nothing in these Terms creates a partnership, agency,
              employment or joint venture.
            </p>
            <p>
              <strong style={titleColorInline}>Force majeure.</strong> Neither party is liable for
              delay or failure caused by an event beyond its reasonable control, including (without
              limitation) cyber-attacks, internet or upstream-provider outages, pandemic, war,
              regulatory action, or labour dispute. Affected obligations are suspended for the
              duration of the event. If the event continues for more than sixty (60) days, either
              party may terminate the affected portion of the Service on written notice.
            </p>
            <p>
              <strong style={titleColorInline}>No third-party beneficiaries.</strong> These Terms
              confer no rights on third parties. The{' '}
              <em>Contracts (Privity) Act 1982</em> (NZ) and any equivalent law are excluded to the
              extent permitted.
            </p>
            <p>
              <strong style={titleColorInline}>Electronic acceptance.</strong> You may accept these
              Terms by clicking "I accept" or any equivalent control. Such acceptance is binding
              under the <em>Electronic Transactions Act 1999</em> (Cth) and the NZ{' '}
              <em>Contract and Commercial Law Act 2017</em>.
            </p>
            <p>
              <strong style={titleColorInline}>Notices.</strong> We may give you notice by email to
              your Account email address, by in-product notification, or by posting at the URL of
              these Terms (<em>www.totallywild.ai/terms</em>). You may give us notice by email to{' '}
              <em>{CONTACT_LEGAL}</em> and, for formal legal notices, by post to our registered
              office.
            </p>
          </Section>

          <Section number="19" title="Contact">
            <p>
              Questions about these Terms? Email <em>{CONTACT_LEGAL}</em>.<br />
              Privacy questions go to <em>{CONTACT_PRIVACY}</em>.
            </p>
            <p className="text-sm" style={{ color: 'var(--tw-text-tertiary)' }}>
              {COMPANY_LEGAL_NAME} (ACN {COMPANY_ACN}) trading as {COMPANY_TRADING_NAME} · ABN {COMPANY_ABN} · {COMPANY_ADDRESS}
            </p>
          </Section>
        </div>
      </article>
    </>
  )
}

// ── small helpers ───────────────────────────────────────────

const titleColor = { color: 'var(--tw-text-primary)' as const }
const titleColorInline = { color: 'var(--tw-text-primary)' as const }
const linkStyle = { color: 'var(--tw-text-primary)' as const }

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
