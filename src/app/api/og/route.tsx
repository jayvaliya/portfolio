// This file will generate an OG image for your site

// In Next.js 13+ App Router, you can create API routes by creating a route.ts file
// Create this file at /app/api/og/route.tsx to generate OG images dynamically

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 48,
                    background: 'linear-gradient(to bottom, #0f0f19, #1e1e30)',
                    color: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}
            >
                <div style={{
                    fontSize: '42px',
                    marginBottom: '20px',
                    background: 'linear-gradient(to right, #9f7aea, #6366f1)',
                    backgroundClip: 'text',
                    color: 'transparent',
                }}>
                    Jay Valiya
                </div>
                <div style={{ fontSize: '32px', marginBottom: '40px' }}>
                    Full Stack Developer
                </div>
                <div
                    style={{
                        display: 'flex',
                        gap: '20px',
                        fontSize: '20px',
                    }}
                >
                    <div style={{
                        padding: '12px 24px',
                        background: 'linear-gradient(to right, #8b5cf6, #6366f1)',
                        borderRadius: '30px',
                    }}>
                        React
                    </div>
                    <div style={{
                        padding: '12px 24px',
                        background: 'linear-gradient(to right, #8b5cf6, #6366f1)',
                        borderRadius: '30px',
                    }}>
                        Node.js
                    </div>
                    <div style={{
                        padding: '12px 24px',
                        background: 'linear-gradient(to right, #8b5cf6, #6366f1)',
                        borderRadius: '30px',
                    }}>
                        Next.js
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
