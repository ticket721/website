# T721 Website

This is a React static website, created with `create-react-app`, still not ejected.

Start with:

``` shell
npm run start
```

To deploy with helm, go into the `t721w` directory and:

```shell
helm install --name release_name . \
--set env.gcp=true \
--set letsencrypt.server=https://acme-v02.api.letsencrypt.org/directory \
--set nginx.controller.service.loadBalancerIP=YOUR_IP
```
