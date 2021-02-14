import { useRouter } from 'next/router'
import {GrMoreVertical} from 'react-icons/gr'
export default () => {
    const router = useRouter()
    const path = router.pathname;
    let title = "Welcome";

    const checkPath = (path) => {
        // Affichons un historique de naviguation en fonction de l'url
        switch (path) {
            case '/':
                title = "Welcome";
                break;
            case '/blog':
                title = "Blog administration";
                break;
            default:
                break;
        }
    }
    
    checkPath(path)

    return (
        <div 
          className="flex teko-font text-xl top-header flex-initial"
          >
            
            <div className="flex flex-col min-w-full ">
                <div className="flex flex-row justify-between pb-5">
                    <div className="pl-3 pt-5 text-center uppercase">{title}</div>
                    <span className="divider flex-1"></span>
                    <div className="pl-3 pt-5 text-center uppercase">
                        <button> 
                            <GrMoreVertical className="icons" /> 
                        </button>
                    </div>
                </div>
                <hr className="" /> 
            </div>
        </div>
    );
}