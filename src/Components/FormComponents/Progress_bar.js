import React from 'react'

const Progress_bar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'white',
		borderRadius: 40,
		margin: 50,
        border: 'black',
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:40,
	
	}

		
	return (
        <div> 
        <div className="number"> 
        <span>{`${progress}%`}</span>  </div>
	<div style={Parentdiv}>
	<div style={Childdiv}>
	</div>
	</div>
    </div>
	)
}

export default Progress_bar;
