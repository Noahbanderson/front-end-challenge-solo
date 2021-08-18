import {useState} from 'react'

import {Representative} from '../../api/models/representative'

import Header from './header'
import RepInfo from './RepInfo'
import RepList from './RepList'

export default function HomePage() {
  const [representatives, setRepresentatives] = useState<Representative[]>([])
  const [currentRep, setCurrentRep] = useState<Representative>()

  return (
    <div className="py-6 px-10">
      <Header setRepresentatives={setRepresentatives} />
      <main className="flex flex-col md:flex-row w-full pt-4">
        <RepList
          representatives={representatives}
          setCurrentRep={setCurrentRep}
        />
        <RepInfo currentRep={currentRep} />
      </main>
    </div>
  )
}
