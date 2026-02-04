import { Routes } from '@angular/router';
import {Home} from "./home/home"
import {About} from './about/about'
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { NotFound } from './not-found/not-found';
import { ProjectDetails } from './project-details/project-details';

export const routes: Routes = [
    {
        path :"home" ,
        redirectTo : "" ,
        pathMatch : "full"
    }
    ,

    {
        path : "" ,
        component : Home 

    } ,
    {
        path : "about" ,
        component : About

    } ,
    {
        path : "contact" ,
        component : Contact
    } ,
    {
        path : "portfolio" ,
        component : Portfolio
    } ,
    {
        path :"portfolio/:id" ,
        component : ProjectDetails 
    } ,
    {
        path : "**" ,
        component : NotFound
    }
];
