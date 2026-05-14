import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  ArrowUpDown,
  Aperture,
  BadgeInfo,
  Binary,
  Blend,
  Braces,
  Calendar,
  CalendarClock,
  Camera,
  Clock,
  FileType,
  Focus,
  Gauge,
  Image,
  MapPin,
  Palette,
  RotateCw,
  Ruler,
  Sun,
  Tag,
  Zap,
} from "lucide-react";

export type MetadataTileIconChoice = {
  /** Lucide export name — matches the icon you see on https://lucide.dev/icons */
  iconName: string;
  Icon: LucideIcon;
};

function matches(raw: string, ...needles: string[]): boolean {
  const n = raw.toLowerCase();
  return needles.some((needle) => n.includes(needle.toLowerCase()));
}

/**
 * Picks a Lucide icon whose export name matches the glyph (see lucide.dev).
 * `iconName` is always the same string as the component's export name from `lucide-react`.
 */
export function getMetadataTileIconChoice(rawKey: string): MetadataTileIconChoice {
  const key = rawKey.trim();

  if (matches(key, "latitude", "longitude", "altitude", "gps")) {
    return { iconName: "MapPin", Icon: MapPin };
  }

  if (
    matches(key, "exposuretime", "shutterspeed") ||
    key === "Exposure Time"
  ) {
    return { iconName: "Clock", Icon: Clock };
  }

  if (matches(key, "fnumber", "f number", "aperture")) {
    return { iconName: "Aperture", Icon: Aperture };
  }

  if (key === "ISO" || matches(key, "iso speed", "photographic sensitivity")) {
    return { iconName: "Gauge", Icon: Gauge };
  }

  if (matches(key, "focal")) {
    return { iconName: "Focus", Icon: Focus };
  }

  if (key === "Flash" || matches(key, "flash")) {
    return { iconName: "Zap", Icon: Zap };
  }

  if (matches(key, "white balance")) {
    return { iconName: "Blend", Icon: Blend };
  }

  if (matches(key, "make", "model", "lens", "body serial")) {
    return { iconName: "Camera", Icon: Camera };
  }

  if (
    matches(key, "datetime", "date/time", "createdate", "modifydate", "date time")
  ) {
    if (matches(key, "time") && !matches(key, "timezone")) {
      return { iconName: "CalendarClock", Icon: CalendarClock };
    }
    return { iconName: "Calendar", Icon: Calendar };
  }

  if (matches(key, "software", "creator", "processor")) {
    return { iconName: "Braces", Icon: Braces };
  }

  if (matches(key, "orientation", "rotation")) {
    return { iconName: "RotateCw", Icon: RotateCw };
  }

  if (
    matches(key, "imagewidth", "pixelxdimension", "sensor width") ||
    (matches(key, "width") && !matches(key, "height"))
  ) {
    return { iconName: "ArrowLeftRight", Icon: ArrowLeftRight };
  }

  if (
    matches(key, "imageheight", "pixelydimension", "sensor height") ||
    (matches(key, "height") && !matches(key, "width"))
  ) {
    return { iconName: "ArrowUpDown", Icon: ArrowUpDown };
  }

  if (matches(key, "bit depth", "bitdepth", "sample")) {
    return { iconName: "Binary", Icon: Binary };
  }

  if (matches(key, "colorspace", "color space", "profile")) {
    return { iconName: "Palette", Icon: Palette };
  }

  if (matches(key, "compression", "compress")) {
    return { iconName: "Binary", Icon: Binary };
  }

  if (matches(key, "mime", "format", "filetype")) {
    return { iconName: "FileType", Icon: FileType };
  }

  if (matches(key, "xresolution", "yresolution", "dpi", "resolution")) {
    return { iconName: "Ruler", Icon: Ruler };
  }

  if (matches(key, "exposure", "compensation", "metering", "brightness")) {
    return { iconName: "Sun", Icon: Sun };
  }

  if (matches(key, "image", "thumbnail", "preview") && !matches(key, "width", "height")) {
    return { iconName: "Image", Icon: Image };
  }

  if (matches(key, "error", "warning")) {
    return { iconName: "BadgeInfo", Icon: BadgeInfo };
  }

  return { iconName: "Tag", Icon: Tag };
}

type Props = {
  rawKey: string;
  className?: string;
  size?: number;
};

export function MetadataTileIcon({ rawKey, className, size = 22 }: Props) {
  const { Icon, iconName } = getMetadataTileIconChoice(rawKey);
  return (
    <Icon
      className={className}
      size={size}
      strokeWidth={1.75}
      aria-hidden
      data-lucide-icon={iconName}
    />
  );
}
