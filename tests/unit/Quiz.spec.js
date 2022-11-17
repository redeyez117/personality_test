import Quiz from "@/components/Quiz";
import {mount} from "@vue/test-utils";

describe('Quiz.vue', () => {
    it('It renders component ', function () {
        const wrapper = mount(Quiz)
        expect(wrapper.element).toMatchSnapshot();
    });

    it('has initial index of 0', ()=> {
        const wrapper = mount(Quiz)
        expect(wrapper.vm.currentIndex).toEqual(0)
    })


    it('increments index by 1', ()=> {
        const wrapper = mount(Quiz)
        wrapper.vm.nextQuestion()
        expect(wrapper.vm.currentIndex).toEqual(1)
    })
})
