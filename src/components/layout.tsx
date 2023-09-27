import Footer from "@retrojb/components/footer";
import Navbar from "@retrojb/components/navbar";
import Meta from "@retrojb/components/meta";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children}: Props) => {
  return (
      <>
        <Meta />
        <Navbar />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </>
  )
}

export default Layout