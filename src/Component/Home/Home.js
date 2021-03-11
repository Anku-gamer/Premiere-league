import React, { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {
    const [leagues,setLeagues] = useState([]);
  useEffect(() => {
    fetch ('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
    .then (res => res.json())
    .then (data => setLeagues(data.teams))
  })
    return (
        <div>
            <h1 style={{color: 'white',fontStyle:"oblique"}}>Premiere League</h1>
        <div className="grid-container">
        {
          leagues.map( league => <League league={league}></League>)
        }
        </div>
        </div>
    );
};

export default Home;