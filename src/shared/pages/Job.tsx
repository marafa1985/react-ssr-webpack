import React from 'react'
import ThemeContext from '../Context/ThemeContext'
import { JobInfo, JobDetails } from '../Elements'
import { JobDB } from '../DB/JobDB'
import { Link } from 'react-router-dom'


const Job = () => {
  const passedID = 1;
  let passedJob = JobDB.filter(job => job.id == Number(passedID))[0];
  return (
    <ThemeContext>
      <JobInfo>
        <div>
          <Link to='/' title="Job List">&larr; Back</Link>
          <h1> {passedJob ? passedJob.title : 'Job not found'}</h1>
          {passedJob && <button>Apply for Job</button>}
          {passedJob && <div>
            <div className="descTitle">Job Description</div>
            <JobDetails theme={{ fulltext: true }}>{passedJob.description}</JobDetails>
          </div>}
        </div>
      </JobInfo>
    </ThemeContext>
  )
}



export default Job