interface Prop {
    title: string;
    bio: string;
    links: JSX.Element
}

export default function Card(props: Prop) {
    return (
        <div
            className="card"
            style={{
                margin: "auto",
                marginTop: "40px",
                backgroundColor: "rgba(177, 177, 177, 0.35)",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px",
                borderRadius: "40px",
            }}
        >
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.bio}</p>
                {props.links}
            </div>
        </div>
    );
}