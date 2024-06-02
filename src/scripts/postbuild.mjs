/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-floating-promises */
import rss from './rss.mjs'

async function postbuild () {
  rss()
}

postbuild()
