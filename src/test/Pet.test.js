import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Pet from '../components/Pet'

const match = { params : { baseId : 1} }
// const pet1 = { name: "doggog",
//                params : { baseId : 1} }
// const pet2 = { name: "kitteb",
//                params : { baseId : 2}}
// const pets = [pet1, pet2]

test('pet info is shown', () => {

  window.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve(pets),
    });
  });

  let mock: any = jest.fn()

  const {getAllByTestId} = render(<Pet
                                   match={match}
                                   />)
})