function FindProxyForURL(url, host) { if (dnsDomainIs(host, "test.com"))  return "PROXY 172.16.16.241:10025"; if (dnsDomainIs(host, "139.199.62.181"))  return "PROXY 172.16.16.241:10025";
   return "DIRECT";}
