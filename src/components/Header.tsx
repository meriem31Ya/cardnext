import React from 'react'

const Header = ({title}:{title:string}) => {
  return (
    <div className="px-4 py-2">
    <h1 className="text-gray-800 font-bold text-2xl uppercase">{title}</h1>
</div>
  )
}

export default Header