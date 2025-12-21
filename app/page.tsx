// app/page.tsx
import Hero from '@/app/components/Hero'
import PourQui from '@/app/components/PourQui'
import Tarifs from '@/app/components/Tarifs'
import Processus from '@/app/components/Processus'
import PourquoiNous from '@/app/components/PourquoiNous'
import Realisations from '@/app/components/Realisations'
import FAQ from '@/app/components/FAQ'
import Contact from '@/app/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <PourQui />
      <Tarifs />
      <Processus />
      <PourquoiNous />
      <Realisations />
      <FAQ />
      <Contact />
    </>
  )
}