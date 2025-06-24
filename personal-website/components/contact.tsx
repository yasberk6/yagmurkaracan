"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, MessageCircle, BookOpen, Users, CheckCircle, AlertCircle, Send } from "lucide-react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // EmailJS yapılandırması - Environment variables'dan alınacak
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    // EmailJS yapılandırması kontrolü
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setResult({
        success: false,
        message: "E-posta servisi yapılandırılmamış. Lütfen doğrudan yagmurkaracan@gmail.com adresine yazın.",
      })
      return
    }

    setIsSubmitting(true)
    setResult(null)

    try {
      // EmailJS ile e-posta gönder
      const response = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )

      console.log("EmailJS Response:", response)

      if (response.status === 200) {
        setResult({
          success: true,
          message: "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım. Teşekkür ederim!",
        })

        // Formu temizle
        formRef.current.reset()
      } else {
        throw new Error("E-posta gönderimi başarısız")
      }
    } catch (error) {
      console.error("EmailJS Error:", error)
      setResult({
        success: false,
        message:
          "Mesaj gönderilirken bir hata oluştu. Lütfen doğrudan yagmurkaracan@gmail.com adresine yazın veya Instagram'dan ulaşın.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">İletişim</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Benimle iletişime geçin, projeleriniz ve sorularınız için buradayım!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Bana Ulaşın</h3>
              <p className="text-muted-foreground mb-6">
                Kitap projeleri, okul ziyaretleri, söyleşiler veya editörlük hizmetleri için benimle iletişime
                geçebilirsiniz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Kitap Projeleri</h4>
                  <p className="text-sm text-muted-foreground">Yeni kitap fikirleri ve işbirlikleri</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Okul Ziyaretleri</h4>
                  <p className="text-sm text-muted-foreground">Öğrencilerle buluşma etkinlikleri</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:yagmurkaracan@gmail.com" className="hover:text-primary transition-colors">
                  yagmurkaracan@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <a
                  href="https://instagram.com/benyavmur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram: @benyavmur
                </a>
              </div>
            </div>

            {/* EmailJS Bilgilendirmesi */}
            <Alert className="border-blue-200 bg-blue-50">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                <strong>📧 Direkt E-posta:</strong> Form tamamen çalışıyor! Mesajınız doğrudan e-posta olarak bana
                iletilecek.
              </AlertDescription>
            </Alert>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Mesaj Gönder</CardTitle>
              <CardDescription>
                Sorularınız, proje teklifleriniz veya işbirliği önerileriniz için mesaj gönderin.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {result && (
                <Alert className={result.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
                  {result.success ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  )}
                  <AlertDescription className={result.success ? "text-green-800" : "text-red-800"}>
                    {result.message}
                  </AlertDescription>
                </Alert>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Ad *</Label>
                    <Input id="firstName" name="from_name" placeholder="Adınız" required disabled={isSubmitting} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Soyad *</Label>
                    <Input
                      id="lastName"
                      name="from_lastname"
                      placeholder="Soyadınız"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta *</Label>
                  <Input
                    id="email"
                    name="from_email"
                    type="email"
                    placeholder="ornek@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Konu *</Label>
                  <Input id="subject" name="subject" placeholder="Mesaj konusu" required disabled={isSubmitting} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mesaj *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Mesajınızı buraya yazın..."
                    rows={5}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Mesaj Gönder
                    </>
                  )}
                </Button>
              </form>

              <div className="text-xs text-muted-foreground text-center">
                * işaretli alanlar zorunludur
                <br />
                <strong>🚀 Hızlı İletişim:</strong> Mesajınız doğrudan e-posta kutuma ulaşacak
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
