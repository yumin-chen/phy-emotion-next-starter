import { h } from 'phy-emotion';

export default function LinkCard({ href, header, description }) {
  return h(
    'a',
    {
      href,
      css: {
        margin: '1rem',
        padding: '1.5rem',
        textAlign: 'left',
        color: 'inherit',
        textDecoration: 'none',
        border: '1px solid #eaeaea',
        borderRadius: '10px',
        transition: 'color 0.15s ease, border-color 0.15s ease',
        maxWidth: '300px',
        '&:hover, &:focus, &:active': {
          color: '#0070f3',
          borderColor: '#0070f3',
        },
        '@media (prefers-color-scheme: dark)': { borderColor: '#222' },
      },
    },
    [
      h(
        'h2',
        {
          css: {
            margin: '0 0 1rem 0',
            fontSize: '1.5rem',
          },
        },
        [header, ' →']
      ),
      h(
        'p',
        {
          css: {
            margin: 0,
            fontSize: '1.25rem',
            lineHeight: 1.5,
          },
        },
        description
      ),
    ]
  );
}
