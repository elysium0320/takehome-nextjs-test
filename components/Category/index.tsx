import React from 'react'
import Card, { CardData } from '../Card'

export type CategoryData = {
  id: string
  items: CardData[]
}

type CategoryProps = {
  categoryData: CategoryData
  updateItems: (categoryId: string, card: CardData) => void
}

const Category = ({ categoryData, updateItems }: CategoryProps) => {
  return (
    <div className="mb-7 sm:mb-12">
      <h2 className="capitalize text-2xl mmd:text-3xl font-semibold bg-hover-color p-2 mb-5 mmd:mb-8">
        {categoryData.id}
      </h2>
      <div className="grid sm:grid-cols-2 mmd:grid-cols-3 gap-6">
        {categoryData.items &&
          categoryData.items.length &&
          categoryData.items.map((card) => (
            <Card
              card={card}
              key={card.id}
              categoryId={categoryData.id}
              updateItems={updateItems}
            />
          ))}
      </div>
    </div>
  )
}

export default Category
