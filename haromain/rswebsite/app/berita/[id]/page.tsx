"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, User, ArrowLeft, Share2, Clock, Bookmark, Tag, ChevronRight } from "lucide-react";
import { articles } from "@/lib/articles";

export default function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link berhasil disalin!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section with Overlay */}
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom w-full pb-12 md:pb-16">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/90 backdrop-blur-sm text-white rounded-full mb-6">
                <Tag className="h-4 w-4" />
                <span className="text-sm font-semibold">{article.category}</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>5 min baca</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button - Floating */}
        <Link 
          href="/berita"
          className="absolute top-24 left-4 md:left-8 z-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg transition-all hover:shadow-xl">
            <ArrowLeft className="h-4 w-4 text-slate-900" />
            <span className="text-sm font-semibold text-slate-900 hidden sm:inline">Kembali</span>
          </div>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative -mt-20 z-10">
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Article Content */}
            <div className="lg:col-span-8">
              <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden">
                <div className="p-8 md:p-12 lg:p-16">
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={handleShare}
                      >
                        <Share2 className="h-4 w-4" />
                        <span className="hidden sm:inline">Bagikan</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <Bookmark className="h-4 w-4" />
                        <span className="hidden sm:inline">Simpan</span>
                      </Button>
                    </div>
                  </div>

                  {/* Article Body */}
                  <div className="prose prose-xl prose-slate max-w-none
                    prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-slate-200
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                    prose-p:text-slate-700 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-lg
                    prose-a:text-primary prose-a:no-underline prose-a:font-semibold hover:prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2
                    prose-strong:text-slate-900 prose-strong:font-bold
                    prose-ul:my-8 prose-ul:space-y-3
                    prose-ol:my-8 prose-ol:space-y-3
                    prose-li:text-slate-700 prose-li:leading-relaxed prose-li:text-lg
                    prose-li::marker:text-primary prose-li::marker:font-bold
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:italic prose-blockquote:text-slate-700 prose-blockquote:rounded-r-lg prose-blockquote:my-8
                    prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-base prose-code:text-primary prose-code:font-mono
                  ">
                    <ReactMarkdown>{article.content}</ReactMarkdown>
                  </div>
                </div>

                {/* Article Footer - CTA */}
                <div className="bg-gradient-to-br from-blue-600 via-primary to-blue-800 text-white px-8 md:px-12 lg:px-16 py-16 relative overflow-hidden">
                  {/* Animated Background Elements */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[80%] bg-blue-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>

                  <div className="relative z-10 text-center max-w-2xl mx-auto">
                    <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">Konsultasikan Kesehatan Anda</h3>
                    <p className="text-xl text-blue-50 mb-10 opacity-90 font-medium">
                      Butuh saran medis profesional? Tim dokter spesialis kami siap membantu Anda.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                      <Link 
                        href="/#book"
                        className={buttonVariants({
                          size: "lg",
                          className: "gap-2 bg-white text-primary hover:bg-blue-50 px-8 py-7 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
                        })}
                      >
                        <Calendar className="h-6 w-6" />
                        Buat Janji Temu
                      </Link>
                      <Button 
                        size="lg" 
                        variant="ghost"
                        className="gap-2 text-white hover:bg-white/10 px-8 py-7 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300"
                        onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                      >
                        <Share2 className="h-6 w-6" />
                        Chat WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Related Articles - Full Width */}
              {relatedArticles.length > 0 && (
                <div className="mt-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Artikel Terkait</h2>
                    <Link href="/berita" className="text-primary font-semibold hover:underline flex items-center gap-1">
                      Lihat Semua
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedArticles.map((related) => (
                      <Link 
                        key={related.id} 
                        href={`/berita/${related.id}`}
                        className="group block"
                      >
                        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                          <div className="relative h-48 w-full bg-slate-200">
                            <Image
                              src={related.image}
                              alt={related.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="p-5">
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                              {related.category}
                            </span>
                            <h3 className="font-bold text-lg text-slate-900 line-clamp-2 group-hover:text-primary transition-colors mb-2">
                              {related.title}
                            </h3>
                            <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                              {related.excerpt}
                            </p>
                            <div className="flex items-center text-xs text-slate-500">
                              <Calendar className="h-3 w-3 mr-1" />
                              {related.date}
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Quick Links Card */}
                <Card className="p-6 bg-gradient-to-br from-slate-50 to-white border-slate-200 shadow-lg">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Tag className="h-5 w-5 text-primary" />
                    Kategori Lainnya
                  </h3>
                  <div className="space-y-2">
                    {Array.from(new Set(articles.map(a => a.category))).map((category) => (
                      <Link
                        key={category}
                        href={`/berita?category=${encodeURIComponent(category)}`}
                        className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-primary/10 hover:text-primary transition-all group"
                      >
                        <span>{category}</span>
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </Card>

                {/* Contact Card */}
                <Card className="p-6 bg-gradient-to-br from-primary/5 via-blue-50 to-white border-primary/20 shadow-lg">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Hubungi Kami</h3>
                  <p className="text-sm text-slate-600 mb-5">
                    Butuh informasi lebih lanjut? Tim kami siap membantu Anda.
                  </p>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start gap-2 hover:bg-white"
                      onClick={() => window.location.href = 'tel:+622173883507'}
                    >
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-xs text-slate-500">Telepon</div>
                        <div className="font-semibold text-slate-900">(021) 7388-3507</div>
                      </div>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start gap-2 hover:bg-white"
                      onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                    >
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Share2 className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-xs text-slate-500">WhatsApp</div>
                        <div className="font-semibold text-slate-900">Chat Langsung</div>
                      </div>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
