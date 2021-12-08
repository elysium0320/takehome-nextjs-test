import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import SubmitModal from './'
import { mockData } from '../../mock-data'
import { SelectedCard } from '../../pages'

describe('Category component', () => {
  const selectedCards: SelectedCard = mockData.selectedCards
  const handleModalClose = jest.fn()

  test('renders correctly', () => {
    const { container, getByRole, getByText } = render(
      <SubmitModal
        isOpen={true}
        selectedCards={selectedCards}
        handleModalClose={handleModalClose}
      />
    )

    expect(container).toBeInTheDocument()
    expect(getByText('Success')).toBeInTheDocument()

    Object.keys(selectedCards).forEach((categoryId) => {
      const re = new RegExp(categoryId as string, 'i')
      expect(getByText(re)).toBeInTheDocument()

      expect(getByText(selectedCards[categoryId].title)).toBeInTheDocument()
    })

    const closeButton = getByRole('button')

    expect(closeButton).toBeInTheDocument()

    fireEvent.click(closeButton)

    expect(handleModalClose).toHaveBeenCalled()
    expect(handleModalClose).toHaveBeenCalledTimes(1)
  })
})
