import CustomCarousel from "@/Components/CustomCarousel"
import Layout from "@/Layouts/Layout"
import { Head, usePage } from "@inertiajs/react"
import { Typography } from "@material-tailwind/react"

const Index = () => {
  const { payments } = usePage().props
  const navbarHeight = document.getElementById('navbar')?.offsetHeight

  return (
    <Layout>
      <Head title="Home" />
      <div
        style={{
          height: `calc(90vh - ${navbarHeight}px)`
        }}
      >
        <CustomCarousel />
      </div>
      <div className="text-3xl text-gray-900 font-bold flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 px-3 py-6">
        <Typography variant="h4" className="text-center">Payment Channels</Typography>
        <div className="flex justify-start space-x-6 py-3 flex-nowrap overflow-x-scroll w-full md:justify-center md:flex-wrap md:overflow-auto">
          {
            payments.map(payment => 
              <div key={payment.name} className="bg-gray-50 rounded-xl shadow-lg text-center p-3 min-w-fit">
                <Typography variant="h6" className="mb-1">{ payment.name }</Typography>
                <div className="flex justify-center items-center space-x-3">
                  {
                    payment.items.map(item =>
                      <img key={item} className="h-12 w-12 rounded-xl shadow-md" src={item} />
                    )
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>
      <Typography variant="h1" className="text-center my-3">New Products</Typography>
      <Typography variant="h1" className="text-center my-3">Top-Rated Products</Typography>
      <Typography variant="h1" className="text-center my-3">Top-Selling Products</Typography>
    </Layout>
  )
}

export default Index