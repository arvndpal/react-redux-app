import React from 'react'
import CourseForm from './CourseForm'
import { shallow } from 'enzyme'


function renderCourseForm(args) {
  const { saving } = args || false
  const defaultProps = {
    authors: [],
    course: {},
    saving,
    errors: {},
    onSave: jest.fn(),
    onChange: jest.fn()
  }

  // var props = { ...defaultProps, ...args }
  return shallow(<CourseForm {...defaultProps} />)
}

it('renders form and header', () => {
  const wrapper = renderCourseForm({ saving: true })
  // console.log(wrapper.debug())
  expect(wrapper.find('form').length).toBe(1)
  expect(wrapper.find('h2').text()).toEqual('Add Course')
})

it('labels save buttons as "Save" when not saving', () => {
  const wrapper = renderCourseForm()
  expect(wrapper.find('button').text()).toBe('Save')
})

it('labels save button as "Saving..." when saving', () => {
  const wrapper = renderCourseForm({ saving: true })
  expect(wrapper.find('button').text()).toBe('Saving...')
})
