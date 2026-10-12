import {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  Header,
  Packer,
  PageNumber,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx'
import { ONBOARDING_SERVICES, ONBOARDING_STATUSES, type OnboardingRecord } from './types'

const AMBER = 'D97706'
const MUTED = '666666'
const LABEL = '333333'
const VALUE = '222222'

function formatDate(iso: string | null | undefined) {
  if (!iso) return '—'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })
}

function display(value: string | undefined | null) {
  const text = (value ?? '').trim()
  return text || '—'
}

function heading(text: string) {
  return new Paragraph({
    spacing: { before: 400, after: 140 },
    children: [new TextRun({ text, bold: true, size: 28, color: AMBER, font: 'Calibri' })],
  })
}

function subheading(text: string) {
  return new Paragraph({
    spacing: { before: 260, after: 80 },
    children: [new TextRun({ text, bold: true, size: 22, color: '111111', font: 'Calibri' })],
  })
}

function fieldTable(fields: [string, string][]) {
  const borders = {
    top: { style: BorderStyle.SINGLE, size: 4, color: 'E5E5E5' },
    bottom: { style: BorderStyle.SINGLE, size: 4, color: 'E5E5E5' },
    left: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
    right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  }

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: fields.map(([label, value], i) => {
      const fill = i % 2 === 0 ? 'FAFAFA' : 'FFFFFF'
      const lines = display(value).split(/\r?\n/)
      return new TableRow({
        children: [
          new TableCell({
            borders,
            width: { size: 32, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill },
            margins: { top: 60, bottom: 60, left: 80, right: 80 },
            children: [
              new Paragraph({
                children: [new TextRun({ text: label, bold: true, size: 20, font: 'Calibri', color: LABEL })],
              }),
            ],
          }),
          new TableCell({
            borders,
            width: { size: 68, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill },
            margins: { top: 60, bottom: 60, left: 80, right: 80 },
            children: lines.map(
              (line) =>
                new Paragraph({
                  children: [new TextRun({ text: line || '—', size: 20, font: 'Calibri', color: VALUE })],
                })
            ),
          }),
        ],
      })
    }),
  })
}

export function onboardingDocFileName(record: OnboardingRecord) {
  const raw = record.client.businessName || record.slug
  const slug = raw
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
  return `${slug || record.slug}-onboarding.docx`
}

export async function buildOnboardingDocx(record: OnboardingRecord) {
  const name = record.client.businessName || record.slug
  const status = ONBOARDING_STATUSES.find((s) => s.id === record.admin.status)?.label || record.admin.status
  const services = record.admin.services
    .map((id) => ONBOARDING_SERVICES.find((s) => s.id === id)?.label || id)
    .join(', ')

  const doc = new Document({
    creator: 'Vexlo',
    title: `${name} — Onboarding`,
    description: 'Client onboarding record',
    sections: [
      {
        properties: {
          page: {
            margin: { top: 720, right: 720, bottom: 720, left: 720 },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'Vexlo  ·  Client onboarding',
                    italics: true,
                    size: 18,
                    color: MUTED,
                    font: 'Calibri',
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({ text: 'vexlo.co.uk  ·  Page ', size: 16, color: MUTED, font: 'Calibri' }),
                  PageNumber.CURRENT,
                ],
              }),
            ],
          }),
        },
        children: [
          new Paragraph({
            spacing: { after: 80 },
            children: [new TextRun({ text: name, bold: true, size: 48, color: '111111', font: 'Calibri' })],
          }),
          new Paragraph({
            spacing: { after: 240 },
            children: [
              new TextRun({
                text: 'Onboarding record  ·  includes Vexlo notes the client cannot see',
                size: 20,
                color: MUTED,
                font: 'Calibri',
              }),
            ],
          }),
          fieldTable([
            ['Project code', record.slug],
            ['Status', status],
            ['Created', formatDate(record.createdAt)],
            ['Last updated', formatDate(record.updatedAt)],
            ['Client last saved', formatDate(record.clientSubmittedAt)],
          ]),

          heading('Vexlo'),
          subheading('Services and scope'),
          fieldTable([
            ['Services included', services || '—'],
            ['What we are building', record.admin.scope],
            ['Target go-live', record.admin.goLiveDate],
            ['Keywords we are targeting', record.admin.targetKeywords],
            ['Competitors', record.admin.competitors],
          ]),
          subheading('Internal — client cannot see this'),
          fieldTable([
            ['Internal notes', record.admin.internalNotes],
            ['GHL sub-account', record.admin.ghlSubAccount],
            ['GHL location ID', record.admin.ghlLocationId],
          ]),

          heading('Client details'),
          subheading('Contact'),
          fieldTable([
            ['Name', record.client.contactName],
            ['Email', record.client.email],
            ['Telephone', record.client.phone],
          ]),
          subheading('Business identity'),
          fieldTable([
            ['Business name', record.client.businessName],
            ['Trading name', record.client.tradingName],
            ['Companies House number', record.client.companyNumber],
          ]),
          subheading('Address — used for listings (NAP)'),
          fieldTable([
            ['Address line 1', record.client.addressLine1],
            ['Address line 2', record.client.addressLine2],
            ['Town / city', record.client.city],
            ['Postcode', record.client.postcode],
          ]),
          subheading('Online presence'),
          fieldTable([
            ['Current website', record.client.website],
            ['Google Business Profile link', record.client.googleBusinessUrl],
            ['Google account email for the Business Profile', record.client.googleAccountEmail],
            ['Facebook page URL', record.client.facebookUrl],
            ['Instagram URL', record.client.instagramUrl],
            ['Anywhere else they are listed', record.client.otherProfiles],
          ]),
          subheading('Listings details'),
          fieldTable([
            ['Primary business category', record.client.primaryCategory],
            ['Extra categories', record.client.extraCategories],
            ['Opening hours', record.client.openingHours],
            ['Existing directory logins / notes', record.client.existingDirectories],
          ]),
          subheading('What they do'),
          fieldTable([
            ['Services they offer', record.client.servicesOffered],
            ['Areas they cover', record.client.serviceAreas],
            ['Short description', record.client.shortDescription],
            ['Longer about / website copy notes', record.client.longDescription],
          ]),
          subheading('Website'),
          fieldTable([
            ['Logo URL or Dropbox/Drive link', record.client.logoUrl],
            ['Brand colours', record.client.brandColours],
            ['Domain registrar', record.client.domainRegistrar],
            ['Email on the domain account', record.client.domainLoginEmail],
            ['Software we should connect', record.client.integrations],
            ['How they take bookings today', record.client.bookingTool],
          ]),
          subheading('Reviews'),
          fieldTable([
            ['When to ask for a Google review', record.client.reviewRequestTiming],
            ['How review replies should sound', record.client.reviewReplyTone],
          ]),
          subheading('Anything else'),
          fieldTable([['Notes', record.client.extraNotes]]),
        ],
      },
    ],
  })

  const buffer = await Packer.toBuffer(doc)
  return { buffer, fileName: onboardingDocFileName(record) }
}
