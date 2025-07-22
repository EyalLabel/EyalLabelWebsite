// For static export with basePath, Next.js automatically handles the basePath
// So we don't need to add it manually - just return the path as-is
import nextConfig from '../next.config.js';
export function getInternalPath(path: string): string {
  console.log(`getInternalPath called with path: ${path}`);
  // Don't modify external links
  if (path.startsWith('http')) {
    return path;
  }
  
  // For internal links, just ensure they start with / and let Next.js handle basePath
  console.log(`Returning internal path: ${path}`);
  console.log(`Next.js basePath: ${nextConfig.basePath}`);
  return path.startsWith('/') ? path : `${nextConfig.basePath}/${path}`;
}