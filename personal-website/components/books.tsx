"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar } from "lucide-react"
import { BookDetailModal } from "./book-detail-modal"

export function Books() {
  const [selectedBook, setSelectedBook] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const books = [
    {
      title: "Onun Gibi Yaşamaya Var Mısın?",
      description:
        "Ana karakter Tarık, YouTuber ve basketbol takımı kaptanı; hikaye, İslami değerlerle spor yaşamını harmanlıyor.",
      publisher: "Gülce İlk Genç - Timaş",
      publishDate: "Mart 2024",
      category: "Çocuk Hikaye",
      image: "/images/onun-gibi-yasamaya-cover.jpeg",
      status: "Yayımlandı",
      author: "Yağmur Karacan",
      illustrator: "Rabia Pehlivan",
      pages: 128,
      ageGroup: "9-14 Yaş",
      themes: ["Spor", "Sosyal Medya", "İslami Değerler", "Gençlik", "Basketbol"],
      summary:
        "Tarık, hem YouTuber hem de basketbol takımının kaptanı olan bir genç. Bu hikaye, modern gençlerin dijital dünya ile gerçek yaşam arasında kurdukları dengeyi, İslami değerlerle spor yaşamını nasıl harmanlayabileceklerini anlatıyor. Tarık'ın macerası boyunca okuyucular, sosyal medyanın doğru kullanımı, takım ruhu ve manevi değerlerin önemini keşfedecekler.",
    },
    {
      title: "Yankı Süper Kahraman Olmak İstiyor",
      description: "Sporcu bir karakter üzerinden çocuklara mesajlar veren hikaye kitabı.",
      category: "Çocuk Hikaye",
      image: "/images/yanki-super-kahraman-cover.png",
      status: "Yayımlandı",
      author: "Yağmur Karacan",
      pages: 96,
      ageGroup: "6-10 Yaş",
      themes: ["Süper Kahramanlık", "Spor", "Cesaret", "Dostluk", "Hayal Kurma"],
      summary:
        "Yankı, süper kahraman olmayı hayal eden enerjik bir çocuk. Spor yaparak, arkadaşlarına yardım ederek ve cesur davranarak gerçek süper kahramanlığın ne olduğunu öğreniyor. Bu hikaye, çocuklara gerçek kahramanlığın güçlü olmaktan çok, iyi kalpli ve yardımsever olmakla ilgili olduğunu öğretiyor.",
    },
    {
      title: "Kapıyı Açan Kim? Bir Hadis Çizgi Romanı",
      description: "Hadis temalı, çizgi roman formatında; çocuklara İslami değerleri aktaran eser.",
      category: "Çizgi Roman",
      image: "/images/kapiyi-acan-kim-cover.jpeg",
      status: "Yayımlandı",
      author: "Yağmur Karacan",
      illustrator: "Süleyman Özkonuk",
      publisher: "Gülce İlk Genç",
      pages: 64,
      ageGroup: "7-12 Yaş",
      themes: ["Hadis", "İslami Değerler", "Komşuluk", "Yardımlaşma", "Ahlak"],
      summary:
        "Bu çizgi roman, Hz. Peygamber'in hadislerinden yola çıkarak hazırlanmış eğitici bir hikaye. Çocuklar, renkli karakterler ve eğlenceli çizimler eşliğinde İslami değerleri öğrenirken, komşuluk hakkı, yardımlaşma ve güzel ahlak konularında farkındalık kazanıyorlar. Çizgi roman formatı sayesinde çocukların dikkatini çekerek öğretici mesajları etkili bir şekilde aktarıyor.",
    },
  ]

  const handleBookClick = (book: any) => {
    setSelectedBook(book)
    setIsModalOpen(true)
  }

  return (
    <section id="books" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Kitaplarım</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Çocuklar için yazdığım hikaye ve çizgi roman eserleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <img
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={book.status === "Yayımlandı" ? "default" : "secondary"}>{book.status}</Badge>
                  <Badge variant="outline">{book.category}</Badge>
                </div>
                <CardTitle className="text-xl leading-tight">{book.title}</CardTitle>
                <CardDescription className="text-sm">{book.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {book.publisher && (
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {book.publisher} - {book.publishDate}
                    </span>
                  </div>
                )}
                <Button className="w-full" onClick={() => handleBookClick(book)}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Detayları Gör
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Gelecek Planları</h3>
              <p className="text-muted-foreground mb-4">
                "Onun Gibi Yaşamaya Var Mısın?" kitabının ardından yıl sonunda yeni bir kitap yayımlamayı planlıyorum.
              </p>
              <p className="text-sm text-muted-foreground">
                İlerleyen günlerde aynı kararlılıkla çocuk edebiyatında eser üretmeye devam edeceğim.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {selectedBook && (
        <BookDetailModal book={selectedBook} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  )
}
