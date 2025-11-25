# ZM Studio 网站

一个现代化的展览与建筑工作室网站，使用 React + TypeScript + Vite 构建。

## 🚀 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

然后在浏览器中打开 `http://localhost:5173/`

### 3. 构建生产版本
```bash
npm run build

部署新版本

vercel --prod
```

---

## 📁 项目结构

```
网站设计/
├── public/                 # 静态资源文件夹
│   └── images/            # 把你的图片放这里
├── src/
│   ├── components/        # UI 组件
│   │   └── ui/           # shadcn/ui 组件
│   ├── lib/              # 工具函数
│   ├── App.tsx           # 主应用文件 ⭐ 在这里修改内容
│   ├── main.tsx          # 入口文件
│   └── index.css         # 全局样式
├── package.json
└── vite.config.ts
```

---

## 🎨 网站页面

- **首页** - 4张大图 + 文字介绍交替展示
- **关于** - 工作室介绍
- **项目** - 项目列表（支持搜索、筛选、切换视图）
- **项目详情** - 单个项目的详细信息
- **服务** - 展示设计服务
- **新闻** - 最新动态
- **联系** - 联系表单

---

## ✏️ 如何修改内容

### 📷 替换图片

详见：[**图片替换说明.md**](./图片替换说明.md)

### 📝 修改文字

打开 `src/App.tsx`，查找相应内容进行修改：

#### 首页内容（第103行）
```typescript
const sections = [
  { 
    type: "image",
    title:"您的工作室名称",  // 修改这里
    subtitle:"您的副标题",    // 修改这里
    ...
  },
  ...
];
```

#### 项目列表（第14行）
```typescript
const PROJECTS = [
  { 
    id: "p1", 
    title: "项目名称",        // 修改这里
    location: "位置",         // 修改这里
    year: 2025,              // 修改这里
    ...
  },
];
```

#### 关于页面（第198行）
```typescript
<p>您的工作室介绍...</p>  // 修改这里
```

#### 服务页面（第330行）
```typescript
const items = [
  { title: "服务名称", text: "服务描述" },  // 修改这里
];
```

#### 联系信息（第391行）
```typescript
<div><Mail /> 您的邮箱</div>      // 修改这里
<div><Phone /> 您的电话</div>     // 修改这里
<div><MapPin /> 您的地址</div>    // 修改这里
```

---

## 🎯 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 快速开发工具
- **Tailwind CSS** - 样式框架
- **Framer Motion** - 动画效果
- **Radix UI** - 无障碍组件
- **Lucide React** - 图标库

---

## 🔧 常用命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

---

## 📱 响应式设计

网站完全响应式，在以下设备上都有良好表现：
- 📱 移动端（< 768px）
- 💻 平板（768px - 1024px）
- 🖥️ 桌面端（> 1024px）

---

## 🎨 自定义配置

### 修改网站标题
编辑 `index.html` 第7行：
```html
<title>您的工作室名称 - Exhibition & Architecture</title>
```

### 修改主题颜色
编辑 `src/index.css` 中的 CSS 变量

### 修改最大宽度
在 `src/App.tsx` 中搜索 `max-w-[1600px]` 并修改

---

## 📄 许可证

MIT License

---

## 🆘 需要帮助？

1. 查看 [图片替换说明.md](./图片替换说明.md)
2. 检查浏览器控制台（F12）的错误信息
3. 确保图片路径正确
4. 确保所有依赖已安装 (`npm install`)

---

## ✨ 特性

- ✅ 完全响应式设计
- ✅ 流畅的页面动画
- ✅ 粘性导航栏
- ✅ 移动端抽屉菜单
- ✅ 项目搜索和筛选
- ✅ 网格/列表视图切换
- ✅ 优雅的现代 UI
- ✅ 快速的热更新开发

---

🎉 **祝你使用愉快！**

