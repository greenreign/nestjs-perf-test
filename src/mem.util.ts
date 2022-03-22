function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) {
    return '0 Bytes';
  }
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
}

export function formattedMem() {
  const usage = process.memoryUsage();
  return {
    rss: bytesToSize(usage.rss),
    heapTotal: bytesToSize(usage.heapTotal),
    heapUsed: bytesToSize(usage.heapUsed),
  };
}
