import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RightSidebar() {
  return (
    <div className="space-y-8 text-white">
      <div>
        <h3 className="text-lg font-semibold">On This Page</h3>
        <a href="#faq" className="block py-1 text-sm text-white hover:text-gray-400">
          FAQ
        </a>
      </div>
      <Card className="border-muted bg-black text-white">
        <CardHeader>
          <CardTitle>Bring your app built with shadcn to life on Vercel</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-white">
            Trusted by OpenAI, Sonos, Chick-fil-A, and more.
          </p>
          <p className="text-sm text-white">
            Vercel provides tools and infrastructure to deploy apps and features at scale.
          </p>
          <Button variant="outline" className="w-full bg-black">
            Deploy Now
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

