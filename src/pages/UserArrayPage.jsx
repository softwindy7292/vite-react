import React, { useRef } from 'react'
import CreateUser from '../components/CreateUser'
import UserList from '../components/UserList'

const UserArrayPage = () => {
    const users = [
        {
            id: 1,
            username: '홍길동',
            email: 'abcd@gmail.com',
        },
        {
            id: 2,
            username: '고길동',
            email: 'efgh@gmail.com',
        },
        {
            id: 3,
            username: '김길동',
            email: 'ijkl@gmail.com',
        },
    ]

    const nextId = useRef(users.length + 1)

    const onCreate = () => {
        nextId.current += 1
    }

    return (
        <div className="text-center mt-5">
            <CreateUser />
            <UserList users={users} />
        </div>
    )
}

export default UserArrayPage
