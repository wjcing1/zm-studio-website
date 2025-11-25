# 🌐 Squarespace 域名部署指南

## 📋 总体流程

1. ✅ 将网站部署到 Vercel（免费托管）
2. ✅ 在 Squarespace 设置域名解析
3. ✅ 完成！你的域名指向你的网站

---

## 第一步：部署到 Vercel

### 1. 登录 Vercel
```bash
vercel login
```
（用浏览器登录，可以用 GitHub、GitLab 或 Email）

### 2. 部署网站
```bash
vercel
```

按提示操作：
- Set up and deploy? → **Y**
- Which scope? → 选择你的账号
- Link to existing project? → **N**
- Project name? → **zm-studio**（或你的工作室名）
- In which directory? → 直接回车
- Override settings? → **N**

### 3. 记录临时网址
部署完成后会显示：
```
✅ Production: https://zm-studio-xxxx.vercel.app
```
先用这个临时网址测试一下网站是否正常。

---

## 第二步：在 Vercel 添加自定义域名

### 1. 进入 Vercel 项目设置

访问 https://vercel.com/dashboard
- 点击你的项目（zm-studio）
- 点击 **Settings**
- 点击左侧 **Domains**

### 2. 添加你的域名

假设你的域名是 `zmstudio.com`：

在输入框输入：
- `zmstudio.com`（主域名）
- `www.zmstudio.com`（www 子域名）

点击 **Add**

### 3. Vercel 会显示需要的 DNS 记录

Vercel 会提示你需要添加以下 DNS 记录：

**A 记录：**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME 记录（www）：**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**记下这些信息**，下一步要用！

---

## 第三步：在 Squarespace 设置 DNS

### 1. 登录 Squarespace

访问 https://account.squarespace.com/domains

### 2. 找到你的域名

点击你要使用的域名（比如 zmstudio.com）

### 3. 进入 DNS 设置

- 点击 **DNS Settings** 或 **Advanced Settings**
- 找到 **Custom Records** 或 **DNS Records**

### 4. 添加 A 记录（指向 Vercel）

点击 **Add Record**：
```
Record Type: A
Host: @
Points To: 76.76.21.21
TTL: 3600（默认即可）
```
点击 **Save** 或 **Add**

### 5. 添加 CNAME 记录（www 子域名）

再次点击 **Add Record**：
```
Record Type: CNAME
Host: www
Points To: cname.vercel-dns.com
TTL: 3600（默认即可）
```
点击 **Save** 或 **Add**

### 6. 保存更改

确保所有更改都已保存。

---

## 第四步：等待 DNS 生效

### ⏱️ 等待时间
- **通常需要：** 15分钟 - 1小时
- **最长可能：** 24-48小时

### 检查是否生效

#### 方法 1：直接访问
在浏览器输入你的域名，看是否能访问

#### 方法 2：命令行检查
```bash
# Windows PowerShell
nslookup zmstudio.com

# 如果看到 76.76.21.21 就说明成功了
```

---

## 📝 完整示例

假设你的域名是 `zmstudiomilano.com`：

### Vercel 端：
1. 部署完成后，在 Vercel Dashboard 添加域名：
   - `zmstudiomilano.com`
   - `www.zmstudiomilano.com`

### Squarespace 端（DNS 设置）：

**A 记录：**
| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 3600 |

**CNAME 记录：**
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | www | cname.vercel-dns.com | 3600 |

---

## ✅ 验证清单

- [ ] 网站已部署到 Vercel
- [ ] 在 Vercel 添加了自定义域名
- [ ] 在 Squarespace 添加了 A 记录（@ → 76.76.21.21）
- [ ] 在 Squarespace 添加了 CNAME 记录（www → cname.vercel-dns.com）
- [ ] 等待 DNS 生效（15分钟 - 1小时）
- [ ] 访问域名测试是否成功

---

## ❓ 常见问题

### Q1: DNS 设置后访问不了？
**A:** 
1. 等待 30 分钟再试
2. 清除浏览器缓存
3. 用隐私模式/无痕模式打开
4. 检查 Squarespace DNS 记录是否正确保存

### Q2: 显示 "Invalid Configuration"？
**A:** 
- 确保在 Vercel 项目设置中添加了域名
- 确保 Vercel 显示域名状态为 "Valid Configuration"

### Q3: www 可以访问，但裸域名不行（或反过来）？
**A:** 
- 检查两个记录都添加了
- A 记录（@ 或 空）指向 76.76.21.21
- CNAME 记录（www）指向 cname.vercel-dns.com

### Q4: Squarespace 说域名已在使用？
**A:** 
如果域名当前在 Squarespace 上有网站：
1. 先在 Squarespace 断开网站连接
2. 或者在 "Connected Sites" 中移除连接
3. 然后再设置 DNS

### Q5: 能用子域名吗（如 studio.mydomain.com）？
**A:** 
可以！在 Squarespace 添加 CNAME 记录：
```
Type: CNAME
Host: studio
Value: cname.vercel-dns.com
```

---

## 🎯 快速命令总结

```bash
# 1. 部署到 Vercel
vercel login
vercel

# 2. 生产部署（首次部署后）
vercel --prod

# 3. 检查 DNS（Windows）
nslookup yourdomain.com

# 4. 检查 DNS（详细）
ping yourdomain.com
```

---

## 📞 需要帮助？

1. **Vercel 文档**: https://vercel.com/docs/custom-domains
2. **Squarespace DNS 指南**: https://support.squarespace.com/hc/en-us/articles/205812378
3. **检查 DNS 工具**: https://dnschecker.org

---

## 🔄 更新网站流程（以后）

当你修改代码想更新网站时：

```bash
# 1. 构建
npm run build

# 2. 部署
vercel --prod
```

几秒钟后，你的域名就会显示更新的内容！

---

🎉 **完成后，你的网站就可以通过你的域名访问了！**




