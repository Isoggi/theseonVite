/**
 * Converts a string into a URL-friendly slug.
 * Example: "Understanding React Hooks" -> "understanding-react-hooks"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
