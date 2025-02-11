interface OrderItemProps {
  icon: "food" | "trip"
  title: string
  status: string
  time: string
}

export function OrderItem({ icon, title, status, time }: OrderItemProps) {
  return (
    <div className="flex items-start gap-4 p-4">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          icon === "food" ? "bg-red-100" : "bg-green-100"
        }`}
      >
        {icon === "food" ? (
          <div className="text-red-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.1 13.34L3.91 9.16C2.35 7.6 2.35 5.06 3.91 3.5C5.47 1.94 8.01 1.94 9.57 3.5L13.75 7.68L8.1 13.34Z" />
              <path d="M14.83 11.02L16.24 12.43L19.59 9.08L14.34 3.83L11 7.17L12.41 8.58L8.92 12.07L3.7 6.85L6.28 4.27L3.5 1.5L1 4L4.5 7.5L1.93 10.07L7.14 15.28L3.5 18.92L7 22.42L19.35 10.07L14.83 11.02Z" />
            </svg>
          </div>
        ) : (
          <div className="text-green-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 7C19 5.9 18.1 5 17 5H14V7H17V9.65L13.52 14H10V9H6C3.79 9 2 10.79 2 13V16H4C4 17.66 5.34 19 7 19S10 17.66 10 16H14.48L19 10.35V7ZM7 17C6.45 17 6 16.55 6 16H8C8 16.55 7.55 17 7 17Z" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-base">{title}</h3>
        <p className="text-gray-600">{status}</p>
        <p className="text-gray-500 text-sm">{time}</p>
      </div>
    </div>
  )
}

