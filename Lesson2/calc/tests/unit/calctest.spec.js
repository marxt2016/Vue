import { shallowMount } from '@vue/test-utils'
import Calc from '@/components/Calc.vue'


describe("Calc", () => {
    // test('Test1.1', () => {
    // let wrapper;
    // const createComp = () => {
    //     wrapper = mount(Calc)
    // }

    // const wrapper = mount(Calc, {
    //     propsData: {
    //         message:"xxx"
    //     }
    // })
    // expect(wrapper.text()).toContain("xxx");
    // });
    it("Test1", () => {
        const wrapper = shallowMount(Calc);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(1);
        expect(wrapper.vm.op1).toBe(1);
    })
}
)