import React, { useEffect } from 'react'
import './Work.css'

import { projectsData } from './WorkData'
import { projectsNav } from './WorkData'
import WorksItem from './WorksItem'

function Works() {
    // **************** Project filtering *************** 

    const [item, setItem] = React.useState({ name: 'all' })
    const [projects, setProjects] = React.useState([])
    console.log(item)
    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData)
        } else {
            const newProjects = projectsData.filter((project) => {
                console.log(project.category === item.name)
                return project.category.toLocaleLowerCase() === item.name
            })
            console.log(newProjects)
            setProjects(newProjects)
        }
    }, [item])
    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent })
        console.log(setItem({ name: e.target.textContent.toLocaleLowerCase() }))
        // ****** setting acitive***** 
        setActive(index)
    }


    // ***************** Active projects button ************ 

    const [active, setActive] = React.useState(0)



    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => {
                                handleClick(e, index)
                            }}
                            className={`${active === index ? "work__active" : ''} work__item`}
                            key={item.id}>{item.name}</span>
                    )
                })}
            </div>
            <div className="work__container container grid">
                {projects.map(item => {
                    return (
                        <WorksItem
                            item={item}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Works
