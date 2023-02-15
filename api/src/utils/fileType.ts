export const fileType = (mime: string) => {
  const images = [
    'image/bmp',
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/tiff',
    'image/svg+xml',
  ];
  const documents = [
    'application/msword',
    'application/pdf',
    'text/csv',
    'application/vnd.ms-excel',
  ];
  const media = ['video/webm', 'video/x-msvideo', 'video/mpeg', 'video/ogg'];

  if (images.includes(mime)) {
    return 'image';
  }
  if (documents.includes(mime)) {
    return 'document';
  }
  if (media.includes(mime)) {
    return 'media';
  }
};
