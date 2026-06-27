export default function BrandLogo({ className = '', alt = 'Crtfy', compact = false, dark = false }) {
  const classes = ['brand-logo-image', compact ? 'brand-logo-image-compact' : '', className].filter(Boolean).join(' ')

  return <img className={classes} src={dark ? '/crtfy-dark.png' : '/crtfy.png'} alt={alt} />
}
