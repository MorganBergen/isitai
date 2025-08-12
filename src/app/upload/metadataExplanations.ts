export interface MetadataExplanation {
  title: string;
  description: string;
}

// Explanations used when clicking on metadata keys in the grid view
export const metadataExplanations: Record<string, MetadataExplanation> = {
  'File Modification Date/Time': {
    title: 'Modification Date/Time',
    description:
      "Filesystem timestamp for when the file's data last changed. Can differ from when the photo was taken due to edits/exports/transfers.",
  },
  'File Access Date/Time': {
    title: 'Access Date/Time',
    description:
      "The last time the OS or an app accessed the file. Doesn't imply the file was modified.",
  },
  'File Inode Change Date/Time': {
    title: 'Inode Change Date/Time',
    description:
      'Filesystem timestamp tracking changes to metadata like permissions or ownership (not file contents).',
  },
  'Exposure Time': {
    title: 'Exposure Time',
    description:
      "How long the shutter was open. Shorter (e.g., 1/1000) freezes motion; longer (e.g., 1/30) allows more light but can blur motion.",
  },
  'F Number': {
    title: 'F Number (Aperture)',
    description:
      'Size of the lens opening. Lower values (f/1.8) let in more light and create background blur; higher values (f/16) keep more in focus.',
  },
  ISO: {
    title: 'ISO Sensitivity',
    description:
      'Sensor light sensitivity. Lower ISO (100) is cleaner but needs more light; higher ISO (3200) works in dark scenes with more noise.',
  },
  'Focal Length': {
    title: 'Focal Length',
    description:
      'Optical distance determining angle of view. Shorter (18mm) is wider; longer (200mm) magnifies distant subjects.',
  },
  'Focal Length In 35mm Format': {
    title: '35mm Equivalent Focal Length',
    description:
      'Focal length normalized to 35mm film to compare lenses across different sensor sizes.',
  },
  'GPS Latitude': {
    title: 'GPS Latitude',
    description:
      'North–south position. Positive is north of the equator; negative is south.',
  },
  'GPS Longitude': {
    title: 'GPS Longitude',
    description:
      'East–west position. Positive is east of the Prime Meridian; negative is west.',
  },
  'GPS Altitude': {
    title: 'GPS Altitude',
    description:
      'Elevation relative to sea level where the photo was taken.',
  },
  'White Balance': {
    title: 'White Balance',
    description:
      'Adjusts colors to make whites appear neutral under various lighting. Auto attempts to detect the light source.',
  },
  Flash: {
    title: 'Flash',
    description:
      'Indicates whether the flash fired and what mode (auto/forced/red-eye) was used.',
  },
};

