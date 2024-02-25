// https://vike.dev/onRenderClient
export { onRenderClient }

import { PageLayout } from './PageLayout'

function onRenderClient(pageContext) {
  if (!pageContext.isHydration) {
    const { Page, data } = pageContext
    const pageHtml = PageLayout(Page(), data);
    document.getElementById('page-view').innerHTML = pageHtml
  }
}

