export function BatikDivider() {
  return (
    <div className="flex items-center justify-center py-8" aria-hidden="true">
      <div className="h-px w-16 bg-accent/40" />
      <svg width="24" height="24" viewBox="0 0 24 24" className="mx-3 text-accent">
        <path
          d="M12 2 L18 8 L12 14 L6 8 Z"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>
      <div className="h-px w-16 bg-accent/40" />
    </div>
  );
}