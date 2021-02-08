
import React from 'react';
import {Dashboard, Send, Add, CommentSharp, AccountBox, AccountTreeSharp, SupervisorAccountSharp} from '@material-ui/icons';
import { Button } from '@material-ui/core';

export default () => {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
      };
    return (
        <div 
          className="flex teko-font bg-white shadow-md flex-auto h-24 leftSidebar max-w-xs min-h-screen justify-center"
          style={{fontSize: '35px'}}
          >
            
            <div className="flex flex-col item-center">
                <div className="pl-3 pt-5 pb-12">NEXT JS</div>

                <div className="flex flex-col pb-8">
                    <div className="pl-3 pb-3 font-sans text-lg text-gray-500"> Get started </div>
                    <Button className="hover:bg-indigo-500 " style={{display: 'flex', justifyContent: 'end'}}>
                        <Dashboard className="mr-2"/> 
                        <span className="font-serif text-xs capitalize"> Dashboard</span>
                    </Button>
                </div>
 
                <div className="flex flex-col pb-5">
                    <div className="pl-3 pb-3 font-sans text-lg text-gray-500"> Blog administration</div>
                    <Button className="hover:bg-indigo-500 pb-4" style={{display: 'flex', justifyContent: 'end'}}>
                        <Send className="mr-2"/> 
                        <span className="font-serif text-xs capitalize"> Show posts</span>
                    </Button>
                    <Button className="hover:bg-indigo-500 pb-4" style={{display: 'flex', justifyContent: 'end'}}>
                        <Add className="mr-2"/> 
                        <span className="font-serif text-xs capitalize"> Add new post</span>
                    </Button>
                    <Button className="hover:bg-indigo-500 pb-4" style={{display: 'flex', justifyContent: 'end'}}>
                        <CommentSharp className="mr-2"/> 
                        <span className="font-serif text-xs capitalize"> Show comments</span>
                    </Button>
                </div>

                <div className="flex flex-col pb-5">
                    <div className="pl-3 pb-3 font-sans text-lg text-gray-500"> User accounts</div>
                    <Button className="hover:bg-indigo-500 pb-4" style={{display: 'flex', justifyContent: 'end'}}>
                        <SupervisorAccountSharp className="mr-2"/> 
                        <span className="font-serif text-xs capitalize"> Show list</span>
                    </Button>
                    <Button className="hover:bg-indigo-500 pb-4" style={{display: 'flex', justifyContent: 'end'}}>
                        <Add className="mr-2"/> 
                        <span className="font-serif text-xs capitalize"> Add new user</span>
                    </Button>
                </div>
           
            </div>
        </div>
    );
}