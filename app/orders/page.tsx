import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { OrderItem } from "./components/order-item"
import { BottomNav } from "./components/bottom-nav"

export default function OrdersPage() {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-xl font-bold">04.40</div>
        <div className="flex items-center gap-1">
          <div className="h-4 w-4">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                fill="currentColor"
                d="M12 21.6L9 18.6H3V12.6L0 9.6L3 6.6V0.6H9L12 -2.4L15 0.6H21V6.6L24 9.6L21 12.6V18.6H15L12 21.6Z"
              />
            </svg>
          </div>
          <div className="h-4 w-4">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                fill="currentColor"
                d="M12 21.6C7.03 21.6 3 17.57 3 12.6C3 7.63 7.03 3.6 12 3.6C16.97 3.6 21 7.63 21 12.6C21 17.57 16.97 21.6 12 21.6Z"
              />
            </svg>
          </div>
          <div className="h-4 w-4 flex items-center">
            <div className="w-6 h-2 bg-black rounded-full" />
          </div>
        </div>
      </div>

      <main className="flex-1 flex flex-col max-w-md mx-auto w-full">
        <h1 className="text-2xl font-bold px-4 py-6">Orders</h1>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="w-full justify-start px-4 h-12 border-b rounded-none bg-transparent">
            <TabsTrigger
              value="history"
              className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none"
            >
              History
            </TabsTrigger>
            <TabsTrigger
              value="ongoing"
              className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none"
            >
              Ongoing
            </TabsTrigger>
            <TabsTrigger
              value="scheduled"
              className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none"
            >
              Scheduled
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="flex-1">
            <div className="divide-y">
              <OrderItem icon="food" title="Nasi Goreng Tomboy, BSD" status="Food delivered" time="Yesterday, 19:33" />
              <OrderItem icon="trip" title="Jalan Alsintan" status="Trip completed" time="Yesterday, 15.12" />
              <OrderItem icon="food" title="KOI Thé, AEON Mall BSD" status="Food delivered" time="15 Jul, 14:12" />
              <OrderItem
                icon="food"
                title="Pizza Hut Delivery - PHD, Cisauk Lapan BSD"
                status="Food delivered"
                time="15 Jul, 14:09"
              />
              <OrderItem icon="food" title="Auntie Anne's, AEON Mall" status="Food delivered" time="18 Jun, 17:09" />
              <OrderItem
                icon="food"
                title="Cold Stone Ice Cream, Aeon Mall"
                status="Food delivered"
                time="18 Jun, 17:04"
              />
              <OrderItem
                icon="food"
                title="Pizza Hut Delivery - PHD, Cisauk Lapan BSD"
                status="Food delivered"
                time="18 Jun, 16:45"
              />
            </div>
          </ScrollArea>
        </Tabs>
      </main>

      <BottomNav />
    </div>
  )
}

