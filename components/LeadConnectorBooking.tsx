/** Lead Connector (HighLevel) booking calendar — used on /enquiry and inline CTA sections. */
export const LEAD_CONNECTOR_BOOKING_ID = 'Kt06hCLO3cIoBPgXWnVD'

/**
 * Mobile height must fit the full “enter details” step inside the iframe so we can use
 * scrolling="no" — avoids the nested iframe scrollbar; users scroll the page instead.
 */
const IFRAME_H_MOBILE = 1680

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
      className={`w-full min-h-[1680px] md:min-h-[800px] ${className}`.trim()}
    >
      <iframe
        src={`https://api.leadconnectorhq.com/widget/booking/${LEAD_CONNECTOR_BOOKING_ID}`}
        className="block w-full max-w-full border-0 md:!h-[800px]"
        style={{
          height: IFRAME_H_MOBILE,
          border: 'none',
          overflow: 'hidden',
        }}
        scrolling="no"
        id={iframeId}
        title="Book a free demo with Vexlo"
      />
    </div>
  )
}
