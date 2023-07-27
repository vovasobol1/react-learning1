import React from 'react';
import classes from './Profile.module.css'

const Profile = () =>{
    return(
        <div className={classes.content}>
            <div>
            <img src='https://pibig.info/uploads/posts/2022-05/1651860433_1-pibig-info-p-atmosfernie-oboi-na-rabochii-stol-krasivo-1.jpg'></img>
            </div>
            <div>
            ava + description
            </div>
            <div>
            my posts
            <div >
                new post
            </div>
            <div className={classes.item}>
                post1
            </div>
            <div className={classes.item}>
                post2
            </div>
            </div>
        </div>
    );
}

export default Profile ;