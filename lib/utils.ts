export const basePath = process.env.NODE_ENV === 'production' ? '/EyalLabelWebsite' : '';

export function getInternalPath(path: string): string {
  // Don't add basePath if it's already included or if it's an external link
  if (path.startsWith('http') || path.startsWith(basePath)) {
    return path;
  }
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}