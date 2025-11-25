// Contact Page with form submission

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fadeUp } from "@/config/animation";
import type { ContactFormData, SubmitStatus } from "@/types";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 重置状态
    setSubmitStatus(null);

    // 前端验证
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: '请填写所有字段' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message });
        // 清空表单
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || '发送失败，请重试' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: '网络错误，请稍后重试' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20">
        <motion.h1 {...fadeUp} className="text-3xl font-bold tracking-tight">
          Contact
        </motion.h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div {...fadeUp}>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-0 border-b border-neutral-300 rounded-none focus:ring-0 focus:border-black"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-0 border-b border-neutral-300 rounded-none focus:ring-0 focus:border-black"
                required
              />
              <Textarea
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-0 border-b border-neutral-300 rounded-none focus:ring-0 focus:border-black"
                required
              />

              {/* 提示信息 */}
              {submitStatus && (
                <div className={`p-3 rounded ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}

              <Button type="submit" className="w-fit" disabled={isSubmitting}>
                {isSubmitting ? '发送中...' : 'Send message'}
              </Button>
            </form>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-2 text-neutral-700">
            <div>
              <Mail className="inline size-4 mr-2" />{" "}
              <a href="mailto:info@zmstudiomilano.it" className="hover:underline">
                info@zmstudiomilano.it
              </a>
            </div>
            <div>
              <Phone className="inline size-4 mr-2" />{" "}
              <a href="tel:+393444731427" className="hover:underline">
                +39 3444731427
              </a>
            </div>
            <div>
              <MapPin className="inline size-4 mr-2" /> Milan, Italy
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
