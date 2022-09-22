import { useEffect, useState } from 'react';
import axios from 'axios';
import UserTeam from './user-team';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const CoachListItem = ({firstname, lastname, _id, deleteUser}) => {

    const [teams, setTeams] = useState([]);
    const userRole = useSelector(state => state.auth.userRole);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/team/user/${_id}`)
            .then((response) => {
                // console.log(response.data);
                setTeams(response.data)
            })
        }, [_id])
    
    
        const onDelete = () => {
            // axios.delete(`http://localhost:8080/api/team/${_id}`)
            //     .then((response) => {
            //         navigate('/team');
            //     })
            //     .catch()
            deleteUser(_id);
        }
    
    return (
        <>  
            <article className='container'>  

                <div className='card'>
                    <h3>{firstname} {lastname}</h3>
                    <ul>
                        {teams.map(coach => <UserTeam key={coach._id} {...coach} />)}
                    </ul>
                </div>

                <div>
                    {userRole === 'admin' && (
                        <div>
                            <Link to={`/userToUpdate/${_id}`}><button className='buttonAdmin'>Modifier</button></Link>
                            <button onClick={onDelete} className='buttonAdmin'>Supprimer</button>
                        </div>
                    )}
                </div>

            </article>   
        </>
    );
};

export default CoachListItem;