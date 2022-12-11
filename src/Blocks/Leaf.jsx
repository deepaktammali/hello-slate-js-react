import clsx from "clsx";

const Leaf = (props) => {
    console.log(props.leaf)
    return <span {...props.attributes} className={
        clsx(
            props.leaf.bold ? "font-semibold" : "font-normal"
        )
    }>{props.children}</span>
}

export default Leaf;