import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { IJobItem, EnumEmploymentType } from '../shared/Types/Types';
import JobList from '../shared/Components/JobList';


configure({ adapter: new Adapter() });
describe('With Enzyme', () => {
    it('JobList shows "No job found"', () => {
        let jobArr: IJobItem[] = [];
        const app = shallow(<JobList jobList={jobArr} />)

        expect(app.find('span').text()).toEqual('No job found')
    })

    it('JobList shows "Avaliable List"', () => {
        let jobArr: IJobItem[] = [{
            id: 1,
            description: "job description",
            title: "job Title",
            employment_type: EnumEmploymentType.Full_Time
        }];
        const app = shallow(<JobList jobList={jobArr} />)
        expect(app.find('li').length).toBeGreaterThan(1);
    })
})
