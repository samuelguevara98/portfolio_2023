import React from 'react'
import {FaGithub, FaExternalLinkAlt, FaLinkedin} from 'react-icons/fa'
import {MdOutgoingMail} from 'react-icons/md'
import {RiPagesFill} from 'react-icons/ri'

const SocialLinks = () => {

    const links = [
        {
            id: 1, 
            child: (
                <>
                LinkedIn <FaLinkedin size={35} />
                </>
            ), 
            href: 'https://www.linkedin.com/in/samuel-guevara-b71873171', 
            target: '_blank',
            style: 'rounded-tr-md',   
        },
        {
            id: 2, 
            child: (
                <>
                GitHub <FaGithub size={35} />
                </>
            ), 
            href: 'https://github.com/samuelguevara98', 
            target: '_blank',
        },
        {
            id: 3, 
            child: (
                <>
                E-Mail <MdOutgoingMail size={35} />
                </>
            ), 
            href: 'mailto:samsjamin@outlook.com',  
            target: '_blank',
        },{
            id: 4, 
            child: (
                <>
                Resume <RiPagesFill size={35} />
                </>
            ), 
            href: '/SGresume.pdf',
            style: 'rounded-br-md',  
        }
    ]

  return (
    <div className='hidden xl:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            
            {links.map(({id, child, href, target, style, download}) => (
                           <li
                           key={id}
                           className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-black" +
                             " " + style}>
                               <a href={href} target="_blank" className='flex justify-between 
                               items-center w-full text-white' rel="noreferrer" >
                                    {child}
                               </a>
                           </li>
            ))}
        </ul>
    </div>

  )
}

export default SocialLinks