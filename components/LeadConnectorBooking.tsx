/** Lead Connector (HighLevel) booking calendar — used on /enquiry and inline CTA sections. */
export const LEAD_CONNECTOR_BOOKING_ID = 'Kt06hCLO3cIoBPgXWnVD'

const BOOKING_MIN_HEIGHT = 720

export default function LeadConnectorBooking({
  instanceId = 'default',
  className = '',
}: {
  instanceId?: string
  className?: string
}) {
  const iframeId = `${LEAD_CONNECTOR_BOOKING_ID}_${instanceId}`

  return (
    <div className={className} style={{ minHeight: BOOKING_MIN_HEIGHT }}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/booking/${LEAD_CONNECTOR_BOOKING_ID}`}
        style={{
          width: '100%',
          minHeight: BOOKING_MIN_HEIGHT,
          border: 'none',
          overflow: 'hidden',
          display: 'block',
        }}
        scrolling="no"
        id={iframeId}
        title="Book a free demo with Vexlo"
      />
    </div>
  )
}
