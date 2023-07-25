import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'
import { ThemeProvider } from "@/components/theme.provider"
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Welcome />
    </>
  )
}
