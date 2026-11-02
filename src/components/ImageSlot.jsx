export default function ImageSlot({ label, image, className = '', ratio = 'aspect-[16/10]' }) {
  if (image) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl border border-teal-800/15 bg-white shadow-[0_18px_40px_rgba(15,118,110,0.10)] ${ratio} ${className}`}
      >
        <img
          src={image}
          alt={label}
          className="h-full w-full object-fill object-top"
        />
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-dashed border-teal-800/20 bg-gradient-to-br from-teal-50 via-white to-amber-50 ${ratio} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,118,110,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(217,119,6,0.08),transparent_40%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-teal-900/10">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="#0f766e" strokeWidth="1.6" />
            <circle cx="8.5" cy="10" r="1.6" fill="#d97706" />
            <path d="M4 16.5l4.5-4.2 3.2 3 2.4-2.3L20 16.8" stroke="#0f766e" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <p className="text-sm font-semibold text-teal-900">{label}</p>
      </div>
    </div>
  )
}
