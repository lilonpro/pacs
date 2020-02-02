function FindProxyForURL(url, host) {
 
// If the hostname matches, send direct.
    if (dnsDomainIs(host, "c.y.qq.com") ||
        dnsDomainIs(host, "vd.l.qq.com"))
        return "PROXY 127.0.0.1:1207";
 
// DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "DIRECT";
 
}
