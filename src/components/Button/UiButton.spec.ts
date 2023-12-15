import {describe, it, expect} from 'vitest'

import {mount} from '@vue/test-utils'
import UiButton from './UiButton.vue'

describe('UiButton', () => {
    it('renders properly', () => {
        const wrapper = mount(
            UiButton,
            {
                slots: {default: 'Hello Vitest'},
                props: {
                    size: 'lg',
                    tint: 300,
                    color: 'red',
                }
            })
        expect(wrapper.text()).toContain('Hello Vitest');
        expect(wrapper.attributes().style).toContain('--red-300');
        expect(wrapper.classes()).toContain('p-button-lg')
    })
})
