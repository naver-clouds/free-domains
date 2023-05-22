addSubDomain({
  description: 'A website for my google bot',
  domain: 'is-an.app',
  subdomain: 'google',
  owner: {
    email: 'contact@naver.com',
  },
  record: {
    CNAME: 'cname.vercel-dns.com'
  },
  proxy: true
});
