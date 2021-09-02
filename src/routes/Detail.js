import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location: { state } } = this.props;
        if (state) {
            return (
                <div className="detail">
                    <div className="detail__img">
                        <img src={state.poster} title={state.title} alt={state.title} />
                    </div>
                    <div className="detail__content">
                        <div className="detail__title">
                            <h1>{state.title}</h1>
                            <h3>{state.year}</h3>
                        </div>
                        <ul className="genres">
                            <li>Genres : </li>
                            {state.genres.map((genre, index) => (
                                <li key={index} className="genres__genre">{genre}</li>
                            ))}
                        </ul>
                        <p className="detail__summary">Summary : {state.summary}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}


export default Detail;