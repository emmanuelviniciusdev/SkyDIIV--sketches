export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        margin: 0,
        padding: '40px 24px',
        background: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: 'var(--font-sans)',
        textTransform: 'lowercase',
      }}
    >
      <h1
        style={{
          margin: '0 0 16px',
          fontSize: 32,
          fontWeight: 300,
          letterSpacing: '0.08em',
          textTransform: 'lowercase',
        }}
      >
        <span className="brand-name">SkyDIIV</span> design system
      </h1>
      <p style={{ margin: 0, maxWidth: 40 * 16, lineHeight: 1.6 }}>
        Foundations live in Storybook. Run <code>pnpm storybook</code> in this package.
      </p>
    </main>
  )
}
