// https://vike.dev/onRenderClient
export { onRenderClient }

import { PageLayout } from './PageLayout'

async function onRenderClient(pageContext) {
  console.log('pageContext', pageContext);
  if (!pageContext.isHydration) {
    const { Page } = pageContext
    const pageHtml = await PageLayout(Page())
    document.getElementById('page-view').innerHTML = pageHtml
  }
}

