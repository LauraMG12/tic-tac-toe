export interface IconProps {
  size: SvgIconSize;
  color: SvgIconColor;
  style?: SvgIconType;
}

const SVG_ICON_COLOR = [
  'currentColor',
  'blue',
  'dark-blue',
  'orange',
  'dark-orange',
  'silver',
  'dark-navy',
] as const;
export type SvgIconColor = (typeof SVG_ICON_COLOR)[number];

export const SVG_ICON_COLOR_MAP: Record<SvgIconColor, string> = {
  currentColor: getCssCustomPropertyValue('currentColor'),
  blue: getCssCustomPropertyValue('blue'),
  'dark-blue': getCssCustomPropertyValue('dark-blue'),
  orange: getCssCustomPropertyValue('orange'),
  'dark-orange': getCssCustomPropertyValue('dark-orange'),
  silver: getCssCustomPropertyValue('silver'),
  'dark-navy': getCssCustomPropertyValue('dark-navy'),
};

const SVG_ICON_SIZE = ['20', '32', '64'] as const;
export type SvgIconSize = (typeof SVG_ICON_SIZE)[number];

const SVG_ICON_STYLE = ['fill', 'stroke'] as const;
export type SvgIconType = (typeof SVG_ICON_STYLE)[number];

export function getCssCustomPropertyValue(propertyName: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(
    `--${propertyName}`
  );
}
