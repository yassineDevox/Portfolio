import React from 'react'

const Timelines = ({ timeLineData }) => {
  return (
    <section class="section timeline">
      {/* <!-- section-title --> */}
      <div class="section-title">
        <h2>timeline</h2>
        <div class="underline"></div>
      </div>
      {/* <!-- end of section title --> */}
      <div class="section-center timeline-center">
        {/* <!-- single timeline item --> */}

        {
          timeLineData.map(
            (t, index) 
            => <Timeline 
                data={t} 
                key={id} 
                index={index + 1} 
            />
          )
        }
      </div>
    </section>
  )
}

export default Timelines
