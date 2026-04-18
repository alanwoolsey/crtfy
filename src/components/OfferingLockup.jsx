import BrandLogo from './BrandLogo'

const logoBySlug = {
  evaluate: '/crtfyevaluate.png',
  verify: '/crtfyverify.png',
  engage: '/crtfyengage.png',
  insight: '/crtfyinsight.png',
  secure: '/crtfysecure.png',
  govern: '/crtfygovern.png',
  operate: '/crtfyoperate.png',
  advisory: '/crtfyadvisory.png',
  compliance: '/crtfycompliance.png',
  risk: '/crtfyrisk.png',
  'crtfy-student': '/crtfystudent.png',
}

export default function OfferingLockup({ slug, name, className = '' }) {
  const classes = ['offering-lockup', className].filter(Boolean).join(' ')
  const logoSrc = logoBySlug[slug]

  if (logoSrc) {
    return (
      <div className={classes}>
        <img className="offering-lockup-image" src={logoSrc} alt={`Crtfy ${name}`} />
      </div>
    )
  }

  return (
    <div className={classes}>
      <BrandLogo className="offering-lockup-logo" />
      <span className="offering-lockup-name">{name}</span>
    </div>
  )
}
