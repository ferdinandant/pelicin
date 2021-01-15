export default function extractHashFromTitle(title: string) {
  const result = title
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');

  return result;
}
