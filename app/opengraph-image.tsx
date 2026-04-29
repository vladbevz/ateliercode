import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AtelierCode — Création de sites web à Nîmes';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background decoration — top-left blob */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: '#f3f4f6',
            filter: 'blur(80px)',
          }}
        />
        {/* Background decoration — bottom-right blob */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: '#f3f4f6',
            filter: 'blur(80px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
            position: 'relative',
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 0,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                fontSize: 80,
                fontWeight: 900,
                color: '#111827',
                letterSpacing: '-3px',
              }}
            >
              Atelier
            </span>
            <span
              style={{
                fontSize: 80,
                fontWeight: 900,
                color: '#9ca3af',
                letterSpacing: '-3px',
              }}
            >
              Code
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 60,
              height: 3,
              background: '#e5e7eb',
              borderRadius: 99,
              marginBottom: 28,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: '#6b7280',
              letterSpacing: '-0.5px',
              marginBottom: 40,
            }}
          >
            Création de sites web à Nîmes
          </div>

          {/* Pills */}
          <div style={{ display: 'flex', gap: 16 }}>
            {['Rapide', 'Sur mesure', 'Efficace'].map((label) => (
              <div
                key={label}
                style={{
                  padding: '10px 24px',
                  background: '#f9fafb',
                  border: '1.5px solid #e5e7eb',
                  borderRadius: 99,
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#374151',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* URL bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 60,
            fontSize: 18,
            color: '#d1d5db',
            fontWeight: 500,
            letterSpacing: '0.5px',
          }}
        >
          ateliercode.fr
        </div>
      </div>
    ),
    { ...size }
  );
}
