import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // 验证必填字段
    if (!name || !email || !message) {
      return res.status(400).json({ error: '请填写所有必填字段' });
    }

    // 邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: '邮箱格式不正确' });
    }

    // 创建邮件发送器
    // 使用您的邮箱服务商（Gmail、QQ邮箱、163邮箱等）
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,     // 例如：smtp.gmail.com
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,   // 您的邮箱地址
        pass: process.env.SMTP_PASS,   // 您的邮箱密码或授权码
      },
    });

    // 邮件内容
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL,  // 接收消息的邮箱
      subject: `ZM Studio 网站新消息 - ${name}`,
      html: `
        <h2>来自网站的新消息</h2>
        <p><strong>姓名：</strong> ${name}</p>
        <p><strong>邮箱：</strong> ${email}</p>
        <p><strong>消息内容：</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">此邮件来自 ZM Studio 网站联系表单</p>
      `,
      // 也可以添加纯文本版本
      text: `
姓名：${name}
邮箱：${email}
消息内容：
${message}
      `,
      // 设置回复地址为访客的邮箱
      replyTo: email,
    };

    // 发送邮件
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true, 
      message: '消息发送成功！我们会尽快回复您。' 
    });

  } catch (error) {
    console.error('发送邮件错误:', error);
    return res.status(500).json({ 
      error: '发送失败，请稍后重试或直接发送邮件到 info@zmstudiomilano.it' 
    });
  }
}


