/** Lead Connector (HighLevel) booking calendar — used on /enquiry and inline CTA sections. */
export const LEAD_CONNECTOR_BOOKING_ID = 'Kt06hCLO3cIoBPgXWnVD'

/**
 * Heights must accommodate the tallest GHL step — the "Enter Details" form after
 * a slot is selected. That step is taller than the initial calendar view.
 * Users scroll the page; scrolling="no" prevents the nested iframe scrollbar.
 */
const IFRAME_H_MOBILE = 1980
const IFRAME_H_DESKTOP = 1100

export default function LeadConnectorBooking({
  instanceId = 'default',
  className = '',
}: {
  instanceId?: string
  className?: string
}) {
  const iframeId = `${LEAD_CONNECTOR_BOOKING_ID}_${instanceId}`

  return (
    <div
      className={`w-full min-h-[1980px] md:min-h-[1100px] pb-28 md:pb-10 ${className}`.trim()}
    >
      <iframe
        src={`https://api.leadconnectorhq.com/widget/booking/${LEAD_CONNECTOR_BOOKING_ID}`}
        className="block w-full max-w-full border-0"
        style={{
          height: IFRAME_H_MOBILE,
          border: 'none',
          overflow: 'hidden',
        }}
        scrolling="no"
        id={iframeId}
        title="Book a free demo with Vexlo"
      />
      <style>{`
        @media (min-width: 768px) {
          #${iframeId} { height: ${IFRAME_H_DESKTOP}px !important; }
        }
      `}</style>
    </div>
  )
}
