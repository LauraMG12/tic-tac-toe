interface CircleIconProps {
  fill: string;
}

export default function CircleIcon(props: CircleIconProps) {
  return (
    <>
      <svg
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.97 15.87C31.97 7.107 24.865 0 16.1 0 7.335 0 .23 7.106.23 15.87c0 8.766 7.105 15.871 15.87 15.871 8.765 0 15.87-7.105 15.87-15.87Zm-22.336 0a6.466 6.466 0 1 1 12.932 0 6.466 6.466 0 0 1-12.932 0Z"
          fill={props.fill}
        />
      </svg>
    </>
  );
}
