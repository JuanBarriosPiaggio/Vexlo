import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Does My Small Business Need a Website? An Honest Answer for UK Businesses | Vexlo',
  description:
    'Running on word of mouth and think a website is optional? Here is what being invisible online actually costs a UK small business — and what a lead-generating website changes, with real client timelines.',
  keywords: [
    'does my small business need a website',
    'do I need a website for my business UK',
    'is a website worth it for small business',
    'word of mouth vs website',
    'small business website benefits UK',
    'website for tradesmen UK',
    'website for cleaning business UK',
    'business without a website',
    'Google Business Profile vs website',
    'lead generating website UK',
  ],
  alternates: { canonical: `${siteUrl}/articles/does-my-small-business-need-a-website` },
  openGraph: {
    url: `${siteUrl}/articles/does-my-small-business-need-a-website`,
    title: 'Does My Small Business Need a Website? An Honest Answer',
    description:
      'What being invisible online actually costs a UK small business — and what a lead-generating website changes.',
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Does My Small Business Need a Website?' }],
  },
}

export default function NeedAWebsiteArticle() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '120px 24px 80px' }}>

        {/* Header */}
        <div className="mb-10">
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-6"
            style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}
          >
            Small Business UK
          </span>
          <h1
            className="font-display text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', letterSpacing: '0.02em' }}
          >
            Does My Small Business Need a Website? An Honest Answer
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#888' }}>
            Your business runs on word of mouth. Work comes in, customers are happy, and a website has always felt like an expense you can skip. This article is not going to tell you word of mouth is bad — it built your business. It is going to show you where it stops, and what it quietly costs you.
          </p>
          <div className="flex items-center gap-6 mt-6 pt-6" style={{ borderTop: '1px solid #2a2a2a' }}>
            <span className="text-xs" style={{ color: '#888' }}>8 min read</span>
            <span className="text-xs" style={{ color: '#888' }}>Small Business UK</span>
          </div>
        </div>

        {/* Body */}
        <div className="prose-custom" style={{ color: '#c8c8c8', lineHeight: 1.8, fontSize: '1rem' }}>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            The word-of-mouth ceiling
          </h2>
          <p>
            Word of mouth is the best marketing there is — when it happens. The problem is you cannot control when it happens. Referrals depend on your past customers remembering you, being asked at the right moment, and passing your details on correctly. In a good month it fills your diary. In a quiet month there is nothing you can do to turn it up.
          </p>
          <p style={{ marginTop: '1rem' }}>
            That is the ceiling: a business that runs purely on referrals can only grow as fast as its customers talk. You cannot scale it, you cannot schedule it, and you cannot switch it on when the pipeline runs dry.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            Even your referrals Google you
          </h2>
          <p>
            Here is the part most website-sceptics miss: word of mouth and the internet are not separate channels anymore. When someone is given your name at a school gate or on a job site, the first thing they do is search for you. They are not looking for your life story — they are checking you are real, established, and worth calling.
          </p>
          <p style={{ marginTop: '1rem' }}>
            If that search returns nothing — or returns a competitor with a professional website, 60 Google reviews, and an instant quote form — a referral you already earned can leak away to someone else. Being invisible online does not just cost you strangers. It costs you warm leads.
          </p>

          <div
            className="my-8 p-6 rounded-xl"
            style={{ background: 'rgba(217,119,6,0.08)', border: '1px solid rgba(217,119,6,0.25)' }}
          >
            <p className="font-bold text-sm mb-1" style={{ color: '#d97706' }}>Key Insight</p>
            <p className="text-sm leading-relaxed" style={{ color: '#e8e8e8' }}>
              A website is not a replacement for word of mouth — it is a safety net under it. It catches the referrals who check you out before calling, and it adds a second stream of customers: people who never heard your name, but searched for what you do.
            </p>
          </div>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            &ldquo;I have a Facebook page / Google Business Profile — isn&apos;t that enough?&rdquo;
          </h2>
          <p>
            They help, and you should absolutely have a Google Business Profile. But there are hard limits. You do not control these platforms: the layout, the reach, and the rules can change overnight. A Facebook page barely appears in Google search. And a Google Business Profile without a website behind it is competing against profiles that do have one — Google itself uses your website to understand and rank your business.
          </p>
          <p style={{ marginTop: '1rem' }}>
            More importantly, neither can do the actual selling. They cannot show a page for every service you offer in every area you cover, they cannot answer the questions your customers search for, and they cannot let a visitor price and book a job at 9pm on a Sunday.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            The difference between &ldquo;a website&rdquo; and a website that pays for itself
          </h2>
          <p>
            Part of the scepticism about websites is earned. Plenty of business owners have paid for one and got nothing back — because what they bought was a digital brochure. If you are going to have a website, it should be built to do a job:
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }} className="flex flex-col gap-2">
            {[
              'Rank on Google for the services you offer in the areas you cover',
              'Let visitors get an instant price with a quote calculator, instead of "call for a quote"',
              'Take bookings online, with automatic confirmations to you and the customer',
              'Show your Google reviews and build trust before the first phone call',
              'Capture every enquiry — even the calls you miss on site',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#c8c8c8' }}>
                <span style={{ color: '#d97706', fontWeight: 700, flexShrink: 0 }}>→</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: '1rem' }}>
            We wrote a full breakdown of why most websites fail at this in{' '}
            <Link href="/articles/why-your-website-isnt-getting-leads" style={{ color: '#d97706', fontWeight: 700 }}>
              Why Your Website Isn&apos;t Getting Leads
            </Link>
            .
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            What actually happened for two businesses like yours
          </h2>
          <p>
            <a href="https://tenanclean.com" target="_blank" rel="noopener noreferrer" style={{ color: '#d97706', fontWeight: 700 }}>Tenanclean</a> is an end of tenancy cleaning company in London. We built their website with a custom quote calculator — customers select their property size and services, get a fixed price on the spot, and book online. Both the customer and the owner receive automatic email confirmations. Their first organic lead arrived about 2 months after launch, and the calculator is now where their website enquiries come from.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <a href="https://fyrup.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: '#d97706', fontWeight: 700 }}>Fyrup</a> is a passive fire protection firm, also in London. Their site includes borough-level area pages, an SEO article library, and a full Simpro integration so enquiries flow straight into their job management system. Same pattern: first organic leads at around the 2-month mark, growing since.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Neither business had magic. They had websites engineered to be found and to convert — and a couple of months of patience while Google caught up. You can see both builds in detail in our{' '}
            <Link href="/portfolio" style={{ color: '#d97706', fontWeight: 700 }}>portfolio</Link>.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            The honest cost-benefit
          </h2>
          <p>
            A proper lead-generating website is not the cheapest thing you will buy this year. But run the comparison honestly. Directories like Checkatrade charge every month forever, and you compete in a list against everyone else. Paid ads stop the moment you stop paying. A website is the one channel you own outright: every ranking it earns and every article it publishes keeps working, month after month, at no extra cost.
          </p>
          <p style={{ marginTop: '1rem' }}>
            And the cost of not having one is not zero — it is every customer who searched for what you do in your area this month and found your competitor, plus every referral who looked you up and found nothing. That cost is just invisible, which is why it is easy to ignore.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            So — does your small business need a website?
          </h2>
          <p>
            If you are winding down, fully booked for years, and never want to grow: honestly, maybe not. For everyone else, the question is not whether you need a website. It is whether you keep donating your online customers to competitors while you decide.
          </p>

          {/* CTA box */}
          <div
            className="my-10 p-8 rounded-2xl text-center"
            style={{ background: 'linear-gradient(135deg, #1a1000, #2d1900)', border: '1px solid rgba(217,119,6,0.3)' }}
          >
            <div className="text-2xl mb-3">🚀</div>
            <h3 className="font-display text-white mb-3" style={{ fontSize: '1.5rem' }}>
              Find out what a website would actually do for your business.
            </h3>
            <p className="text-sm mb-6 mx-auto" style={{ color: '#888', maxWidth: '380px' }}>
              Book a free call. We&apos;ll tell you what we&apos;d build, what it would cost, and — honestly — when to expect your first leads. No pressure, no jargon.
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
                  href: '/articles/why-your-website-isnt-getting-leads',
                  tag: 'Lead Generation',
                  title: 'Why Your Website Isn\u2019t Getting Leads',
                  excerpt: 'The five reasons most small business websites produce nothing — and the fix for each.',
                },
                {
                  href: '/articles/why-consistent-business-listings-matter-uk',
                  tag: 'Local SEO',
                  title: 'Why Consistent Business Listings Matter',
                  excerpt: 'How consistent directory data helps Google trust — and rank — your business.',
                },
                {
                  href: '/google-reviews',
                  tag: 'Feature',
                  title: 'Automated Google Review Management',
                  excerpt: 'Reviews build the trust that turns searchers into callers. Here\u2019s how to get them on autopilot.',
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
