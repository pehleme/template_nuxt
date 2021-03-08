import { mount } from '@vue/test-utils';
import Icon from '@/components/Icon.vue';

describe('Icon', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Icon);
    expect(wrapper.vm).toBeTruthy();
  });
});
