import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UiButton from './UiButton.vue'

describe('UiButton', () => {
  it('renders properly', () => {
    const wrapper = mount(
        UiButton,
        {
          slots: { default: 'Hello Vitest' },
          props: {
            size: 'lg',
          }
        })
    expect(wrapper.text()).toContain('Hello Vitest');
    //expect(wrapper.html()).toContain('--primary-300a');
    expect(wrapper.classes()).toContain('p-button-lg')
  })
})
