import {describe, it, expect} from 'vitest'

import {mount} from '@vue/test-utils'
import Button from './Button.vue'

describe('Button', () => {
    it('renders properly', () => {
        const wrapper = mount(
            Button,
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
