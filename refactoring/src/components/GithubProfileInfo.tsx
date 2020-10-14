import React from 'react';
import './GithubProfileInfo.css';

type GithubProfileInfoProps = {
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
  html_url: string;
}

function GithubProfileInfo ({
  name, thumbnail, bio, blog, html_url
}: GithubProfileInfoProps ) {
  return (
    <div className="GithubProfileInfo">
      <div className="profile-head">
        <img src={thumbnail} alt="user thumbnail" />
        <div className="name">{name}</div>
      </div>
      <p>{bio}</p>
      {blog !== '' && <div>blog: <a href={blog}>{blog}</a></div>}
      <div>github: <a href={html_url}>{html_url}</a></div>
    </div>
  );
}

export default GithubProfileInfo;