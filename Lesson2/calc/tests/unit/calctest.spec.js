import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
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
    it("Test1: Check that operand input field receives expected value", () => {
        const wrapper = shallowMount(Calc);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(1);
        expect(wrapper.vm.op1).toBe(1);
    });
    it("Test2: Check that result of SUM operation is correct", () => {
        const wrapper = shallowMount(Calc);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(1);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(1);
        const btn = wrapper.find('button[id="plus"]');
        btn.trigger('click');
        expect(wrapper.vm.result).toBe(2);
    });
    it("Test3: check that result of MINUS operation is correct", () => {
        const wrapper = shallowMount(Calc);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(1);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(1);
        const btn = wrapper.find('button[id="minus"]');
        btn.trigger('click');
        expect(wrapper.vm.result).toBe(0);
    });
    it("Test4: check that result of MULTIPLY operation is correct", () => {
        const wrapper = shallowMount(Calc);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(2);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(2);
        const btn = wrapper.find('button[id="multiply"]');
        btn.trigger('click');
        expect(wrapper.vm.result).toBe(4);
    });
    it("Test5: check that result of DIVIDE operation is correct", () => {
        const wrapper = shallowMount(Calc);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(4);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(2);
        const btn = wrapper.find('button[id="divide"]');
        btn.trigger('click');
        expect(wrapper.vm.result).toBe(2);
    });
    it("Test6: check that result of DIVIDE BY 0 operation returns error", () => {
        const wrapper = shallowMount(Calc);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(4);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(0);
        const btn = wrapper.find('button[id="divide"]');
        btn.trigger('click');
        expect(wrapper.vm.error).toBeTruthy;
    });
    it("Test7: check that result of POW operation is correct", () => {
        const wrapper = shallowMount(Calc);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(2);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(5);
        const btn = wrapper.find('button[id="pow"]');
        btn.trigger('click');
        expect(wrapper.vm.result).toBe(32);
    });
    it("Test8: check that result of CEIL operation is correct", () => {
        const wrapper = shallowMount(Calc);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(5);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(2);
        const btn = wrapper.find('button[id="ceil"]');
        btn.trigger('click');
        expect(wrapper.vm.result).toBe(2);
    });
    it("Test9: check that result of CEIL BY 0 operation returns error", () => {
        const wrapper = shallowMount(Calc);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(4);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(0);
        const btn = wrapper.find('button[id="divide"]');
        btn.trigger('click');
        expect(wrapper.vm.error).toBeTruthy;
    });
    it("Test10: check that keyboard checkbox can be selected", () => {
        const wrapper = shallowMount(Calc);
        const keyboard = wrapper.find('input[id=keyboard]');
        keyboard.setChecked();
        expect(wrapper.vm.keyboard).toBeTruthy;
    });

    it("Test11: check that only 1 radiobutton is selected at a time", () => {
        const wrapper = mount(Calc, {
            data() {
                return { keyboard: true }
            }
        });
        const opid1 = wrapper.find('#opid1');
        const opid2 = wrapper.find('#opid2');
        expect(opid1.element.checked).toBeTruthy;
        expect(opid2.element.checked).toBeFalsy;

    });
    it("Test12: check that click on keyboard calls Postvalue method", async () => {
        const mockMethods = {
            postValue: jest.fn()
        }
        const wrapper = mount(Calc, {
            data() {
                return { keyboard: true }
            },
            methods: mockMethods
        }
        );
        const one = wrapper.find('button[id="1"]')
        await one.trigger('click');
        expect(mockMethods.postValue).toBeCalled();
    });
    it("Test13: check that click on keyboard passes value", () => {

        const wrapper = shallowMount(Calc, {
            data() {
                return { keyboard: true }
            }
        });
        const op1 = wrapper.find('input[name=op1]');
        wrapper.vm.postValue(1);
        expect(wrapper.vm.op1).toBe(1);
    });
});