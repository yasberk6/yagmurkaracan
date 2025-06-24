"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Building, BookOpen, Users } from "lucide-react"

interface BookDetailModalProps {
  book: {
    title: string
    description: string
    publisher?: string
    publishDate?: string
    category: string
    image: string
    status: string
    isbn?: string
    pages?: number
    ageGroup?: string
    themes?: string[]
    summary?: string
    author?: string
    illustrator?: string
  }
  isOpen: boolean
  onClose: () => void
}

export function BookDetailModal({ book, isOpen, onClose }: BookDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{book.title}</DialogTitle>
          <DialogDescription>Kitap Detayları</DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Kitap Kapağı */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden rounded-lg">
              <img src={book.image || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">{book.status}</Badge>
              <Badge variant="outline">{book.category}</Badge>
              {book.ageGroup && <Badge variant="secondary">{book.ageGroup}</Badge>}
            </div>
          </div>

          {/* Kitap Bilgileri */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Kitap Hakkında</h3>
              <p className="text-muted-foreground leading-relaxed">{book.summary || book.description}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Detaylar</h3>

              {book.author && (
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-primary" />
                  <span className="font-medium">Yazar:</span>
                  <span>{book.author}</span>
                </div>
              )}

              {book.illustrator && (
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-primary" />
                  <span className="font-medium">Çizer:</span>
                  <span>{book.illustrator}</span>
                </div>
              )}

              {book.publisher && (
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-primary" />
                  <span className="font-medium">Yayınevi:</span>
                  <span>{book.publisher}</span>
                </div>
              )}

              {book.publishDate && (
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">Yayın Tarihi:</span>
                  <span>{book.publishDate}</span>
                </div>
              )}

              {book.pages && (
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="font-medium">Sayfa Sayısı:</span>
                  <span>{book.pages}</span>
                </div>
              )}

              {book.ageGroup && (
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-medium">Yaş Grubu:</span>
                  <span>{book.ageGroup}</span>
                </div>
              )}
            </div>

            {book.themes && book.themes.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Ana Temalar</h3>
                <div className="flex flex-wrap gap-2">
                  {book.themes.map((theme, index) => (
                    <Badge key={index} variant="outline">
                      {theme}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
