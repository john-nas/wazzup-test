import type { CateringEnquiry } from '../types/content'

export function submitCateringEnquiry(
  enquiry: CateringEnquiry,
): Promise<void> {
  // TODO: Connect catering enquiries to the confirmed production email,
  // API endpoint, Cloudflare Worker or form service. The prototype deliberately
  // does not transmit or retain personal information.
  void enquiry
  return Promise.resolve()
}
