# 自有服务器 nginx 部署

1. 在构建环境运行 `npm run build`，将生成的 `out/` 内容复制到服务器的站点目录，例如 `/var/www/universe-keyboard/`。
2. 将 `keyboard.unknownuniverse.cn` 的 DNS 指向服务器，并在配置中替换以下证书路径占位符。按证书签发机构的流程取得并续期证书，不要将密钥提交到仓库。
3. 检查配置并重载 nginx：`nginx -t`，然后 `systemctl reload nginx`。

```nginx
server {
    listen 443 ssl;
    server_name keyboard.unknownuniverse.cn;
    ssl_certificate /path/to/fullchain.pem;
    ssl_certificate_key /path/to/private-key.pem;
    root /var/www/universe-keyboard;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
    error_page 404 /404.html;
    location = /404.html { internal; }
}
```

构建启用 `trailingSlash`，页面导出为目录中的 `index.html`，上述目录索引与之对应。可另行配置 HTTP 到 HTTPS 的跳转。备案号下发前，中国大陆服务器可能无法对外访问；取得号码后配置页脚并人工检查展示和链接。
