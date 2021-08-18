import {Representative} from '../../api/models/representative'

type Props = {
  representatives: Representative[]
  setCurrentRep: (rep: Representative) => void
}

export default function RepList({representatives, setCurrentRep}: Props) {
  type clickEvent = React.MouseEvent<HTMLTableRowElement, MouseEvent>
  function handleClickOnRep(event: clickEvent) {
    const name: string = (event.target as any).innerText
    const rep = representatives.find(rep => rep.name === name)!
    setCurrentRep(rep)
  }

  return (
    <section
      data-name="people-list"
      className="flex md:pr-2 pt-5 md:pt-0 2xl:w-5/12 xl:w-1/2 md:w-full flex-col"
    >
      <h2 className="pb-5">
        List / <span className="text-blue">Representative</span>
      </h2>
      <table>
        <thead>
          <tr className="text-left bg-lighterGrey">
            <th className="font-normal w-9/12 px-3 py-3">Name</th>
            <th className="font-normal w-3/12">Party</th>
          </tr>
        </thead>
        <tbody>
          {representatives.length > 0 ? (
            representatives.map(rep => (
              <tr
                key={rep.name}
                className="border-b border-spacing-3 hover:bg-lightGrey"
                onClick={handleClickOnRep}
              >
                <td className="pl-3 py-3">{rep.name}</td>
                <td>{rep.party[0]}</td>
              </tr>
            ))
          ) : (
            <tr className="border-b border-spacing-3">
              <td className="pl-3 py-3">No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}
