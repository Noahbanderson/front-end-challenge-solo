import {useState} from 'react'
import {toast} from 'react-toastify'

import {Api} from '../../api'
import {Representative} from '../../api/models/representative'

import {USStates} from '../../constants/USStates'

type Props = {
  setRepresentatives: (reps: Representative[]) => void
}

type RepresentativeType = 'house' | 'senator' | ''

export default function Header({setRepresentatives}: Props) {
  const [repType, setRepType] = useState<RepresentativeType>('')
  const [state, setState] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    const response = await Api.fetchRepresentatives(
      state,
      repType === 'senator',
    )

    if (200 <= response.status && response.status < 300) {
      if (response.data.success) {
        setRepresentatives(response.data.results)
      } else {
        // Data issue
        toast.error('Oops, something went wrong...')
      }
    } else {
      // Request issue
      toast.error('Oops, an error occurred')
    }
    setIsLoading(false)
  }

  return (
    <header>
      <h1 className="text-blue mb-10">Who&apos;s My Representative</h1>
      <hr />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row my-5 md: items-start"
      >
        <div className="flex flex-col mr-10">
          <label htmlFor="representativeType" className="pb-2">
            Representative
          </label>
          <select
            id="representativeType"
            className="border rounded p-1"
            required
            value={repType}
            onChange={event =>
              setRepType(event.target.value as RepresentativeType)
            }
          >
            <option value="" />
            <option value="house">House Representative</option>
            <option value="senator">Senator</option>
          </select>
        </div>
        <div className="flex flex-col mr-10 mt-5 md:mt-0">
          <label htmlFor="state" className="pb-2">
            State
          </label>
          <select
            id="state"
            className="border rounded p-1"
            required
            value={state}
            onChange={event => setState(event.target.value)}
          >
            <option value="" />
            {USStates.map(state => (
              <option key={state.StateAbbr} value={state.StateAbbr}>
                {state.StateName}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-end mt-8 md:mt-0">
          <button
            type="submit"
            className="bg-blue text-white rounded shadow-md px-2 py-1 hover:bg-darkBlue flex"
          >
            {isLoading && <div className="spinner-darkblue-sm mr-3 mt-0.5" />}
            {isLoading ? 'Loading' : 'Search'}
          </button>
        </div>
      </form>
    </header>
  )
}
