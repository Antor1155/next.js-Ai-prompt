"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"


import Profile from "@components/Profile"

const OtherProfile = ({params}) => {
    const searchParams = useSearchParams()
    const userName = searchParams.get("name")
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetchPosts = async () =>{
          const response = await fetch(`/api/users/${params.id}/posts`)
          const data = await response.json()
          setPosts(data)
        }
        if(params?.id){
            fetchPosts()
        }
      }, [])


    return (
        <Profile 
            name={userName}
            desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of thir imagination`}
            data={posts}
        ></Profile>
    )
}

export default OtherProfile