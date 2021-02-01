import React from 'react';
import '../../public/assets/styles/App.scss';

import Introduction from '../components/page/Introduction';
import Categories from '../components/page/Categories';
import Projects from '../components/page/Projects';
import Project from '../components/page/Project';
import Contact from '../components/page/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import useProjects from '../hooks/useInitialState';
const API = 'http://localhost:1337/api/v1/projects';
const headers = new Headers();
const CONFIG = {
    method: 'GET',
    headers: headers
}

const Home = () => {
    const projects = useProjects(API, CONFIG);
    return (
        <>
            <Introduction />
                <Categories title="Mis proyectos">
                    {
                        projects.length === 0 ? <p>No ha proyectos disponibles</p> :
                            <Projects>
                                {
                                    projects.map(item =>
                                        <Project key={item.objectId} {...item} />
                                    )
                                }
                            </Projects>
                    }
                </Categories>
            {/* <Contact /> */}
        </>
    )
};

export default Home;