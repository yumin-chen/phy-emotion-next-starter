import Head from 'next/head';
import Image from 'next/image';
import { h } from 'phy-emotion';
import LinkCard from '../components/link-card';

export default function Home() {
  const head = h(Head, [
    h('title', 'phy-emotion Next.js starter'),
    h('meta', {
      name: 'description',
      content:
        'Next.js starter for phy-emotion, an all-in-JS template engine for you to write everything in JavaScript. No more HTML. No more CSS. Only JavaScript.',
    }),
    h('link', { rel: 'icon', href: '/favicon.ico' }),
  ]);

  const title = h(
    'h1',
    {
      css: {
        margin: 0,
        lineHeight: 1.15,
        fontSize: '4rem',
        textAlign: 'center',
      },
    },
    [
      h(
        'a',
        {
          href: 'https://github.com/yumin-chen/phy-emotion',
          css: {
            color: '#0070f3',
            textDecoration: 'none',
            '&:hover, &:focus, &:active': {
              textDecoration: 'underline',
            },
          },
        },
        'phy-emotion'
      ),
      ' Next.js starter',
    ]
  );

  const description = h(
    'p',
    {
      css: {
        margin: '4rem 0',
        lineHeight: 1.5,
        fontSize: '1.5rem',
        textAlign: 'center',
      },
    },
    [
      'Get started by editing ',
      h(
        'code',
        {
          css: {
            background: '#fafafa',
            borderRadius: '5px',
            padding: '0.75rem',
            fontSize: '1.1rem',
            fontFamily: `Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
          Bitstream Vera Sans Mono, Courier New, monospace`,
            '@media (prefers-color-scheme: dark)': { background: '#111' },
          },
        },
        'pages/index.js'
      ),
    ]
  );

  const cards = h(
    'div',
    {
      css: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '800px',
        '@media (max-width: 600px)': {
          width: '100%',
          flexDirection: 'column',
        },
      },
    },
    [
      h(LinkCard, {
        href: 'https://nextjs.org/docs',
        header: 'Documentation',
        description:
          'Find in-depth information about Next.js features and API.',
      }),
      h(LinkCard, {
        href: 'https://nextjs.org/learn',
        header: 'Learn',
        description:
          'Learn about Next.js in an interactive course with quizzes!',
      }),
      h(LinkCard, {
        href: 'https://github.com/vercel/next.js/tree/canary/examples',
        header: 'Examples',
        description:
          'Discover and deploy boilerplate example Next.js projects.',
      }),
      h(LinkCard, {
        href: 'https://vercel.com/new',
        header: 'Deploy',
        description:
          'Instantly deploy your Next.js site to a public URL with Vercel.',
      }),
    ]
  );

  const footer = h(
    'footer',
    {
      css: {
        display: 'flex',
        flex: 1,
        padding: '2rem 0',
        borderTop: '1px solid #eaeaea',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (prefers-color-scheme: dark)': {
          borderColor: '#222',
        },
      },
    },
    h(
      'a',
      {
        href: 'https://nextjs.org',
        target: '_blank',
        rel: 'noopener noreferrer',
        css: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        },
      },
      [
        'Built with ',
        h(
          'span',
          {
            css: {
              height: 32,
              marginLeft: 4,
              '@media (prefers-color-scheme: dark)': {
                img: { filter: 'invert(1)' },
              },
            },
          },
          h(Image, {
            src: '/nextjs.svg',
            alt: 'Next.js Logo',
            width: 64,
            height: 32,
          })
        ),
      ]
    )
  );

  return h('div', { css: { padding: '0 2rem' } }, [
    head,
    h(
      'main',
      {
        css: {
          minHeight: '100vh',
          padding: '4rem 0',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      [title, description, cards]
    ),
    footer,
  ]);
}
