function Progress(props){
    return(
        <>
        <div>
            <h3>{props.name}</h3>
            <p>This is a simple progress bar component.</p>
        </div>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: '70%' }}></div>
            </div>
            
        </>
    )
}

export default Progress;