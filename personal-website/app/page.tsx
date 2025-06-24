import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Books } from "@/components/books"
import { Events } from "@/components/events"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Books />
        <Events />
        <Contact />
      </main>
      <footer className="bg-muted py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">© 2024 Yağmur Karacan. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}
