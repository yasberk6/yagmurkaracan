# EmailJS Kurulum Rehberi

Bu proje EmailJS kullanarak frontend'den direkt e-posta gönderimi yapmaktadır.

## 1. EmailJS Hesabı Oluşturma

1. [EmailJS](https://www.emailjs.com/) sitesine gidin
2. Ücretsiz hesap oluşturun
3. Dashboard'a giriş yapın

## 2. E-posta Servisi Ekleme

1. Dashboard'da "Email Services" bölümüne gidin
2. "Add New Service" butonuna tıklayın
3. Gmail, Outlook veya başka bir e-posta sağlayıcısı seçin
4. E-posta bilgilerinizi girin ve servisi kaydedin
5. **Service ID**'yi not alın

## 3. E-posta Template'i Oluşturma

1. Dashboard'da "Email Templates" bölümüne gidin
2. "Create New Template" butonuna tıklayın
3. Aşağıdaki template'i kullanın:

\`\`\`html
Konu: {{subject}}

Yeni mesaj geldi!

Ad Soyad: {{from_name}} {{from_lastname}}
E-posta: {{from_email}}
Konu: {{subject}}

Mesaj:
{{message}}

---
Bu mesaj web sitenizden gönderilmiştir.
\`\`\`

4. Template'i kaydedin ve **Template ID**'yi not alın

## 4. Public Key Alma

1. Dashboard'da "Account" bölümüne gidin
2. **Public Key**'i kopyalayın

## 5. Proje Yapılandırması

`components/contact.tsx` dosyasında aşağıdaki değerleri güncelleyin:

\`\`\`javascript
const EMAILJS_SERVICE_ID = "your_service_id_here"
const EMAILJS_TEMPLATE_ID = "your_template_id_here" 
const EMAILJS_PUBLIC_KEY = "your_public_key_here"
\`\`\`

## 6. Test Etme

1. Projeyi çalıştırın: `npm run dev`
2. İletişim formunu doldurun ve gönderin
3. E-posta kutunuzu kontrol edin

## Notlar

- EmailJS ücretsiz planında ayda 200 e-posta gönderebilirsiniz
- Daha fazla e-posta için ücretli plana geçebilirsiniz
- Template'de kullanılan değişken isimleri form input'larının `name` attribute'leri ile eşleşmelidir
