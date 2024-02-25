export { PageLayout }

import './PageLayout.css'

async function PageLayout(children) {
   return await Content(children).then((res) => res)
}

function Layout(children) {
  // prettier-ignore
  // biome-ignore format:
  return (
`<div
  style="${[
    'display: flex',
    'max-width: 900px',
    'margin: auto'
  ].join(';')}"
>
  ${children}
</div>`
  )
}

function Sidebar(children) {
  // prettier-ignore
  // biome-ignore format:
  return (
`<div
  style="${[
    'padding: 20px',
    'padding-top: 42px',
    'flex-shrink: 0',
    'display: flex',
    'flex-direction: column',
    'align-items: center',
    'line-height: 1.8em',
  ].join(';')}"
>
  ${children}
</div>`
  )
}

async function Content(children) {
  // prettier-ignore
  // biome-ignore format:
  return (
`<div class='p_content' 
  style="${[
    'padding: 20px',
    'padding-bottom: 50px',
    'border-left: 2px solid #eee',
    'min-height: 100vh'
  ].join(';')}"
>
  ${children}
</div>`
  )
}
