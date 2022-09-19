// import axios from "axios";
// import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link/*, useNavigate*/ } from "react-router-dom";
import { setTeam } from "../../store/actions/team-action";


const TeamListItem = ({_id, coach, name, deleteTeam }) => {

    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSelectedTeam = () => {
            // dispatch(setTeam({name:name, teamId: _id}));
            dispatch(setTeam({name, teamId: _id}));
    }

    const userRole = useSelector(state => state.auth.userRole);

    const onDelete = () => {
        // axios.delete(`http://localhost:8080/api/team/${_id}`)
        //     .then((response) => {
        //         navigate('/team');
        //     })
        //     .catch()
        deleteTeam(_id);
    }
    
    return (
        <>
            <article className='container'>
                <div className='cardTeam'>
                    <div role='button' onClick={handleSelectedTeam}>
                        <h3>{name}</h3>
                        <p>Coach : {coach.firstname}</p>
                        
                    </div>
                    <div>
                        {userRole === 'admin' && (
                            <div>
                                <Link to={`/teamToUpdate/${_id}`}><button className='buttonAdmin'>Modifier</button></Link>
                                <button onClick={onDelete}  className='buttonAdmin'>Supprimer</button>
                            </div>
                        )}
                    </div>
                </div>
            </article>
        </>
    )
};

export default TeamListItem;