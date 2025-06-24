import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hakkımda</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Çocuklar için hikaye ve çizgi roman türlerinde eserler üretmeye başladım.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              21 Mart 1999'da Yozgat'ta doğdum. Türk Dili ve Edebiyatı eğitimi aldıktan sonra, özellikle çocuklara
              yönelik hikaye ve çizgi roman türlerinde eserler üretmeye başladım.
            </p>
            <p className="text-lg leading-relaxed">
              Serbest yazar, editör ve okutman olarak faaliyet gösteriyorum. Çocuklar için üretmeye devam etmek
              istiyorum ve kitaplarımda çocuklarla hem manevi hem sportif bağ kurmayı hedefliyorum.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "Çocuklar için üretmeye devam etmek istiyorum."
            </blockquote>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-medium">Doğum Tarihi</span>
                      <p className="text-muted-foreground">21 Mart 1999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-medium">Doğum Yeri</span>
                      <p className="text-muted-foreground">Yozgat, Türkiye</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-medium">Eğitim</span>
                      <p className="text-muted-foreground">Türk Dili ve Edebiyatı</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-medium">Meslek</span>
                      <p className="text-muted-foreground">Serbest Yazar, Editör, Okutman</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
