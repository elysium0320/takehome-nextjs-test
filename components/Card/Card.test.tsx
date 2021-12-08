import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import Card from './'
import { mockData } from '../../mock-data'

describe('Card component', () => {
  const card = mockData.categories[0].items[0]
  const updateItems = jest.fn()

  test('renders correctly', () => {
    const { container, getByRole, getByText } = render(
      <Card
        card={card}
        updateItems={updateItems}
        categoryId={mockData.categories[0].id}
      />
    )

    expect(container).toBeInTheDocument()

    expect(getByText(card.title)).toBeInTheDocument()

    const cardImage = getByRole('img')

    expect(cardImage).toBeInTheDocument()
    expect(cardImage).toHaveAttribute('alt', card.title)
  })

  test('fires callback on button click', () => {
    const { getByRole } = render(
      <Card
        card={card}
        updateItems={updateItems}
        categoryId={mockData.categories[0].id}
      />
    )

    const button = getByRole('button')

    fireEvent.click(button)

    expect(updateItems).toHaveBeenCalled()
    expect(updateItems).toHaveBeenCalledTimes(1)
    expect(updateItems).toHaveBeenCalledWith('best-picture', {
      title: 'Nomadland',
      photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
      id: 'nomadland',
    })
  })

  test('changes styles on hover Card', () => {
    const { container, getByText } = render(
      <Card
        card={card}
        updateItems={updateItems}
        categoryId={mockData.categories[0].id}
      />
    )

    fireEvent.mouseOver(container)

    expect(container.firstElementChild).toHaveStyle({
      'background-color': 'rgba(52, 172, 156, var(--tw-bg-opacity))',
    })
    expect(getByText(card.title)).toHaveStyle(
      'color: rgba(255, 255, 255, var(--tw-text-opacity))'
    )
  })
})
