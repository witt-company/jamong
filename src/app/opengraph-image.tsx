import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = '자몽통신 - 맞춤형 디지털 솔루션 개발 전문기업';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const fontDir = join(process.cwd(), 'src/app/_fonts');
const [notoRegular, notoBold] = await Promise.all([
  readFile(join(fontDir, 'NotoSansKR-400.ttf')),
  readFile(join(fontDir, 'NotoSansKR-700.ttf')),
]);

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#1d3557',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(230,57,70,0.35) 0%, rgba(29,53,87,0) 55%)',
          padding: '80px 90px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 34,
            fontWeight: 700,
            color: '#e63946',
            letterSpacing: '0.18em',
          }}
        >
          Jamong
        </div>

        <div
          style={{
            display: 'flex',
            width: 96,
            height: 6,
            backgroundColor: '#e63946',
            margin: '28px 0 34px',
          }}
        />

        <div
          style={{
            display: 'flex',
            fontSize: 104,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
          }}
        >
          자몽통신
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 44,
            fontWeight: 700,
            color: '#a8dadc',
            marginTop: 24,
          }}
        >
          맞춤형 디지털 솔루션 개발 전문기업
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 30,
            fontWeight: 400,
            color: 'rgba(241,250,238,0.72)',
            marginTop: 40,
          }}
        >
          원격검침 · 에너지모니터링 · 공공기관 시스템
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Noto Sans KR', data: notoRegular, style: 'normal', weight: 400 },
        { name: 'Noto Sans KR', data: notoBold, style: 'normal', weight: 700 },
      ],
    }
  );
}
