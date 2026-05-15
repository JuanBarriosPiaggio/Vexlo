import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'

export const metadata: Metadata = {
  title: 'Why Consistent Business Listings Matter for UK Local Search | Vexlo',
  description:
    'Inconsistent NAP data across directories confuses Google and costs you ranking. Here is why consistent business listings are one of the highest-impact, lowest-effort SEO wins available to UK small businesses.',
  keywords: [
    'business listings UK',
    'NAP consistency UK',
    'local citations SEO UK',
    'Google Business Profile optimisation',
    'local SEO small business UK',
    'consistent business information directories',
    'Yell Thomson Local citations',
    'local search ranking factors UK',
  ],
  alternates: { canonical: `${siteUrl}/articles/why-consistent-business-listings-matter-uk` },
  openGraph: {
    url: `${siteUrl}/articles/why-consistent-business-listings-matter-uk`,
    title: 'Why Consistent Business Listings Matter for UK Local Search',
    description:
      'Inconsistent name, address, and phone number data across directories silently destroys your local SEO. Here is how to fix it.',
    images: [{ url: `${siteUrl}/vexlo_logo.png`, width: 1200, height: 630, alt: 'Business Listings SEO' }],
  },
}

export default function BusinessListingsArticle() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '120px 24px 80px' }}>

        {/* Header */}
        <div className="mb-10">
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-6"
            style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706' }}
          >
            Local SEO
          </span>
          <h1
            className="font-display text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', letterSpacing: '0.02em' }}
          >
            Why Consistent Business Listings Matter for UK Local Search
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#888' }}>
            Most UK small businesses have their name, address, and phone number listed inconsistently across the web — and it is quietly costing them rankings, trust, and calls. Here is everything you need to know.
          </p>
          <div className="flex items-center gap-6 mt-6 pt-6" style={{ borderTop: '1px solid #2a2a2a' }}>
            <span className="text-xs" style={{ color: '#888' }}>8 min read</span>
            <span className="text-xs" style={{ color: '#888' }}>Local SEO</span>
          </div>
        </div>

        {/* Body */}
        <div className="prose-custom" style={{ color: '#c8c8c8', lineHeight: 1.8, fontSize: '1rem' }}>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            What is NAP consistency — and why does it matter?
          </h2>
          <p>
            NAP stands for Name, Address, Phone number. It is the basic information that identifies your business across the internet. Every directory, review site, and local data aggregator holds a copy of this information — and if those copies do not match, it creates a problem.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Search engines like Google cross-reference your business information across dozens (sometimes hundreds) of websites to verify that you are a legitimate, established business. When the information matches consistently, Google gains confidence. When it does not — when your phone number is listed differently on Yell than on Google Business Profile, or when your address uses &ldquo;St&rdquo; in some places and &ldquo;Street&rdquo; in others — Google loses confidence in your data.
          </p>
          <p style={{ marginTop: '1rem' }}>
            And less confidence means lower rankings.
          </p>

          <div
            className="my-8 p-6 rounded-xl"
            style={{ background: 'rgba(217,119,6,0.08)', border: '1px solid rgba(217,119,6,0.25)' }}
          >
            <p className="font-bold text-sm mb-1" style={{ color: '#d97706' }}>Key Insight</p>
            <p className="text-sm leading-relaxed" style={{ color: '#e8e8e8' }}>
              According to Moz&apos;s annual Local Search Ranking Factors survey, citation signals (the consistency and volume of your business information across directories) account for roughly 11% of local pack ranking factors. That makes it one of the top five things Google looks at when deciding who ranks in the local 3-pack.
            </p>
          </div>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            The directories that actually matter for UK businesses
          </h2>
          <p>
            Not all directories carry the same weight. The ones that matter most are those with high domain authority (DA) — meaning Google already considers them trustworthy and authoritative sources. When your business is listed consistently on these sites, Google treats it as strong corroborating evidence.
          </p>
          <p style={{ marginTop: '1rem' }}>Here are the key UK-relevant directories to prioritise:</p>

          <div className="my-6 flex flex-col gap-3">
            {[
              { name: 'Google Business Profile', da: 'DA 100', note: 'The single most important listing. Everything starts here.' },
              { name: 'Yell.com', da: 'DA 87', note: 'The UK\'s largest business directory. High authority, widely trusted by Google.' },
              { name: 'Thomson Local', da: 'DA 76', note: 'Legacy UK directory with strong local search presence.' },
              { name: 'Yelp UK', da: 'DA 94', note: 'Global platform with significant authority. Used by both consumers and aggregators.' },
              { name: 'Apple Maps', da: 'DA 100', note: 'Critical for iOS users — which is over 50% of the UK smartphone market.' },
              { name: 'Bing Places', da: 'DA 100', note: 'Often overlooked. Bing feeds data to Alexa and Cortana as well.' },
              { name: 'Facebook Business', da: 'DA 96', note: 'Social signal with real citation weight. Many consumers also search directly on Facebook.' },
              { name: 'Trustpilot', da: 'DA 93', note: 'Trusted review and business data source for UK consumers and Google.' },
              { name: 'Checkatrade', da: 'DA 75', note: 'Highly relevant for UK trades specifically. Strong industry authority.' },
              { name: 'TrustATrader', da: 'DA 64', note: 'Another trade-specific directory with local SEO signal value.' },
            ].map((dir, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 p-4 rounded-xl"
                style={{ background: '#111111', border: '1px solid #2a2a2a' }}
              >
                <div>
                  <div className="font-bold text-sm" style={{ color: '#fff' }}>{dir.name}</div>
                  <div className="text-xs mt-1 leading-snug" style={{ color: '#888' }}>{dir.note}</div>
                </div>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{ background: 'rgba(74,222,128,0.1)', color: '#4ade80' }}
                >
                  {dir.da}
                </span>
              </div>
            ))}
          </div>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            How inconsistent listings actually hurt your rankings
          </h2>
          <p>
            Here is a real-world scenario. Say your business is called &ldquo;Bright Spark Electrical.&rdquo; You are listed on Yell as &ldquo;Bright Spark Electrical Ltd&rdquo;, on Google Business Profile as &ldquo;Bright Spark Electrical&rdquo;, on Thomson Local as &ldquo;Bright Spark Elec&rdquo;, and on Facebook as &ldquo;Bright Spark - Electrical Services.&rdquo; Your phone number was updated two years ago but the old one still appears on three of these sites.
          </p>
          <p style={{ marginTop: '1rem' }}>
            From Google&apos;s perspective, it is not entirely sure these are the same business. The data is contradictory. So instead of boosting your local ranking, those directory listings are doing nothing — or actively adding noise to the signal.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Meanwhile, your competitor down the road has identical NAP data across 40 directories, 60 recent Google reviews, and a fully optimised Google Business Profile. Google&apos;s algorithm has maximum confidence in their data — and they rank above you, even if your work is better.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            The hidden cost: customer confusion
          </h2>
          <p>
            Beyond Google rankings, inconsistent listings create a practical problem: your customers cannot reach you.
          </p>
          <p style={{ marginTop: '1rem' }}>
            If a customer finds your old phone number on Thomson Local and calls it, they hit a dead line. They do not try again — they call the next business. If they find your old address and drive to a location you moved from two years ago, that is a lost customer and a one-star review waiting to happen.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Every outdated or inconsistent listing is a potential lost customer. And the problem compounds over time — the longer incorrect data exists, the more it gets scraped and redistributed by data aggregators, spreading the wrong information even further.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            What &ldquo;consistent&rdquo; actually means in practice
          </h2>
          <p>
            Consistency does not just mean using the same name everywhere. It means using exactly the same formatting, capitalisation, and spelling. Here is what to standardise:
          </p>

          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }} className="flex flex-col gap-2">
            {[
              { label: 'Business name', detail: 'Decide: Ltd or no Ltd. Decide: abbreviated or full. Pick one and use it everywhere.' },
              { label: 'Address', detail: 'Street vs St. Road vs Rd. Same postcode format. Same county (or no county). Consistent from listing to listing.' },
              { label: 'Phone number', detail: 'Always the same number. If you change your number, update every listing immediately.' },
              { label: 'Website URL', detail: 'Always use the same format — with or without www, with or without a trailing slash.' },
              { label: 'Business category', detail: 'Choose the most accurate primary category and apply it consistently where possible.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#e8e8e8' }}>
                <span style={{ color: '#d97706', fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span><strong style={{ color: '#fff' }}>{item.label}:</strong> {item.detail}</span>
              </li>
            ))}
          </ul>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            The relationship between listings and reviews
          </h2>
          <p>
            Consistent listings and Google reviews are not separate strategies — they work together. Here is why:
          </p>
          <p style={{ marginTop: '1rem' }}>
            A well-optimised, consistent Google Business Profile with accurate information makes it easier for customers to find your review page. It also makes your business more visible in the first place — so more customers see you, engage with you, and eventually leave reviews.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Reviews then reinforce the local authority your listings have built. The two signals compound: better listings help you get seen, more reviews help you rank higher, higher rankings get you more visibility, and more visibility gets you more reviews.
          </p>
          <p style={{ marginTop: '1rem' }}>
            This is why businesses that manage both together — consistent listings and automated review requests — tend to see compounding results rather than incremental ones. See how Vexlo handles the{' '}
            <Link href="/google-reviews" style={{ color: '#d97706' }}>
              Google review side automatically
            </Link>.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            How to audit your current listings
          </h2>
          <p>
            Before you can fix inconsistent listings, you need to know what is out there. Here is a straightforward audit process:
          </p>

          <ol style={{ marginTop: '1rem', paddingLeft: '1.5rem' }} className="flex flex-col gap-3">
            {[
              'Search for your business name and phone number in Google. Note every directory listing that appears.',
              'Search for your business name combined with your town or city and check the first two pages of results.',
              'Visit each listing and check for accuracy: correct name, current address, current phone number, correct website URL.',
              'Note every discrepancy — even small ones like &ldquo;Ltd&rdquo; vs no &ldquo;Ltd&rdquo; count.',
              'Claim ownership of every listing you have not already claimed — most directories have a free claim process.',
              'Update incorrect information and request removal of duplicate or closed listings.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#c8c8c8' }}>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706', marginTop: '1px' }}
                >
                  {i + 1}
                </span>
                <span dangerouslySetInnerHTML={{ __html: step }} />
              </li>
            ))}
          </ol>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            How long does it take to see results?
          </h2>
          <p>
            Citation signals are not instant. Google crawls and processes directory data over weeks and months. Generally, you can expect:
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }} className="flex flex-col gap-2">
            {[
              '2–4 weeks: Google starts re-crawling updated listings',
              '4–8 weeks: Improved local ranking visibility for branded searches',
              '2–4 months: Meaningful local 3-pack improvements for competitive keywords',
              '6+ months: Full compounding effect when combined with ongoing review generation',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#c8c8c8' }}>
                <span style={{ color: '#d97706', fontWeight: 700, flexShrink: 0 }}>→</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: '1rem' }}>
            This is why it is worth starting now. The businesses ranking in your area today almost certainly started their local SEO groundwork months or years ago. Every month you delay is another month they extend their lead.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginTop: '2.5rem', marginBottom: '1rem' }}>
            How Vexlo handles listings for your business
          </h2>
          <p>
            Managing listings across 40+ directories is tedious work that most business owners never get to. Vexlo handles it for you — auditing your current listings, correcting inconsistencies, and maintaining accurate data across the directories that move the needle.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Combined with Vexlo&apos;s automated Google review generation, you get a complete local SEO foundation built and maintained without taking time away from running your business.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            <Link href="/listings" style={{ color: '#d97706', fontWeight: 700 }}>
              Find out more about Vexlo&apos;s Listings Management →
            </Link>
          </p>

          {/* CTA box */}
          <div
            className="my-10 p-8 rounded-2xl text-center"
            style={{ background: 'linear-gradient(135deg, #1a1000, #2d1900)', border: '1px solid rgba(217,119,6,0.3)' }}
          >
            <div className="text-2xl mb-3">📍</div>
            <h3 className="font-display text-white mb-3" style={{ fontSize: '1.5rem' }}>
              Get your listings right — and keep them right.
            </h3>
            <p className="text-sm mb-6 mx-auto" style={{ color: '#888', maxWidth: '380px' }}>
              Vexlo audits, fixes, and maintains your business listings across all the directories that matter — alongside automated Google reviews and missed-call capture.
            </p>
            <Link
              href="/enquiry"
              className="inline-flex items-center px-7 py-3.5 rounded text-sm font-bold tracking-wide text-white transition-all duration-200 hover:brightness-110"
              style={{ background: '#d97706' }}
            >
              Book a Free Demo →
            </Link>
          </div>

          {/* Related articles */}
          <div style={{ borderTop: '1px solid #2a2a2a', marginTop: '3rem', paddingTop: '3rem' }}>
            <h3 className="font-bold text-sm mb-5" style={{ color: '#fff' }}>Related articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  href: '/google-reviews',
                  tag: 'Feature',
                  title: 'Automated Google Review Management',
                  excerpt: 'How Vexlo sends review requests after every job and replies automatically.',
                },
                {
                  href: '/articles/google-reviews-recency-vs-quantity',
                  tag: 'Reputation Management',
                  title: 'Google Reviews: Why Recency Beats Quantity',
                  excerpt: 'A business with 20 recent reviews will outrank one with 200 old ones.',
                },
                {
                  href: '/articles/google-review-ranking-factors-explained',
                  tag: 'SEO',
                  title: 'Google Review Ranking Factors Explained',
                  excerpt: 'Volume, recency, replies, keywords — here is exactly what Google weighs.',
                },
                {
                  href: '/articles/how-to-get-more-google-reviews-trades',
                  tag: 'Reputation Management',
                  title: 'How to Get More Google Reviews as a Tradesperson',
                  excerpt: 'Practical tactics for a steady stream of 5-star reviews without begging.',
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
