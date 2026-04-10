"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, RefreshCw } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Global application error:", error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center p-4">
          <Card className="w-full max-w-md text-center">
            <CardContent className="p-8">
              <div className="mb-6">
                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">Erro Crítico</h1>
                <p className="text-gray-600">Ocorreu um erro crítico na aplicação. Por favor, recarregue a página.</p>
              </div>

              <Button onClick={reset} className="w-full">
                <RefreshCw className="w-4 h-4 mr-2" />
                Recarregar Página
              </Button>

              <div className="mt-6 pt-6 border-t border-gray-200/40">
                <p className="text-sm text-gray-500">Suporte técnico:</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-blue-600">{siteConfig.phones.primary}</p>
                  <p className="text-blue-600">{siteConfig.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  )
}

