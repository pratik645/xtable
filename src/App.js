import {useState} from 'react';
import './App.css';

export default function App() {
    
    const [data,setData] = useState(
        [
        {date : "2022-09-01 ",views: 100,article:"Article 1"},
        {date : "2023-09-01 ",views: 100,article:"Article 1"},
        {date : "2023-09-02 ",views: 150,article:"Article 2"},
        {date : "2023-09-02 ",views: 120,article:"Article 3"},
        {date : "2020-09-03 ",views: 200,article:"Article 4"}

    ]
    )
    
    const handleDate = () =>{
        const sortedDate = [...data].sort((a,b)=> new Date(b.date) - new Date(a.date))
        setData(sortedDate)
    }
    const handleView = () =>{
        const sortedView = [...data].sort((a,b)=> b.views - a.views)
        setData(sortedView)
    }
    
  return (
      <>
          <div>
              <h1>Date and Views Table</h1>
              <button onClick = {handleDate}>Sort by Date</button>
              <button onClick = {handleView}>Sort by Views</button>
          </div>
          <div>
              <table>
                  <tr>
                      <thead>
                          <th>Date</th>
                          <th>Views</th>
                           <th>Article</th>
                      </thead>
                  </tr>
                  <tbody>
                      {data.map((item,index)=>(
                          <tr key = {index}>
                              <td>{item.date}</td>
                              <td>{item.views}</td>
                              <td>{item.article}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </>
  )
}

