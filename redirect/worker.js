// Old name: send vocalsplit.interloper.tools to the new address, keeping the path.
export default { fetch: (req) => { const u = new URL(req.url); return Response.redirect(`https://sever.interloper.tools${u.pathname}${u.search}`, 301); } };
