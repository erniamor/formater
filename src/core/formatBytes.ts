/**
 * formatBytes
 * 
 * Format a bytes number to human readable string
 * 
 * @param bytes number
 * @param decimals number
 * @returns string
 */
export function formatBytes(bytes: number, decimals?: number): string {
  if (bytes == 0) return '0 Byte';
  var k = 1000;
  var dm = (decimals || 0) + 1 || 3;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toPrecision(dm) + ' ' + sizes[i];
}
