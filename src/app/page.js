import HomeAbout from '@/widgets/HomeAbout'
import HomeAnim from '@/widgets/HomeAnim'
import HomeApp from '@/widgets/HomeApp'
import HomeBanner from '@/widgets/HomeBanner'
import HomeFeatures from '@/widgets/HomeFeatures'
import HomePresentation from '@/widgets/HomePresentation'
import HomeTab from '@/widgets/HomeTab'
import HomeVideo from '@/widgets/HomeVideo'

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <HomePresentation/>
      <HomeAbout data={aboutData} />
      <HomeVideo/>
      <HomeFeatures id="whatweoffer"/>
      <HomeApp id="features" />
      <HomeTab id="five" />
      <HomeAnim id="contact" />
    </main>
  )
}




const aboutData = {
  cards: [
    {
      img: {
        url: "/assets/images/icons/icon-about1.svg",
        alt: ""
      },
      title: "Expertise & Innovation",
      description: "Backed by a team of educational experts and technology innovators"
    }, {
      img: {
        url: "/assets/images/icons/icon-about2.svg",
        alt: ""
      },
      title: "Community-Centric Approach",
      description: "Join a thriving community of educators, learners, institutions collaborating to shape the future of education."
    }, {
      img: {
        url: "/assets/images/icons/icon-about3.svg",
        alt: ""
      },
      title: "Tailored Learning Journeys",
      description: "Our focus is on creating personalized learning experiences, engagement and understanding"
    },
  ]
}