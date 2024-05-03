function Content() {
    return (
        <div>
            <div className='text-xl'>
                Dashboard de indicadores de notas y gráficas
            </div>
            <div className="collapse bg-base-200">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                Click me to show/hide content
                </div>
                <div className="collapse-content"> 
                <p>hello</p>
                </div>
            </div>
        </div>
    )
};

export default Content;