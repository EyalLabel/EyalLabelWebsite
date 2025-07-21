// For static export with basePath, Next.js automatically handles the basePath
// So we don't need to add it manually - just return the path as-is
export function getInternalPath(path: string): string {
  // Don't modify external links
  if (path.startsWith('http')) {
    return path;
  }
  
  // For internal links, just ensure they start with / and let Next.js handle basePath
  return path.startsWith('/') ? path : `/${path}`;
}