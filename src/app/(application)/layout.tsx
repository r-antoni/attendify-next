import Header from "@/components/header"
import Sidebar from "@/components/sidebar"

export default function ApplicationLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <div className="hidden md:block fixed md:w-64">
            <Sidebar />
        </div>
        <div className="md:ml-64 border-2">
            <Header />
            {children}
        </div>  
      </>
    )
  }