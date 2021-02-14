import {Home, Send, Add, 
    CommentSharp,
    SupervisorAccountSharp
} from '@material-ui/icons';
import {RiLoginBoxLine} from 'react-icons/ri'

export default () => {
    return (
        <div 
          className="flex min-sidebar teko-font bg-white shadow-md flex-auto h-24 leftSidebar max-w-xs min-h-screen justify-center"
          style={{fontSize: '35px'}}
          >
            
            <div className="flex flex-col item-center">
                <div className="pl-3 pt-5 text-left">NEXT JS</div>
                <span className="pb-12" /> 

                <div className="flex flex-col pb-5">
                    <div className="pl-3 pb-3 font-sans text-lg text-gray-500"> Get started </div>
                    <button className="btn mb-4 btn-root hover:bg-indigo-900 hover:text-gray-50 active">
                        <Home className="mr-2"/> 
                        <span className="btn-menu">Welcome</span>
                    </button>
                </div>
 
                <div className="flex flex-col pb-5">
                    <div className="pl-3 pb-3 font-sans text-lg text-gray-500"> Blog administration</div>
                    <button className="btn mb-4 btn-root hover:bg-indigo-900 hover:text-gray-50">
                        <Send className="mr-2"/> 
                        <span className="btn-menu">Show posts</span>
                    </button>
                    <button className="btn mb-4 btn-root hover:bg-indigo-900 hover:text-gray-50">
                        <Add className="mr-2"/> 
                        <span className="btn-menu">Add new post</span>
                    </button>
                    <button className="btn mb-4 btn-root hover:bg-indigo-900 hover:text-gray-50">
                        <CommentSharp className="mr-2"/> 
                        <span className="btn-menu">comments</span>
                    </button>
                </div>

                <div className="flex flex-col pb-5">
                    <div className="pl-3 pb-3 font-sans text-lg text-gray-500"> User accounts</div>
                    <button className="btn mb-4 btn-root hover:bg-indigo-900 hover:text-gray-50">
                        <SupervisorAccountSharp className="mr-2"/> 
                        <span className="btn-menu">Users</span>
                    </button>
                    <button className="btn mb-4 btn-root hover:bg-indigo-900 hover:text-gray-50">
                        <Add className="mr-2"/> 
                        <span className="btn-menu">Add new user</span>
                    </button>
                </div>

                <div className="flex flex-col pb-5">
                    <div className="pl-3 pb-3 font-sans text-lg text-gray-500"> Auth</div>
                    <button className="btn mb-4 btn-root hover:bg-indigo-900 hover:text-gray-50">
                        <RiLoginBoxLine size='24px' className="ml-1 mr-2"/> 
                        <span className="btn-menu">Login</span>
                    </button>
                </div>
           
            </div>
        </div>
    );
}