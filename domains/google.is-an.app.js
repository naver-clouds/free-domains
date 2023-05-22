addSubDomain({
  description: 'A website for my google bot',
  domain: 'is-an.app',
  subdomain: 'google',
  owner: {
    email: 'contact@naver.com',
  },
  record: {
    CNAME: 'naver.com'
  },
  proxy: true
});
