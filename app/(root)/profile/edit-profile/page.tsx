import React from 'react'
import Link from 'next/link'

const EditProfile = () => {
  return (
    <>
    <h1>Edit Profile</h1>
    <Link href="/profile/edit-profile/update-socials">
      Update social link
    </Link>
    </>
  )
}

export default EditProfile
