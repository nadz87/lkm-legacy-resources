import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function CommercialIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 21v-4h6v4" />
      <path d="M8 7h1M11 7h1M14 7h1M8 11h1M11 11h1M14 11h1" />
    </svg>
  );
}

export function FoodBeverageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M17 9h2a2 2 0 0 1 0 4h-2" />
      <path d="M8 2v2M12 2v2M16 2v2" />
    </svg>
  );
}

export function RetailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 8h12l1 12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function FactoryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21V11l6 4v-4l6 4v-4l6 4v6H3Z" />
      <path d="M7 21v-4M12 21v-4M17 21v-4" />
    </svg>
  );
}

export function InstitutionalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21h18" />
      <path d="M4 21V10M8 21V10M12 21V10M16 21V10M20 21V10" />
      <path d="M2 10l10-6 10 6" />
    </svg>
  );
}
