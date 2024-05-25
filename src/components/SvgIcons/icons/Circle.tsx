import { IconProps, SVG_ICON_COLOR_MAP } from '../SvgIcon.model';

export default function Circle(props: IconProps) {
  const {
    size,
    color,
    style = 'fill', // Default value for style
  } = props;
  const iconColor = SVG_ICON_COLOR_MAP[color];
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.97 15.87C31.97 7.107 24.865 0 16.1 0 7.335 0 .23 7.106.23 15.87c0 8.766 7.105 15.871 15.87 15.871 8.765 0 15.87-7.105 15.87-15.87Zm-22.336 0a6.466 6.466 0 1 1 12.932 0 6.466 6.466 0 0 1-12.932 0Z"
          fill={style === 'fill' ? iconColor : undefined}
          stroke={style === 'stroke' ? iconColor : undefined}
        />
      </svg>
    </>
  );
}
