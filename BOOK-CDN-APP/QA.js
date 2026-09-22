export default function QA(props) {
    const question = React.createElement("h3",
        { style: { color: "darkblue", marginBottom: "5px" } }, "Q: " + props.question);
    const answer = React.createElement("p",
        { style: { color: "darkgreen", marginTop: "0" } }, "A: " + props.answer);
    const divider = React.createElement("hr", { style: { borderColor: "#ccc" } });
    const div = React.createElement("div",
        {class name:}, [question,answer,divider]);
    return div;
}

