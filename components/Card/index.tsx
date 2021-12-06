import Image from 'next/image'

export type CardData = {
  id: string
  title: string
  photoUrL: string
}

type Props = {
  card: CardData
  key: string
  updateItems: (categoryId: string, card: CardData) => void
  categoryId: string
}

const Card = ({ card, updateItems, categoryId }: Props) => {
  return (
    <div className="group text-center bg-card-bg hover:bg-card-hover-bg rounded-xl p-5 transition-all hover:shadow-card-hv-shadow hover:scale-105">
      <h3 className="text-2xl font-bold mb-4 group-hover:text-white">
        {card.title}
      </h3>
      <div className="px-5 mb-4">
        <Image
          src={card.photoUrL}
          alt={card.title}
          width={300}
          height={420}
          layout="responsive"
        />
      </div>
      <button
        className="text-white hover:text-black focus:text-black bg-card-selected-bg hover:bg-card-bg focus:bg-btn-focus-bg px-5 py-2 rounded transition-all"
        onClick={() => updateItems(categoryId, card)}
      >
        Select Nominee
      </button>
    </div>
  )
}

export default Card
