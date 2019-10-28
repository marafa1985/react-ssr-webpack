import React, { Component } from 'react'
import { JobsGrid, JobHeader, JobDetails } from '../Elements/index'
import { IJobItem } from '../Types/Types'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';


interface IProps {
  jobList: IJobItem[]
}

interface IState {
  jobList: IJobItem[]
}

class JobList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      jobList: [...this.props.jobList]
    }
  }
  filterJobList (searchValue: string) {
    if (searchValue) {
      let newJobList = this.state.jobList.filter(job => job.description.includes(searchValue))
      this.setState({
        jobList: [...newJobList]
      })
    } else {
      this.setState({
        jobList: [...this.props.jobList]
      })
    }
  }
  render() {
    let { jobList } = this.state;
    return (
      <div>
        <SearchBar onFilterJob={this.filterJobList.bind(this)} />

        {jobList.length === 0 ? <span>No job found</span> : <JobsGrid>
          <li>{jobList.length} jobs found</li>
          {
            jobList.map((job: IJobItem) => {
              return (
                <li key={job.id} >
                  <div>
                    <JobHeader>
                      <Link to={`/job/${job.id}`} title={job.title}>{job.title}</Link>
                      <span>{job.employment_type}</span></JobHeader>
                    <JobDetails>{job.description}</JobDetails>
                  </div>
                </li>
              )
            })
          }
        </JobsGrid>}
      </div>
    )
  }
}

export default JobList
