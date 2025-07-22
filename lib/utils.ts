// For static export without basePath, just normalize internal paths
export function getInternalPath(path: string): string {
  // Don't modify external links
  if (path.startsWith("http")) {
    return path;
  }
  
  // For internal links, just ensure they start with /
  return path.startsWith("/") ? path : `/${path}`;
}