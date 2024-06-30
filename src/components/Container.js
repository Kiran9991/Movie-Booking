const Container = (props) => {
    return <div style={{ marginLeft: `${props.size}`, marginTop:'5rem'}}>{props.children}
    </div>
}

export default Container