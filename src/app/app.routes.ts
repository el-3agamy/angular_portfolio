import { Routes } from '@angular/router';
import {Home} from "./home/home"
import {About} from './about/about'
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { NotFound } from './not-found/not-found';
import { ProjectDetails } from './project-details/project-details';

export const routes: Routes = [
    {
        path : "" ,
        redirectTo : "home" ,
        pathMatch : "full" , 
       

    } ,
    {
        path :"home" ,
        component : Home ,
        title : "Home"
    }
    ,
    
    {
        path : "about" ,
        component : About ,
        title : "About"

    } ,
    {
        path : "contact" ,
        component : Contact ,
        title: "Contacts"
    } ,
    {
        path : "portfolio" ,
        component : Portfolio ,
        title : "Portfolio"
    } ,
    {
        path :"portfolio/:id" ,
        component : ProjectDetails ,
        title : "portfolio/:id"
    } ,
    {
        path : "**" ,
        component : NotFound ,
        title : "Not found"
    }
];
