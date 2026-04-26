/** Lead Connector (HighLevel) booking calendar — used on /enquiry and inline CTA sections. */
export const LEAD_CONNECTOR_BOOKING_ID = 'Kt06hCLO3cIoBPgXWnVD'

/** Tall on small screens so the detail step + submit stay reachable; md+ is more compact. */
const IFRAME_HEIGHT_MOBILE = 1180

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
      className={`w-full touch-pan-y min-h-[1180px] md:min-h-[780px] ${className}`.trim()}
    >
      {/*
        scrolling must stay enabled: GHL’s multi-step booking is taller than the viewport on mobile.
        overflow:hidden + scrolling=no trapped users below the fold with no way to submit.
      */}
      <iframe
        src={`https://api.leadconnectorhq.com/widget/booking/${LEAD_CONNECTOR_BOOKING_ID}`}
        className="block w-full max-w-full border-0 md:!h-[780px]"
        style={{
          height: IFRAME_HEIGHT_MOBILE,
          overflow: 'auto',
        }}
        scrolling="yes"
        id={iframeId}
        title="Book a free demo with Vexlo"
      />
    </div>
  )
}
