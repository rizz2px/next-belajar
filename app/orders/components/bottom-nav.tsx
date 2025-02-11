import { Home, Percent, MessageCircle } from "lucide-react"

export function BottomNav() {
  return (
    <div className="flex items-center justify-around border-t bg-white py-2">
      <button className="flex flex-col items-center gap-1 px-4 py-2">
        <Home className="h-6 w-6" />
        <span className="text-xs">Home</span>
      </button>
      <button className="flex flex-col items-center gap-1 px-4 py-2">
        <Percent className="h-6 w-6" />
        <span className="text-xs">Promos</span>
      </button>
      <button className="flex flex-col items-center gap-1 px-4 py-2 text-green-600">
        <MessageCircle className="h-6 w-6" />
        <span className="text-xs">Orders</span>
      </button>
      <button className="flex flex-col items-center gap-1 px-4 py-2 relative">
        <MessageCircle className="h-6 w-6" />
        <span className="text-xs">Chat</span>
        <span className="absolute top-1 right-3 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          4
        </span>
      </button>
    </div>
  )
}

