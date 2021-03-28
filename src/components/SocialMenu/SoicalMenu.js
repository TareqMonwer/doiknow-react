import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './SocailMenu.scss';


const SocialMenu = () => {
    return (
        <div className="hidden sm:block social-menu w-full p-2 sm:px-0
            bg-gray-900 text-white shadow-xs">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <div className="contact-items flex">
                    <div className="contact-item">
                        <FontAwesomeIcon className="fws-icon" icon={faPhoneAlt} />
                    017456821
                </div>
                    <div className="contact-item">
                        <FontAwesomeIcon className="fws-icon" icon={faEnvelope} />
                    example@example.com
                </div>
                </div>
                <div className="socialmedia-links-items flex">
                    <div className="media-link">
                        <a href="#linktowebpage">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                    <div className="media-link">
                        <a href="#linktowebpage">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                    <div className="media-link">
                        <a href="#linktowebpage">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialMenu;