import { Routes } from '@angular/router';
import {Home} from "./home/home"
import {About} from './about/about'
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';

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
    }
];
