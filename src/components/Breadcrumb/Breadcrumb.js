import './Breadcrumb.scss';

const Breadcrumb = () => {
    return (
        <ol className="arrows hidden md:block">
            <li><a href="#todo">Women</a></li>
            <li><a href="#todo">Pants</a></li>
            <li><a href="#todo">The Sideswept Dhoti</a></li>
        </ol>
    );
}

export default Breadcrumb;