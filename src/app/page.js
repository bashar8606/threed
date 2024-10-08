import HomeAbout from '@/widgets/HomeAbout'
import HomeBanner from '@/widgets/HomeBanner'
import HomeBrands from '@/widgets/HomeBrands'
import HomeChoose from '@/widgets/HomeChoose'
import HomeFeatures from '@/widgets/HomeFeatures'
import HomePresentation from '@/widgets/HomePresentation'
import HomeTestimonials from '@/widgets/HomeTestimonials'
import HomeVideo from '@/widgets/HomeVideo'

export default function Home() {
  return (
    <main className='bg-secondary'>
      <HomeBanner />
      <HomeBrands/>
      <HomePresentation/>
      <HomeAbout/>
      <HomeVideo/>
      <HomeChoose/>
      <HomeFeatures/>
      <HomeTestimonials/>
    </main>
  )
}


