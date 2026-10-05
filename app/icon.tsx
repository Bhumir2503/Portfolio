import { SiteIcon } from "@/lib/site-icon"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return SiteIcon(size.width)
}
