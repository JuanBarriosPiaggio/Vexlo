/** Lead Connector (HighLevel) embedded form — same form used on /enquiry and inline sections. */
export const LEAD_CONNECTOR_FORM_ID = 'isPqRscYHlYOe94myKiG'

const FORM_HEIGHT = 616

export default function LeadConnectorForm({
  instanceId = 'default',
  className = '',
}: {
  instanceId?: string
  className?: string
}) {
  const iframeId = `lc-form-${LEAD_CONNECTOR_FORM_ID}-${instanceId}`

  return (
    <div className={className}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${LEAD_CONNECTOR_FORM_ID}`}
        style={{
          width: '100%',
          height: `${FORM_HEIGHT}px`,
          border: 'none',
          borderRadius: '8px',
          display: 'block',
        }}
        id={iframeId}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Vexlo enquiry"
        data-height={String(FORM_HEIGHT)}
        data-layout-iframe-id={iframeId}
        data-form-id={LEAD_CONNECTOR_FORM_ID}
        title="Contact Vexlo"
      />
    </div>
  )
}
