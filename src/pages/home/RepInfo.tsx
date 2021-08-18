import {Representative} from '../../api/models/representative'

type Props = {
  currentRep?: Representative
}

export default function RepInfo({currentRep}: Props) {
  const inputClasses = 'bg-lightGrey my-2 px-3 py-2 rounded'

  return (
    <section
      data-name="info"
      className="flex md:pl-2 pt-10 md:pt-0 2xl:w-5/12 xl:w-1/2 md:w-full flex-col"
    >
      <h2 className="pb-2.5">Info</h2>
      <input
        disabled
        value={currentRep?.name.split(' ')[0] ?? ''}
        className={inputClasses}
        placeholder="First Name"
      />
      <input
        disabled
        value={currentRep?.name.split(' ')[1] ?? ''}
        className={inputClasses}
        placeholder="Last Name"
      />
      <input
        disabled
        value={currentRep?.district ?? ''}
        className={inputClasses}
        placeholder="District"
      />
      <input
        disabled
        value={currentRep?.phone ?? ''}
        className={inputClasses}
        placeholder="Phone"
      />
      <input
        disabled
        value={currentRep?.office ?? ''}
        className={inputClasses}
        placeholder="Office"
      />
      <a
        className="text-blue pt-2 pl-2"
        href={currentRep?.link}
        target="_blank"
        rel="noreferrer"
      >
        {currentRep?.link}
      </a>
    </section>
  )
}
