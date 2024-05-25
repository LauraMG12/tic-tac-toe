import { IconProps, SVG_ICON_COLOR_MAP } from '../SvgIcon.model';

export default function Cross(props: IconProps) {
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
          d="M27.681 1.634a3 3 0 0 0-4.243 0L16 9.073 8.562 1.634a3 3 0 0 0-4.243 0L1.634 4.32a3 3 0 0 0 0 4.243L9.073 16l-7.439 7.438a3 3 0 0 0 0 4.243l2.685 2.685a3 3 0 0 0 4.243 0L16 22.927l7.438 7.439a3 3 0 0 0 4.243 0l2.685-2.685a3 3 0 0 0 0-4.243L22.927 16l7.439-7.438a3 3 0 0 0 0-4.243L27.68 1.634Z"
          fill={style === 'fill' ? iconColor : undefined}
          stroke={style === 'stroke' ? iconColor : undefined}
        />
      </svg>
    </>
  );
}
