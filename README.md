# sever releases

Installers and the download site for [sever](https://sever.interloper.tools) (formerly vocalsplit), an app that splits a song into vocals and music and finds its BPM and key.
The site in `site/` reads the latest release from this repo's GitHub Releases, so a new release needs no redeploy.
`wrangler.redirect.jsonc` keeps the old vocalsplit.interloper.tools address redirecting here.
