import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Mic } from "lucide-react"

export function Events() {
  const events = [
    {
      title: "Kitap İmza ve Lansman Günü",
      description: '"Onun Gibi Yaşamaya Var Mısın?" kitabı için imza ve lansman günü düzenlendi. Katılım yoğun oldu.',
      date: "22 Mayıs 2024",
      location: "Yozgat",
      type: "Lansman",
      status: "Tamamlandı",
    },
    {
      title: "NEFES Projesi - Kitabın İzinde Etkinliği",
      description:
        "Yozgat İl Milli Eğitim Müdürlüğü'nün düzenlediği NEFES projesi kapsamında ortaokul öğrencileriyle buluştu.",
      location: "Yozgat",
      type: "Eğitim Etkinliği",
      status: "Tamamlandı",
    },
    {
      title: "Kapıyı Açan Kim? Söyleşisi",
      description: '"Kapıyı Açan Kim?" kitabıyla yapılan söyleşide aktif rol aldı.',
      type: "Söyleşi",
      status: "Tamamlandı",
    },
  ]

  return (
    <section id="events" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Etkinlikler & Lansmanlar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kitap lansmanları, söyleşiler ve eğitim etkinlikleri
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant={event.status === "Tamamlandı" ? "default" : "secondary"}>{event.status}</Badge>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {event.date && (
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <Mic className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Etkinlik Davetleri</h3>
              <p className="text-muted-foreground">
                Okul ziyaretleri, kitap fuarları ve söyleşiler için benimle iletişime geçebilirsiniz.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
