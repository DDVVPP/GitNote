import React from 'react'
import Link from 'next/link'

const Profile = () => {
  return (
    <>
    <h1>Profile</h1>
    <Link href="/profile/edit-profile">
      Edit Profile
    </Link>
    </>

  )
}

export default Profile
