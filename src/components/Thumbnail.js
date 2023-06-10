// SCSS Imports
import "./Thumbnail.scss";

// Image Imports
import instructorimg from "../images/instructor.png";

const Thumbnail = () => {
    return (
        <>
            <div className="thumbnail-container">
                <div className="thumbnail-content">
                    <h3 className="date-and-duration">
                        April 01, 2023 | 53:43
                    </h3>
                    <div className="title-and-instructor-container">
                        <h1 className="video-title">Neuro-Somatic Mat Flow</h1>
                        <h3 className="instructor-name">
                            Instructor: Elisabeth
                        </h3>
                    </div>
                    <img className="instructor-image" src={instructorimg} />
                </div>
            </div>
        </>
    );
};
export default Thumbnail;