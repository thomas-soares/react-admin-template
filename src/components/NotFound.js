import ReactBodyMovin from "react-bodymovin";
import NotFoundAnimation from "./../404.json";

const NotFound = () => {
    const bodyMovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: NotFoundAnimation
    };

    return(
        <div>
            <ReactBodyMovin option={bodyMovinOptions} />
        </div>
    );
}

export default NotFound;