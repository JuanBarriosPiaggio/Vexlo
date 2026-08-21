import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Why Your Website Isn\u2019t Getting Leads (And How to Fix It) | Vexlo',
  description:
    'Your website looks fine but never produces enquiries? Here are the five real reasons most UK small business websites generate zero leads — and exactly what a lead-generating website does differently.',
  keywords: [
    'why is my website not getting leads',
    'website not generating enquiries',
    'website gets no traffic UK',
    'small business website not working',
    'how to get leads from my website',
    'lead generating website UK',
    'website conversion small business',
    'SEO for small business website UK',
    'quote calculator website',
    'website redesign for leads',
  ],
  alternates: { canonical: `${siteUrl}/articles/why-your-website-isnt-getting-leads` },
  openGraph: {
    url: `${siteUrl}/articles/why-your-website-isnt-getting-leads`,
    title: 'Why Your Website Isn\u2019t Getting Leads (And How to Fix It)',
    description:
      'The five real reasons most small business websites produce nothing — and what a lead-generating website does differently.',
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Why Your Website Isn\u2019t Getting Leads' }],
  },
}

export default function WhyNoLeadsArticle() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '120px 24px 80px' }}>

        {/* Header */}
        <div className="mb-10">
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-6"
            style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}
          >
            Lead Generation
          </span>
          <h1
            className="font-display text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', letterSpacing: '0.02em' }}
          >
            Why Your Website Isn&apos;t Getting Leads (And How to Fix It)
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#888' }}>
            You paid for a website. It looks presentable. And it has never once made your phone ring. You are not alone — most small business websites in the UK generate zero enquiries. Here are the five real reasons why, and what actually fixes each one.
          </p>
          <div className="flex items-center gap-6 mt-6 pt-6" style={{ borderTop: '1px solid #2a2a2a' }}>
            <span className="text-xs" style={{ color: '#888' }}>9 min read</span>
            <span className="text-xs" style={{ color: '#888' }}>Lead Generation</span>
          </div>
        </div>

        {/* Body */}
        <div className="prose-custom" style={{ color: '#c8c8c8', lineHeight: 1.8, fontSize: '1rem' }}>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            The uncomfortable truth: most websites are brochures, not salespeople
          </h2>
          <p>
            When most small businesses buy a website, what they actually get is a digital brochure. A homepage, an about page, a list of services, a contact form. It describes the business — but it does nothing to bring customers to it, and nothing to convert the few who arrive.
          </p>
          <p style={{ marginTop: '1rem' }}>
            A brochure sitting in a drawer does not generate leads. Neither does a brochure sitting on the internet. For a website to produce enquiries, two things have to be true: people who are ready to buy have to <strong style={{ color: '#e8e8e8' }}>find</strong> it, and once they land on it, they have to have a reason to <strong style={{ color: '#e8e8e8' }}>act</strong>. Most small business websites fail at both.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            Reason 1: Nobody can find it
          </h2>
          <p>
            Type the thing you sell plus your town into Google. If your website is not on the first page, it is effectively invisible — the overwhelming majority of clicks go to the first few results, and almost nobody ventures to page two.
          </p>
          <p style={{ marginTop: '1rem' }}>
            The usual cause is structural. A five-page brochure site gives Google almost nothing to rank. There is no page targeting &ldquo;end of tenancy cleaning in Wandsworth&rdquo; or &ldquo;fire stopping contractors in Croydon&rdquo; — so when someone searches those exact phrases, Google has no reason to show your site. The businesses that dominate local search have dedicated pages for every service they offer and every area they cover.
          </p>

          <div
            className="my-8 p-6 rounded-xl"
            style={{ background: 'rgba(217,119,6,0.08)', border: '1px solid rgba(217,119,6,0.25)' }}
          >
            <p className="font-bold text-sm mb-1" style={{ color: '#d97706' }}>The Fix</p>
            <p className="text-sm leading-relaxed" style={{ color: '#e8e8e8' }}>
              SEO architecture: a dedicated, properly optimised page for each service and each area you serve, plus structured data so Google understands exactly what you do and where. This is not something you bolt on later — it should shape how the site is built from the first wireframe.
            </p>
          </div>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            Reason 2: Visitors have no reason to act
          </h2>
          <p>
            Even when a brochure site does get a visitor, the only action available is usually &ldquo;call us&rdquo; or a generic contact form. That is a big ask. The visitor does not know what you charge, whether you cover their area, or whether you are available — so they leave and keep looking for someone who tells them.
          </p>
          <p style={{ marginTop: '1rem' }}>
            The websites that convert give visitors something to do that moves them forward with low commitment. The single most effective tool we build is the <strong style={{ color: '#e8e8e8' }}>instant quote calculator</strong>: the visitor selects their property size, rooms, or job details, and gets a real price on the spot. They have invested effort, they have a number, and booking is one click away.
          </p>
          <p style={{ marginTop: '1rem' }}>
            For our client <a href="https://tenanclean.com" target="_blank" rel="noopener noreferrer" style={{ color: '#d97706', fontWeight: 700 }}>Tenanclean</a>, an end of tenancy cleaning company in London, the custom quote calculator is where their website leads come from. Customers price their own clean, book it online, and both the customer and the owner get automatic email confirmations — no phone tag, no missed enquiries.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            Reason 3: Google doesn&apos;t trust your business data
          </h2>
          <p>
            Google cross-references your business name, address, and phone number across dozens of directories before deciding how to rank you locally. If your data is missing, inconsistent, or scattered across sites you have never heard of, Google hesitates — and hesitation means lower rankings.
          </p>
          <p style={{ marginTop: '1rem' }}>
            This is why local citations matter. A website with consistent listings across 55+ high-authority UK directories has corroborating evidence behind it. One without is just a claim. We covered this in depth in our guide to{' '}
            <Link href="/articles/why-consistent-business-listings-matter-uk" style={{ color: '#d97706', fontWeight: 700 }}>
              why consistent business listings matter
            </Link>
            .
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            Reason 4: No content, no compounding
          </h2>
          <p>
            Every question your customers type into Google is a door into your website — but only if a page exists to answer it. &ldquo;How much does end of tenancy cleaning cost?&rdquo; &ldquo;What is passive fire protection?&rdquo; &ldquo;Do I need a fire risk assessment?&rdquo; Businesses that publish helpful articles answering these questions collect visitors their competitors never see.
          </p>
          <p style={{ marginTop: '1rem' }}>
            This is the compounding part of SEO: each article keeps working month after month, for free. A site with thirty well-targeted pages does not get six times the traffic of a five-page site — over time, it gets far more, because it competes for hundreds of long-tail searches.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            Reason 5: The leads it does produce get lost
          </h2>
          <p>
            Here is the one nobody talks about: some websites do generate enquiries — and the business loses them anyway. The form submission sits unread until evening. The call comes in while you are on a job and goes to voicemail. By the time you respond, the customer has booked someone else.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Speed decides who wins the job. This is why we pair lead-generating websites with an automation layer:{' '}
            <Link href="/articles/how-to-reply-to-missed-calls-automatically" style={{ color: '#d97706', fontWeight: 700 }}>
              missed call text-back
            </Link>{' '}
            within seconds, automated booking links, and{' '}
            <Link href="/google-reviews" style={{ color: '#d97706', fontWeight: 700 }}>
              review requests after every job
            </Link>
            . The website wins the lead; the system makes sure you keep it.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            How long does it actually take?
          </h2>
          <p>
            We will be straight with you, because most agencies are not: a new or rebuilt website does not generate leads in week one. Google needs time to crawl, index, and start trusting the site. For both of our featured clients — Tenanclean and{' '}
            <a href="https://fyrup.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: '#d97706', fontWeight: 700 }}>Fyrup</a>, a London passive fire protection firm — the first organic leads arrived roughly <strong style={{ color: '#e8e8e8' }}>2 months after launch</strong>, and lead flow has compounded since.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Two months can sound like a long time. But compare it with the alternative: a website that has produced nothing for three years, or paying for every single click through ads forever. An SEO-driven website is an asset — it costs once and pays repeatedly.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            The checklist: does your website have these?
          </h2>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }} className="flex flex-col gap-2">
            {[
              'A dedicated page for every service you offer',
              'Pages targeting the local areas you actually serve',
              'A quote calculator, booking system, or instant-price tool',
              'Consistent business listings across high-authority UK directories',
              'Articles answering the questions your customers search for',
              'A system that responds to enquiries within minutes, not hours',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#c8c8c8' }}>
                <span style={{ color: '#d97706', fontWeight: 700, flexShrink: 0 }}>→</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: '1rem' }}>
            If you ticked fewer than half of these, your website is not underperforming — it was never built to perform. That is fixable.
          </p>

          {/* CTA box */}
          <div
            className="my-10 p-8 rounded-2xl text-center"
            style={{ background: 'linear-gradient(135deg, #1a1000, #2d1900)', border: '1px solid rgba(217,119,6,0.3)' }}
          >
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="font-display text-white mb-3" style={{ fontSize: '1.5rem' }}>
              Want a website that actually earns its keep?
            </h3>
            <p className="text-sm mb-6 mx-auto" style={{ color: '#888', maxWidth: '380px' }}>
              Vexlo builds SEO-driven websites with quote calculators, booking systems, and local citations — the same system behind Tenanclean and Fyrup. Book a free call and we&apos;ll map out what we&apos;d build for you.
            </p>
            <Link
              href="/enquiry"
              className="inline-flex items-center px-7 py-3.5 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110"
              style={{ background: '#d97706' }}
            >
              Get Your Free Website Plan →
            </Link>
          </div>

          {/* Related articles */}
          <div style={{ borderTop: '1px solid #2a2a2a', marginTop: '3rem', paddingTop: '3rem' }}>
            <h3 className="font-bold text-sm mb-5" style={{ color: '#fff' }}>Related articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  href: '/lead-generating-websites',
                  tag: 'Service',
                  title: 'Websites That Deliver Leads',
                  excerpt: 'How Vexlo builds websites engineered to generate enquiries — with real client results.',
                },
                {
                  href: '/articles/does-my-small-business-need-a-website',
                  tag: 'Small Business UK',
                  title: 'Does My Small Business Need a Website?',
                  excerpt: 'Running on word of mouth alone? Here\u2019s what staying invisible online actually costs.',
                },
                {
                  href: '/articles/why-consistent-business-listings-matter-uk',
                  tag: 'Local SEO',
                  title: 'Why Consistent Business Listings Matter',
                  excerpt: 'Inconsistent NAP data quietly destroys local rankings. Here\u2019s how to fix it.',
                },
                {
                  href: '/portfolio',
                  tag: 'Our Work',
                  title: 'Web Design & Development Portfolio',
                  excerpt: 'The Tenanclean and Fyrup builds in detail — calculators, integrations, and results.',
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="block p-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: '#111111', border: '1px solid #2a2a2a', textDecoration: 'none' }}
                >
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-3"
                    style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}
                  >
                    {article.tag}
                  </span>
                  <h4 className="font-bold text-sm mb-2" style={{ color: '#fff' }}>{article.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#888' }}>{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </article>
    </div>
  )
}
