const sharedProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  vectorEffect: "non-scaling-stroke"
};

const IconBase = ({ size = 32, children, className }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const BadgeRibbonCheckIcon = ({ size = 34, className }) => (
  <IconBase size={size} className={className}>
    <circle cx="16" cy="11.5" r="7.3" {...sharedProps} />
    <path d="M11.6 18.1L9.5 27l6.5-3.7L22.5 27l-2.1-8.9" {...sharedProps} />
    <path d="M12.8 11.7l2.1 2.1 4.2-4.2" {...sharedProps} />
  </IconBase>
);

export const NotepadPencilIcon = ({ size = 34, className }) => (
  <IconBase size={size} className={className}>
    <path d="M8 6h12.5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" {...sharedProps} />
    <path d="M12.3 6V4.8h4.8V6" {...sharedProps} />
    <path d="M10.5 12.2h7M10.5 16.2h5.8M10.5 20.1h4.2" {...sharedProps} />
    <path d="M19.4 18.7l5.2-5.2 1.8 1.8-5.2 5.2-2.5.7z" {...sharedProps} />
  </IconBase>
);

export const HomeOutlineIcon = ({ size = 34, className }) => (
  <IconBase size={size} className={className}>
    <path d="M5.5 14.1L16 5.8l10.5 8.3" {...sharedProps} />
    <path d="M8.3 13.9v11.3h15.4V13.9" {...sharedProps} />
    <path d="M14.2 25.2v-6.6h3.6v6.6" {...sharedProps} />
  </IconBase>
);

export const LocationMarkerCircleIcon = ({ size = 34, className }) => (
  <IconBase size={size} className={className}>
    <path
      d="M16 26.5s8.2-6.9 8.2-13.3A8.2 8.2 0 0 0 16 5a8.2 8.2 0 0 0-8.2 8.2C7.8 19.6 16 26.5 16 26.5z"
      {...sharedProps}
    />
    <circle cx="16" cy="13.2" r="2.8" {...sharedProps} />
  </IconBase>
);

export const BedIcon = ({ size = 16, className }) => (
  <IconBase size={size} className={className}>
    <path d="M4 17.5h24M4 17.5v6M28 17.5v6" {...sharedProps} />
    <path d="M6.5 17.5v-5a2 2 0 0 1 2-2h4.2a2 2 0 0 1 2 2v5" {...sharedProps} />
    <path d="M14.7 12.5h7a2 2 0 0 1 2 2v3" {...sharedProps} />
  </IconBase>
);

export const BathShowerIcon = ({ size = 16, className }) => (
  <IconBase size={size} className={className}>
    <path d="M5 16h22v3.2a3.3 3.3 0 0 1-3.3 3.3H8.3A3.3 3.3 0 0 1 5 19.2z" {...sharedProps} />
    <path d="M9.2 16v-4.2a2.4 2.4 0 0 1 2.4-2.4h1.1a2.4 2.4 0 0 1 2.4 2.4v4.2" {...sharedProps} />
    <path d="M20.6 7.7a2.8 2.8 0 0 1 2.8 2.8v.8" {...sharedProps} />
    <path d="M24.8 12.4v.1M22.8 12.6v.1M20.9 13.3v.1" {...sharedProps} />
  </IconBase>
);

export const GarageIcon = ({ size = 16, className }) => (
  <IconBase size={size} className={className}>
    <path d="M4.8 13.6L16 5.8l11.2 7.8" {...sharedProps} />
    <path d="M7.8 13.4v9h16.4v-9" {...sharedProps} />
    <path d="M11.4 22.4v-5.8h9.2v5.8" {...sharedProps} />
    <path d="M13.3 18.1h5.4M13.3 19.8h5.4" {...sharedProps} />
  </IconBase>
);

export const LivingAreasIcon = ({ size = 16, className }) => (
  <IconBase size={size} className={className}>
    <path d="M6.2 16.4h19.6v5.2H6.2z" {...sharedProps} />
    <path d="M7.8 16.4v-3a2.2 2.2 0 0 1 2.2-2.2h3.6a2.2 2.2 0 0 1 2.2 2.2v3M16.2 16.4v-3a2.2 2.2 0 0 1 2.2-2.2H22a2.2 2.2 0 0 1 2.2 2.2v3" {...sharedProps} />
    <path d="M8 21.6v2.2M24 21.6v2.2" {...sharedProps} />
  </IconBase>
);

export const DimensionArrowsIcon = ({ size = 16, className }) => (
  <IconBase size={size} className={className}>
    <path d="M4.5 16h23" {...sharedProps} />
    <path d="M4.5 16l3.2-3.2M4.5 16l3.2 3.2" {...sharedProps} />
    <path d="M27.5 16l-3.2-3.2M27.5 16l-3.2 3.2" {...sharedProps} />
    <path d="M9.6 10.7v10.6M22.4 10.7v10.6" {...sharedProps} />
  </IconBase>
);

export const PatioSunIcon = ({ size = 16, className }) => (
  <IconBase size={size} className={className}>
    <circle cx="22.2" cy="9.8" r="3.4" {...sharedProps} />
    <path d="M22.2 3.6v1.8M22.2 14.2V16M16 9.8h1.8M26.6 9.8h1.8M18 5.6l1.3 1.3M25.1 12.7l1.3 1.3" {...sharedProps} />
    <path d="M5 23.4h16M7.4 23.4V15.2h11.2v8.2M7.4 18.5h11.2" {...sharedProps} />
  </IconBase>
);

export const CustomHomesIcon = ({ size = 34, className }) => (
  <IconBase size={size} className={className}>
    <path d="M5.8 14L16 6.6 26.2 14" {...sharedProps} />
    <path d="M8.3 13.8v11h15.4v-11" {...sharedProps} />
    <path d="M14.4 24.8v-6.2h3.2v6.2" {...sharedProps} />
    <circle cx="23.1" cy="8.7" r="2.4" {...sharedProps} />
    <path d="M23.1 4.9v1.2M23.1 11.3v1.2M19.3 8.7h1.2M25.7 8.7h1.2" {...sharedProps} />
  </IconBase>
);

export const RenovationIcon = ({ size = 34, className }) => (
  <IconBase size={size} className={className}>
    <path d="M5.8 13.8L16 6.5l7.3 5.3" {...sharedProps} />
    <path d="M8.4 13.8v10.9h8.7" {...sharedProps} />
    <path d="M13 24.7v-5.8h3v5.8" {...sharedProps} />
    <rect x="18.7" y="14.2" width="8.4" height="8.4" rx="1.4" {...sharedProps} />
    <path d="M22.9 16.6v3.6M21.1 18.4h3.6" {...sharedProps} />
  </IconBase>
);

export const DesignConstructIcon = ({ size = 34, className }) => (
  <IconBase size={size} className={className}>
    <rect x="5.8" y="7.2" width="20.4" height="17.6" rx="2.2" {...sharedProps} />
    <path d="M10.4 11.2h7.8M10.4 15.1h5.8M10.4 18.9h4.1" {...sharedProps} />
    <path d="M18.6 20.8l5-5 1.8 1.8-5 5-2.4.7z" {...sharedProps} />
    <path d="M21.7 9.8l2.7 2.7" {...sharedProps} />
  </IconBase>
);

export const SpatialPlanningIcon = ({ size = 34, className }) => (
  <IconBase size={size} className={className}>
    <rect x="6.4" y="6.4" width="19.2" height="19.2" rx="2" {...sharedProps} />
    <path d="M12.8 6.4v19.2M19.2 6.4v19.2M6.4 12.8h19.2M6.4 19.2h19.2" {...sharedProps} />
    <circle cx="19.2" cy="12.8" r="1.6" {...sharedProps} />
  </IconBase>
);

export const ProjectManagementIcon = ({ size = 34, className }) => (
  <IconBase size={size} className={className}>
    <path d="M11.3 5.7h9.4" {...sharedProps} />
    <path d="M13.2 4.3h5.6a1.4 1.4 0 0 1 1.4 1.4v1.2h-8.4V5.7a1.4 1.4 0 0 1 1.4-1.4z" {...sharedProps} />
    <rect x="7.6" y="6.9" width="16.8" height="19" rx="2.2" {...sharedProps} />
    <path d="M11.2 12.2l1.4 1.4 2.1-2.1M11.2 17.2l1.4 1.4 2.1-2.1" {...sharedProps} />
    <path d="M17.4 12.3h4.3M17.4 17.3h4.3M11.2 22h10.5" {...sharedProps} />
  </IconBase>
);

export const ClientExperienceIcon = ({ size = 34, className }) => (
  <IconBase size={size} className={className}>
    <path d="M6.2 9.4h10.6a2.2 2.2 0 0 1 2.2 2.2v4.6a2.2 2.2 0 0 1-2.2 2.2h-3.2l-2.3 2.2v-2.2H8.4a2.2 2.2 0 0 1-2.2-2.2v-4.6a2.2 2.2 0 0 1 2.2-2.2z" {...sharedProps} />
    <path d="M18.1 8h6.1A1.9 1.9 0 0 1 26 9.9v3.8a1.9 1.9 0 0 1-1.9 1.9H22l-1.8 1.7v-1.7h-2.1a1.9 1.9 0 0 1-1.9-1.9V9.9A1.9 1.9 0 0 1 18.1 8z" {...sharedProps} />
    <circle cx="22.3" cy="22.1" r="3.6" {...sharedProps} />
    <path d="M20.7 22.1l1.3 1.3 2.3-2.3" {...sharedProps} />
  </IconBase>
);

export const ChatBubblesIcon = ({ size = 30, className }) => (
  <IconBase size={size} className={className}>
    <path d="M5.8 9.4h11.3a2.4 2.4 0 0 1 2.4 2.4v5.1a2.4 2.4 0 0 1-2.4 2.4h-3.8l-2.7 2.4v-2.4H8.2a2.4 2.4 0 0 1-2.4-2.4v-5.1a2.4 2.4 0 0 1 2.4-2.4z" {...sharedProps} />
    <path d="M18.3 6.8h6.5a2.2 2.2 0 0 1 2.2 2.2v4.2a2.2 2.2 0 0 1-2.2 2.2h-2.2l-1.9 1.9v-1.9h-2.4a2.2 2.2 0 0 1-2.2-2.2V9a2.2 2.2 0 0 1 2.2-2.2z" {...sharedProps} />
  </IconBase>
);

export const FilePencilIcon = ({ size = 30, className }) => (
  <IconBase size={size} className={className}>
    <path d="M8.4 5.8h10.8l4.4 4.4v15.6H8.4z" {...sharedProps} />
    <path d="M19.2 5.8v4.4h4.4" {...sharedProps} />
    <path d="M11.3 13.7h7.1M11.3 17.6h6" {...sharedProps} />
    <path d="M17.8 21.1l5.1-5.1 1.7 1.7-5.1 5.1-2.3.6z" {...sharedProps} />
  </IconBase>
);

export const ChecklistIcon = ({ size = 30, className }) => (
  <IconBase size={size} className={className}>
    <path d="M8.4 5.8h10.8l4.4 4.4v15.6H8.4z" {...sharedProps} />
    <path d="M19.2 5.8v4.4h4.4" {...sharedProps} />
    <path d="M11.4 14.8l1.6 1.6 2.3-2.3M11.4 19.4l1.6 1.6 2.3-2.3" {...sharedProps} />
    <path d="M18.1 15.2h3.3M18.1 19.8h3.3" {...sharedProps} />
  </IconBase>
);

export const HammerIcon = ({ size = 30, className }) => (
  <IconBase size={size} className={className}>
    <g transform="scale(1.3333)">
      <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" {...sharedProps} />
      <path d="m18 15 4-4" {...sharedProps} />
      <path
        d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"
        {...sharedProps}
      />
    </g>
  </IconBase>
);

export const MagnifierIcon = ({ size = 30, className }) => (
  <IconBase size={size} className={className}>
    <circle cx="13.2" cy="13.2" r="7.4" {...sharedProps} />
    <path d="M18.6 18.6l6.4 6.4" {...sharedProps} />
    <path d="M10.2 13.2h6M13.2 10.2v6" {...sharedProps} />
  </IconBase>
);

export const HouseLineIcon = ({ size = 30, className }) => (
  <IconBase size={size} className={className}>
    <path d="M5.9 14.1L16 6.7l10.1 7.4" {...sharedProps} />
    <path d="M8.2 13.9v11h15.6v-11" {...sharedProps} />
    <path d="M14.5 24.9v-6.1h3v6.1" {...sharedProps} />
    <path d="M11.1 17.2h2.2M18.7 17.2h2.2" {...sharedProps} />
  </IconBase>
);

export const PhoneIcon = ({ size = 18, className }) => (
  <IconBase size={size} className={className}>
    <path
      d="M9.2 6.1c.6 0 1.1.3 1.4.8l1.4 2.4a1.6 1.6 0 0 1-.2 1.8l-.9 1.1a12.4 12.4 0 0 0 4.9 4.9l1.1-.9c.5-.4 1.2-.5 1.8-.2l2.4 1.4c.5.3.8.8.8 1.4v1.8c0 .9-.7 1.6-1.6 1.6h-.8A15.6 15.6 0 0 1 3 7.7v-.8c0-.9.7-1.6 1.6-1.6z"
      {...sharedProps}
    />
  </IconBase>
);

export const MailIcon = ({ size = 18, className }) => (
  <IconBase size={size} className={className}>
    <rect x="3.6" y="6" width="24.8" height="20" rx="2.6" {...sharedProps} />
    <path d="M3.8 8l12.2 9.2L28.2 8" {...sharedProps} />
  </IconBase>
);

export const InstagramIcon = ({ size = 20, className }) => (
  <IconBase size={size} className={className}>
    <rect x="5.2" y="5.2" width="21.6" height="21.6" rx="6" {...sharedProps} />
    <circle cx="16" cy="16" r="5.1" {...sharedProps} />
    <circle cx="23.2" cy="8.8" r="1.3" fill="currentColor" />
  </IconBase>
);

export const FacebookIcon = ({ size = 20, className }) => (
  <IconBase size={size} className={className}>
    <circle cx="16" cy="16" r="11.8" {...sharedProps} />
    <path d="M18.3 9.9h2.5V6.8h-2.5a4.9 4.9 0 0 0-4.9 4.9v2h-2.1v3.1h2.1v8.3h3.3v-8.3h3l.5-3.1h-3.5v-1.9a1.8 1.8 0 0 1 1.6-1.9z" {...sharedProps} />
  </IconBase>
);
